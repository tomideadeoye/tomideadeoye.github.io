import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import RotatingCard, {
	RotatingCardFront,
	RotatingCardBack,
} from "examples/Cards/RotatingCard";
import Card from "@mui/material/Card";
import MKBox from "components/MKBox";
import MKBadge from "components/MKBadge";
import MKTypography from "components/MKTypography";
import BaseLayout from "layouts/sections/components/BaseLayout";
import View from "layouts/sections/components/View";
import personality from "personality-config";
import routes from "routes";
// import NavbarDark from "components/CustomComponents/NavbarDark";
import bgFront from "assets/images/rotating-card-bg-front.jpeg";
import bgBack from "assets/images/rotating-card-bg-back.jpeg";
import { Divider, Stack } from "@mui/material";
import { Box } from "@mui/system";
import Footer from "components/footer";

function Home() {
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

			<Card
				sx={{
					p: 2,
					mx: { xs: 2, lg: 3 },
					mt: 1,
					mb: 1,
					backgroundColor: ({ palette: { white }, functions: { rgba } }) =>
						rgba(white.main, 0.8),
					backdropFilter: "saturate(200%) blur(30px)",
					boxShadow: ({ boxShadows: { xxl } }) => xxl,
				}}
			>
				{/* EMBED */}
				<Container>
					<Grid
						container
						item
						xs={12}
						lg={6}
						flexDirection="column"
						alignItems="center"
						sx={{ textAlign: "center", mt: 14, mb: 2, mx: "auto", px: 0.75 }}
					>
						<MKBadge
							variant="contained"
							color="info"
							badgeContent="Blog"
							container
							sx={{ mb: 2 }}
						/>
						<MKTypography variant="h3" fontWeight="bold">
							Research Content and Infographics
						</MKTypography>
					</Grid>
				</Container>

				<Container>
					{personality.writings.map((item) => (
						<BaseLayout key={item.link + item.name}>
							<View
								tit1="Summary"
								tit2="Author View"
								title={item.type ?? "Content"}
								mapDetails={
									<iframe
										title="Executive Summary"
										width="100%"
										height="900"
										src={item.link}
										allow="autoplay"
									/>
								}
							>
								<Stack
									direction="row"
									spacing={0}
									divider={<Divider orientation="vertical" flexItem />}
								>
									<Box
										sx={({ breakpoints }) => ({
											width: "40%",
											padding: "1rem",
											[breakpoints.down("md")]: {
												width: "100%",
											},
										})}
									>
										<RotatingCard>
											<RotatingCardFront image={bgFront} title={item.name} />
											<RotatingCardBack
												image={bgBack}
												action={{
													type: "external",
													route: item.publishedLink ?? item.link,
													label: "Link",
												}}
											/>
										</RotatingCard>
									</Box>
									<Box
										sx={{
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
											padding: "1rem",
											fontSize: "1rem",
											width: "60%",
										}}
									>
										{item.description}
									</Box>
								</Stack>
							</View>
						</BaseLayout>
					))}
				</Container>
			</Card>
			<MKBox pt={6} px={1} mt={6}>
				<Footer />
			</MKBox>
		</>
	);
}

export default Home;
