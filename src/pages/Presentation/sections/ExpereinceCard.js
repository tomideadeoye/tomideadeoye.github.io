/* eslint-disable react/no-array-index-key */

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import RotatingCard, {
	RotatingCardFront,
	RotatingCardBack,
} from "examples/Cards/RotatingCard";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import DefaultReviewCard from "examples/Cards/ReviewCards/DefaultReviewCard";
import { Box, Chip } from "@mui/material";
import { makeStyles } from "@mui/styles";
import personality from "personality-config";
import bgFront from "assets/images/rotating-card-bg-front.jpeg";
import bgBack from "assets/images/rotating-card-bg-back.jpeg";

const useStyles = makeStyles(() => ({
	skillsBox: {
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "center",
		alignItems: "center",
		marginBottom: "1rem",

		"& > *": {
			margin: "1vw",
		},
	},
}));
function Information() {
	const classes = useStyles();
	return (
		<MKBox component="section" py={12} mt="1rem">
			{" "}
			<Container>
				<Grid
					container
					item
					xs={12}
					lg={6}
					justifyContent="center"
					sx={{ mx: "auto", textAlign: "center" }}
				>
					<MKTypography variant="h2">Software and Data Projects</MKTypography>
				</Grid>
				<Grid container spacing={3} sx={{ mt: 4, mb: 6 }}>
					{personality.projects.map((item) => (
						<Grid item xs={12} lg={3} sx={{ mx: "auto" }}>
							<RotatingCard>
								<RotatingCardFront
									image={bgFront}
									title={item.name}
									description={item.description}
								/>
								<RotatingCardBack
									image={bgBack}
									description={item.tasks}
									action={{
										type: "external",
										route: item.links.live,
										label: "Link",
									}}
								/>
							</RotatingCard>
						</Grid>
					))}
				</Grid>
				{Object.keys(personality.experiences).map((key) => (
					<>
						{personality.experiences[key].length > 0 && (
							<Grid
								container
								item
								xs={12}
								lg={6}
								mt={4}
								justifyContent="center"
								sx={{ mx: "auto", textAlign: "center" }}
							>
								<MKTypography variant="h2">{`${
									key.charAt(0).toUpperCase() + key.slice(1)
								} Experience`}</MKTypography>
							</Grid>
						)}
						<Grid container spacing={3} sx={{ mt: 4 }}>
							{Object.keys(personality.experiences[key]).map((item) => (
								<Grid item xs={12} md={6} lg={4}>
									<DefaultReviewCard
										color="info"
										name={`${personality.experiences[key][item].name} |  ${personality.experiences[key][item].position}`}
										review={personality.experiences[key][item].description}
									/>
								</Grid>
							))}
						</Grid>
					</>
				))}
				<Grid
					container
					item
					xs={12}
					lg={6}
					justifyContent="center"
					sx={{ mx: "auto", textAlign: "center" }}
				>
					<MKTypography mt={7} mb={5} variant="h3">
						Skills & Interests
					</MKTypography>
				</Grid>{" "}
				<Box className={classes.skillsBox}>
					{Object.keys(personality.skills).map((key, index) => (
						<Chip
							key={index}
							label={personality.skills[key].name}
							variant="outlined"
						/>
					))}
					{Object.keys(personality.interests).map((key, index) => (
						<Chip
							key={index}
							label={personality.interests[key].name}
							color="info"
						/>
					))}
				</Box>
				<Divider sx={{ my: 6 }} />
			</Container>
		</MKBox>
	);
}

export default Information;
