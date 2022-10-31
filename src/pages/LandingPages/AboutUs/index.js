import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";

// About Us page sections
// import Information from "pages/LandingPages/AboutUs/sections/Information";
// import Team from "pages/LandingPages/AboutUs/sections/Team";
// import Featuring from "pages/LandingPages/AboutUs/sections/Featuring";
import Newsletter from "pages/LandingPages/AboutUs/sections/Newsletter";
import routes from "routes";
import personality from "personality-config";
import bgImage from "assets/images/bg-about-us.jpg";
import Footer from "pages/Presentation/Footer";
import DashMarketPlace from "./sections/DashMarketPlace";

function AboutUs() {
	return (
		<>
			<DefaultNavbar
				routes={routes}
				action={{
					type: "external",
					route: personality.cta.link,
					label: personality.cta.name,
					color: "default",
				}}
				transparent
				light
			/>
			<MKBox
				minHeight="75vh"
				width="100%"
				sx={{
					backgroundImage: ({
						functions: { linearGradient, rgba },
						palette: { gradients },
					}) =>
						`${linearGradient(
							rgba(gradients.dark.main, 0.6),
							rgba(gradients.dark.state, 0.6)
						)}, url(${bgImage})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
					display: "grid",
					placeItems: "center",
				}}
			>
				<Container>
					<Grid
						container
						item
						xs={12}
						lg={8}
						justifyContent="center"
						alignItems="center"
						flexDirection="column"
						sx={{ mx: "auto", textAlign: "center" }}
					>
						<MKTypography
							variant="h1"
							color="white"
							sx={({ breakpoints, typography: { size } }) => ({
								[breakpoints.down("md")]: {
									fontSize: size["3xl"],
								},
							})}
						>
							Real human stories?
						</MKTypography>
						<MKTypography
							variant="body1"
							color="white"
							opacity={0.8}
							mt={1}
							mb={3}
						>
							Learn more @
						</MKTypography>
						<MKButton
							color="default"
							sx={{ color: ({ palette: { dark } }) => dark.main }}
						>
							Rhodetails
						</MKButton>
						<MKTypography variant="h6" color="white" mt={8} mb={1}>
							Find us on
						</MKTypography>
						<MKBox display="flex" justifyContent="center" alignItems="center">
							<MKTypography
								component="a"
								variant="body1"
								color="white"
								href="#"
								mr={3}
							>
								<i className="fab fa-facebook" />
							</MKTypography>
							<MKTypography
								component="a"
								variant="body1"
								color="white"
								href="#"
								mr={3}
							>
								<i className="fab fa-instagram" />
							</MKTypography>
							<MKTypography
								component="a"
								variant="body1"
								color="white"
								href="#"
								mr={3}
							>
								<i className="fab fa-twitter" />
							</MKTypography>
							<MKTypography
								component="a"
								variant="body1"
								color="white"
								href="#"
							>
								<i className="fab fa-google-plus" />
							</MKTypography>
						</MKBox>
					</Grid>
				</Container>
			</MKBox>
			<Card
				sx={{
					p: 2,
					mx: { xs: 2, lg: 3 },
					mt: -8,
					mb: 4,
					boxShadow: ({ boxShadows: { xxl } }) => xxl,
				}}
			>
				<DashMarketPlace />
				{/* <Information /> */}
				{/* <Featuring /> */}
				<Newsletter />
			</Card>
			<MKBox pt={6} px={1} mt={6}>
				<Footer />
			</MKBox>
		</>
	);
}

export default AboutUs;
