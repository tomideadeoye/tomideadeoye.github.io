import PropTypes from "prop-types";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import { Grid } from "@mui/material";

function DefaultInfoCard({ title, description, direction, small }) {
	return (
		<MKBox
			lineHeight={1}
			p={direction === "center" ? 2 : 0}
			textAlign={direction}
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
			}}
		>
			<Grid
				container
				spacing={3}
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<MKTypography
					variant="5"
					fontWeight="bold"
					mt={1}
					mb={1.5}
					sx={(theme) => ({
						display: "flex",
						textAlign: "center",
						justifyContent: "center",
						alignItems: "center",
						[theme.breakpoints.down("md")]: { fontSize: "4vw" },
					})}
				>
					{title}
				</MKTypography>
			</Grid>
			<MKTypography
				sx={(theme) => ({
					[theme.breakpoints.down("md")]: {
						fontSize: "3.5vw",
					},
				})}
				display="block"
				variant={small ? "button" : "body2"}
				color="text"
				pr={direction === "left" ? 6 : 0}
				pl={direction === "right" ? 6 : 0}
			>
				{description.map((item) => (
					<ul>
						<li>{item}</li>
					</ul>
				))}
			</MKTypography>
		</MKBox>
	);
}

// Setting default props for the DefaultInfoCard
DefaultInfoCard.defaultProps = {
	direction: "left",
	small: false,
};

// Typechecking props for the DefaultInfoCard
DefaultInfoCard.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	direction: PropTypes.oneOf(["left", "right", "center"]),
	small: PropTypes.bool,
};

export default DefaultInfoCard;
