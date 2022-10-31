// import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import MKBox from "components/MKBox";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
// import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";
import Information from "pages/Presentation/sections/Information";
// import DesignBlocks from "pages/Presentation/sections/DesignBlocks";
// import Pages from "pages/Presentation/sections/Pages";
import ExpereinceCard from "pages/Presentation/sections/ExpereinceCard";
// import Download from "pages/Presentation/sections/Download";
import Author from "pages/LandingPages/Author/sections/Profile";
import AuthorContact from "pages/LandingPages/Author/sections/Contact";
// import BuiltByDevelopers from "pages/Presentation/components/BuiltByDevelopers";
import routes from "routes";
import Footer from "components/footer";
import bgImage from "assets/images/headerImage.jpg";
import personality from "personality-config";
import Hero from "./components/Hero";
import TweetShare from "./components/TweetShare";

const data = {
	name: personality.name,
	tag: `${personality.bio.short}`,
	coverImage: bgImage,
	email: `mailto:${personality.contact.mail}`,
	phone: `Tel:${personality.contact.phone}`,
};

function Presentation() {
	return (
		<>
			<DefaultNavbar
				routes={routes}
				action={{
					type: "external",
					route: personality.cta.link,
					label: personality.cta.name,
					color: "info",
				}}
				sticky
			/>
			<Hero data={data} />

			<Card
				sx={{
					p: 2,
					mx: { xs: 2, lg: 3 },
					mt: -8,
					mb: 4,
					backgroundColor: ({ palette: { white }, functions: { rgba } }) =>
						rgba(white.main, 0.8),
					backdropFilter: "saturate(200%) blur(30px)",
					boxShadow: ({ boxShadows: { xxl } }) => xxl,
				}}
			>
				<Author />
				<Information />
				{/* <Container>
					<BuiltByDevelopers />
				</Container> */}
				<ExpereinceCard />
				<AuthorContact />
				<TweetShare />
				{/* <Download /> <DesignBlocks /> <Pages /> <Counters />    <Team /> */}
				{/* <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                variant="gradient"
                color="info"
                icon="flag"
                title="Getting Started"
                description="Check the possible ways of working with our product and the necessary files for building your own project."
                action={{
                  type: "external",
                  route: "https://rhodetails.com/",
                  label: "Let's start",
                }}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                color="info"
                icon="precision_manufacturing"
                title="Plugins"
                description="Get inspiration and have an overview about the plugins that we used to create the Material Kit."
                action={{
                  type: "external",
                  route: "https://www.creative-tim.com/learning-lab/react/overview/datepicker/",
                  label: "Read more",
                }}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                color="info"
                icon="apps"
                title="Components"
                description="Material Kit is giving you a lot of pre-made components, that will help you to build UI's faster."
                action={{
                  type: "external",
                  route: "https://www.creative-tim.com/learning-lab/react/alerts/material-kit/",
                  label: "Read more",
                }}
              />
            </Grid>
          </Grid>
        </Container> */}
			</Card>
			<MKBox pt={6} px={1} mt={9}>
				<Footer />
			</MKBox>
		</>
	);
}

export default Presentation;
