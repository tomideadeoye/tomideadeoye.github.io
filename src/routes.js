import Icon from "@mui/material/Icon";
import RssFeedIcon from "@mui/icons-material/RssFeed";
// import AboutUs from "layouts/pages/landing-pages/about-us";
import Home from "layouts/pages/presentation";
import Blog from "pages/Blog/index";
import ColdeStorage from "pages/coldeStorage/";
import DataObjectIcon from "@mui/icons-material/DataObject";
import ContactUs from "layouts/pages/landing-pages/contact-us";
import personality from "./personality-config";

const routeLocation = {
	home: "/",
	ABOUT_US: "/company/about-us",
	CONTACT_US: "/company/contact-us",
	blog: { link: "/blog", component: <Blog /> },
	coldeStorage: { link: "/colde-storage", component: <ColdeStorage /> },
};

const routes = [
	{
		name: "About Me",
		icon: <Icon>dashboard</Icon>,
		component: <Home />,
		columns: 1,
		rowsPerColumn: 2,
		collapse: [
			{
				name: personality.name,
				collapse: [
					{
						name: "Services",
						route: routeLocation.blog.link,
						component: routeLocation.blog.component,
					},
					{
						name: "Projects",
						route: routeLocation.home,
						component: <Home />,
					},
					{
						name: "Software Engineering Tutorials",
						route: routeLocation.blog.link,
						component: routeLocation.blog.component,
					},
					{
						name: "Blockchain Research & Infographics",
						route: routeLocation.blog.link,
						component: routeLocation.blog.component,
					},
					{
						name: "contact me",
						route: "/contact-me",
						component: <ContactUs />,
					},
				],
			},
		],
	},
	{
		name: "Colde Storage",
		icon: <DataObjectIcon />,
		route: routeLocation.coldeStorage.link,
		component: routeLocation.coldeStorage.component,
	},
	{
		name: "Blog",
		icon: <RssFeedIcon />,
		route: routeLocation.blog.link,
		component: routeLocation.blog.component,
	},
	// {
	//   name: "Proejcts",
	//   icon: <Icon>view_day</Icon>,
	//   collapse: [
	//     {
	//       name: "navigation",
	//       description: "See all navigations",
	//       dropdown: true,
	//       collapse: [
	//         {
	//           name: "navbars",
	//           route: "/sections/navigation/navbars",
	//           component: <Navbars />,
	//         },
	//   ],
	//     },

	//     {
	//       name: "Projects",
	//       description: "See all 32 examples",
	//       dropdown: true,
	//       collapse: [
	//         {
	//           name: "badges",
	//           route: "/sections/elements/badges",
	//           component: <Badges />,
	//         },
	//       ],
	//     },
	//   ],
	// },
];

export default routes;
