export const toolbox = {
	javascript: "javascript",
	react: "react",
	python: "python",
	django: "django",
	dart: "dart",
	flutter: "flutter",
	solidity: "solidity",
	"data science": "data science",
	backend: "backend",
	frontend: "frontend",

	// "machine learning",
	// "blockchain",
	node: "node",
	// "express",
	// "mongodb",
	// "mysql",
	// "postgresql",
	// "aws",
	// "azure",
	// "gcp",
	// "firebase",
	// "firestore",
	// "auth",
};

const coldestorage = {
	resources: [
		{
			link: ["http://appicon.co/"],
			description: "Favicon app icon generator",
			language: [toolbox.flutter],
		},
		{
			link: ["https://www.icons8.com", "https://www.vecteezy.com"],
			description: "Illustrations and images",
			language: [toolbox.flutter],
		},
		{
			link: ["https://www.dribble.com"],
			description: "Design Ideas",
			language: [toolbox.frontend],
		},
	],
	code: [
		{
			name: "Django Steps",
			code: [
				"create project",
				"create app",
				[
					"create model for data to store in database",
					"register model in admin",
					"admin.site.register(Product)",
					"update database",
					"python manage.py makemigrations && python manage.py migrate",
				],
				[
					"create view for product in views.py",
					"return request, response (html or httpresponse) and object",
					"register view url in url.py",
				],
				[
					"create template folder & html contents",
					"add template directory to settings.py > TEMPLATES",
					"DIRS :os.path.join(BASE_DIR, 'templates')",
					[
						"create base.html block inheritance",
						"normal html + {% block content%} {%endblock%} in base.html",
						"{% extends 'base.html' %} {% block content %} somethiing {% endblock content %} in !base.html",
						" {% include 'navbar.html' in base.html %} ",
					],
				],
				[
					"access context in html file",
					"{{ contextContent }}",
					"loopthrough context if a list",
				],
			],
			processExpantiation: [
				{
					description: "create project and setup_environment",
					code: [
						"mkdir tryDjango && cd tryDjango && virtualenv -p python3 . && source bin/activate && pip install django===2.0.7 && code .",
						"mkdir src && cd src && django-admin startproject projectName . && python manage.py runserver && python manage.py migrate",
						"python manage.py createsuperuser",
						"python manage.py startapp appname",
						"mkdir src && cd src && touch __init__.py && touch settings.py && touch urls.py && touch views.py",
						"python manage.py startapp firstapp",
						"deactivate",
						"pip freeze",

						{
							mac: "source bin/activate",
							windows: ".\\Scripts\\activate",
						},
					],
				},
				{
					description: "create model",
					code: [
						`from django.db import models
				from django.urls import reverse
				# Create your models here.
				class Product(models.Model):
					title       = models.CharField(max_length=120) # max_length = required
					description = models.TextField(blank=True, null=True)
					price       = models.DecimalField(decimal_places=2, max_digits=10000)
					summary     = models.TextField(blank=False, null=False)
					featured    = models.BooleanField(default=False) # null=True, default=True
				
					def get_absolute_url(self):
						return reverse("products:product-detail", kwargs={"id": self.id}) #f"/products/{self.id}/"`,
					],
				},
				{
					description: "loop through context if a list",
					code: [
						`{% for instance in object_list %}
								<p>{{ instance.id }} - <a href='{{ instance.get_absolute_url }}'>{{ instance.title }}</a></p>
			   			   {% endfor %}`,
						"{{orLoop.counter}",
						"{% if abc == 312%} <div{{xxx|add:22}}><div> {else} ... {% endif %}",
					],
				},
				{
					description: "interact with code from cli and create new products",
					code: [
						"python manage.py shell",
						"from products.models import Products",
						{
							description: "check existing products",
							code: "Products.objects.all()",
						},
						"Products.objects.create(name='product1', description='description1', price=1.00)",
						"Products.objects.get(id=1)",
					],
				},
				{
					description: "register url",
					code: [
						`from .views import (
						product_create_view, 
						product_delete_view,
						product_list_view,
						product_update_view,
						
					)	app_name = 'products'
					urlpatterns = [
						path('', product_list_view, name='product-list'),
						path('create/', product_create_view, name='product-list'),
						path('<int:id>/', product_detail_view, name='product-detail'),
						path('<int:id>/update/', product_update_view, name='product-update'),
						path('<int:id>/delete/', product_delete_view, name='product-delete'),
					]`,
					],
				},
			],

			language: ["django", "python"],
			description: `deactivate and activate virtualenv`,
		},
		{
			name: "Development Environment Scrapy",
			code: [
				`> cd my-dev
				> mkdir scrapy
				> cd scrapy
				> pyenv install 3.7.4
				> pyenv local 3.7.4
				> pipenv --python 3.7.4
				> pipenv install scrapy
				> pipenv shell
				> scrapy startproject truecar # create project
				> scrapy crawl truecar -o truecar.csv  # run the spider and output data to truecar.csv.
				scrapy shell 'https://en.wikipedia.org/wiki/Tesla,_Inc.' # open a shell to interact with the page
				response.css('table.wikitable tbody').get() # find selectors
				view(response) # in browser
				> scrapy shell -s USER_AGENT='Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36' 'https://www.truecar.com/used-cars-for-sale/listings/tesla/model-3/'
				`,
			],
			examples: [
				`import scrapy
			class TruecarSpider(scrapy.Spider):
				name = "truecar"
					def start_requests(self):
						urls = ['https://www.truecar.com/used-cars-for-sale/listings/tesla/model-3/']
						for url in urls:
							yield scrapy.Request(url=url, callback=self.parse)
					def parse(self, response):
						all_listings = response.xpath('//div[@data-qa="Listings"]')
						for tesla in all_listings:
							make_model = tesla.css('div[data-test="vehicleListingCardTitle"] > div')
							year = make_model.css('span.vehicle-card-year::text').get()
							model_raw = make_model.css('span.vehicle-header-make-model').get()
							model = model_raw[model_raw.find('>')+1:-7].replace('<!-- -->', '')
							tesla_data = {
							'url': 'http://truecar.com' + tesla.css('a::attr(href)').get(),
							'model': year + ' ' + model,
							'mileage': tesla.css('div[data-test="cardContent"] > div > div.text-truncate::text').get(),
							'price': tesla.css('h4::text').get(),
							}
							yield tesla_data`,
			],
			description: `Common CLI commands`,
			language: ["scrapy", "web scraping", "scraping"],
		},
		{
			name: "Selenium Browser automation",
			code: [
				`
				> brew install geckodriver # install firfox driver @require selenium
				> pipenv install selenium
				>
				
				`,
			],
			description: `Common CLI commands`,
			language: ["selenium", "web scraping", "scraping"],
			examples: [
				`from selenium.webdriver.support.ui import WebDriverWait
				import time
				start_url = 'https://www.iseecars.com/used-cars/used-tesla-for-sale#Location=66952' + '&Radius=all&Make=Tesla&Model=Model+3&Condition=used&_t=a&maxResults=15' + '&sort=BestDeal&sortOrder=desc&lfc_t0=MTU2Nzk2NzkzNDc2NQ%3D%3D'
				with webdriver.Firefox() as driver:
					wait = WebDriverWait(driver, 10)
					driver.get(start_url)
					time.sleep(10)
					teslas = driver.find_element_by_css_selector('div#cars_v2-result-list article')
					model = teslas.find_element_by_css_selector('h3')
					print(model.text)   // Returns: 2018 Tesla Model 3 Mid range battery - 5,818 mi
				`,
			],
		},
		{
			name: "CLI",
			code: [
				"pwd",
				"rm -rf folderName",
				"mkdir folderName",
				"touch folderName/fileName.txt",
				"ls",
				"cd",
				"sudo kill -9 `sudo lsof -t -i:3000`",
			],
			description: `Common CLI commands`,
		},
		{
			name: "Flutter background image",
			description: `Fill background with image flutter`,
			language: ["flutter", "dart"],
			code: [
				`Container(
					height: 200,
				width: double.infinity,
				decoration: const BoxDecoration(
				  image: DecorationImage(
					  image: AssetImage("assets/images/cat2.jpg"),
					  fit: BoxFit.cover),
				),
				child: // Foreground widget here
			  )`,
			],
		},
		{
			name: "Common Git commands",
			description: [`recover file from 2 commits back`],
			language: ["git"],
			code: [`git show HEAD~2:src/pages/Presentation/index.js`],
		},
		{
			name: "Check type",
			description: [`check types`],
			language: ["git"],
			code: [`console.log(Array.isArray(age));`],
		},
	],
};

export default coldestorage;

// dribble for design ideas
