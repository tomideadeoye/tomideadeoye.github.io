/* eslint-disable react/prop-types */
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import { makeStyles } from "@mui/styles";
import colors from "assets/theme/base/colors";

const useStyles = makeStyles(() => ({
	heroCover: {
		background: "blue",
		overflow: "hidden",
	},

	heroContainer: {
		backgroundSize: "cover",
		backgroundBlendMode: "saturation",
	},

	detailsContainer: {
		backgroundColor: `linearGradient(${colors.gradients.info.main}, ${colors.gradients.info.secondary})`,
	},
}));

function Hero({ data }) {
	const classes = useStyles();
	return (
		<MKBox component="header" position="relative" className={classes.heroCover}>
			<MKBox
				className={classes.heroContainer}
				display="flex"
				alignItems="center"
				minHeight="100vh"
				sx={{
					backgroundImage: `linear-gradient(black, black), url(${data.coverImage})`,
					backgroundSize: "contain",
					backgroundPosition: "center",
				}}
			>
				<Container>
					<Grid
						className={classes.detailsContainer}
						container
						item
						xs={12}
						md={7}
						lg={6}
						flexDirection="column"
						justifyContent="center"
						sx={{
							padding: "3rem",
							color: "grey",
							background: `linear-gradient(${colors.gradients.info.main}, ${colors.gradients.info.state})`,
						}}
					>
						<MKTypography
							variant="h2"
							color="white"
							mb={3}
							sx={({ breakpoints, typography: { size } }) => ({
								[breakpoints.down("md")]: {
									fontSize: size["3xl"],
								},
							})}
						>
							{data.name}
						</MKTypography>
						<MKTypography
							variant="body1"
							color="white"
							opacity={0.8}
							sx={{
								fontSize: "2vh",
							}}
						>
							{data.tag}
						</MKTypography>
						<Stack direction="row" spacing={1} mt={3}>
							<a href={data.mail} target="_blank" rel="noopener noreferrer">
								<MKButton color="white">E-Mail</MKButton>
							</a>
							<a href={data.phone} target="_blank" rel="noopener noreferrer">
								<MKButton variant="text" color="white">
									Phone
								</MKButton>
							</a>
						</Stack>
					</Grid>
				</Container>
			</MKBox>
		</MKBox>
	);
}

export default Hero;
