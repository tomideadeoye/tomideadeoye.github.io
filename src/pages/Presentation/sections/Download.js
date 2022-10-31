import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Tooltip from "@mui/material/Tooltip";

import MKBox from "components/MKBox";
// import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Images
import bgImage from "assets/images/shapes/waves-white.svg";

function Download() {
	return (
		<MKBox component="section" py={{ xs: 0, sm: 12 }}>
			<MKBox
				variant="gradient"
				bgColor="dark"
				position="relative"
				borderRadius="xl"
				sx={{ overflow: "hidden" }}
			>
				<MKBox
					component="img"
					src={bgImage}
					alt="pattern-lines"
					position="absolute"
					top={0}
					left={0}
					width="100%"
					zIndex={1}
					opacity={0.2}
				/>
				<Container sx={{ position: "relative", zIndex: 2, py: 12 }}>
					<Grid
						container
						item
						xs={12}
						md={7}
						justifyContent="center"
						mx="auto"
						textAlign="center"
					>
						<MKTypography variant="h3" color="white">
							Value Proposition
						</MKTypography>

						<MKTypography variant="body2" color="white" mb={6}>
							One of the tasking responsibilities of businesses in this digital
							age is transcending the noise and communicating their brand
							essence in a way that captures consumer attention and converts
							those attention into desirable actions for the business.
							<br />A recent study by Microsoft Corp reveals that the average
							attention span of a human is about 8 seconds and several brands
							are already competing for this time. What makes you stand out each
							time is a compelling brand message that prospects can identify
							with, a huge part of why storytelling matters. <br />
							There is no stronger connection between humans than storytelling.
							People want to interact with brands that see them, understand
							their needs and reflect their values – No better way to compel
							action and drive behavior than infusing storytelling into your
							digital marketing campaigns.
						</MKTypography>
						{/* <MKButton
              variant="gradient"
              color="info"
              size="large"
              component="a"
              href="https://rhodetails.com/"
              sx={{ mb: 2 }}
            >
              Download Now
            </MKButton> */}
					</Grid>
				</Container>
			</MKBox>
			<Container>
				<Grid container item xs={6} mx="auto">
					<MKBox textAlign="center">
						<MKTypography variant="h3" mt={6} mb={3}>
							Available on these technologies
						</MKTypography>
						<Grid container spacing={3} justifyContent="center">
							<Grid item xs={4} lg={2}>
								<Tooltip title="Bootstrap 5 - Most popular front-end component library">
									<MKBox
										component="a"
										href="https://www.creative-tim.com/product/material-kit"
										target="_blank"
									>
										<MKBox
											component="img"
											src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/bootstrap5.jpg"
											width="100%"
										/>
									</MKBox>
								</Tooltip>
							</Grid>
							<Grid item xs={4} lg={2}>
								<Tooltip title="Comming soon">
									<MKBox
										opacity={0.5}
										component="a"
										href="#"
										target="_blank"
										onClick={(e) => e.preventDefault()}
									>
										<MKBox
											component="img"
											src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/icon-tailwind.jpg"
											width="100%"
										/>
									</MKBox>
								</Tooltip>
							</Grid>
							<Grid item xs={4} lg={2}>
								<Tooltip title="Comming soon">
									<MKBox
										opacity={0.5}
										component="a"
										href="#"
										target="_blank"
										onClick={(e) => e.preventDefault()}
									>
										<MKBox
											component="img"
											src="https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/vue.jpg"
											width="100%"
										/>
									</MKBox>
								</Tooltip>
							</Grid>
							<Grid item xs={4} lg={2}>
								<Tooltip title="Comming soon">
									<MKBox
										opacity={0.5}
										component="a"
										href="#"
										target="_blank"
										onClick={(e) => e.preventDefault()}
									>
										<MKBox
											component="img"
											src="https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/angular.jpg"
											width="100%"
										/>
									</MKBox>
								</Tooltip>
							</Grid>
							<Grid item xs={4} lg={2}>
								<Tooltip title="Comming soon">
									<MKBox
										component="a"
										href="https://rhodetails.com/"
										target="_blank"
									>
										<MKBox
											component="img"
											src="https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/react.jpg"
											width="100%"
										/>
									</MKBox>
								</Tooltip>
							</Grid>
							<Grid item xs={4} lg={2}>
								<Tooltip title="Comming soon">
									<MKBox
										opacity={0.5}
										component="a"
										href="#"
										target="_blank"
										onClick={(e) => e.preventDefault()}
									>
										<MKBox
											component="img"
											src="https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/sketch.jpg"
											width="100%"
										/>
									</MKBox>
								</Tooltip>
							</Grid>
						</Grid>
					</MKBox>
				</Grid>
			</Container>
		</MKBox>
	);
}

export default Download;
