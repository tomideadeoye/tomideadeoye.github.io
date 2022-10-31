/* eslint-disable react/prop-types */
// prop-types is library for typechecking of props

import MKBox from "components/MKBox";
import MKAvatar from "components/MKAvatar";
import MKTypography from "components/MKTypography";

function DefaultReviewCard({ color, image, name, review }) {
	return (
		<MKBox
			variant={color === "transparent" ? "contained" : "gradient"}
			bgColor={color}
			borderRadius="xl"
			shadow={color === "transparent" ? "none" : "md"}
			p={3}
			sx={{
				height: "90%",
				"&:hover": {
					boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
					transition: "opacity 0.3s ease-in-out",
					background: "#425df5",
					height: "100%",
				},
			}}
		>
			{image && (
				<MKAvatar
					src={image}
					alt={name}
					variant="rounded"
					size="lg"
					shadow="md"
					sx={{ mt: -5, mb: 1 }}
				/>
			)}
			<MKBox lineHeight={1}>
				<MKTypography
					display="block"
					variant={image ? "button" : "h6"}
					fontWeight="bold"
					color={
						color === "transparent" || color === "light" ? "dark" : "white"
					}
					mb={0.5}
				>
					{name}
				</MKTypography>
			</MKBox>
			<MKTypography
				variant="body2"
				color={color === "transparent" || color === "light" ? "text" : "white"}
				my={4}
			>
				{review}
			</MKTypography>
		</MKBox>
	);
}

// Setting default values for the props of DefaultReviewCard
DefaultReviewCard.defaultProps = {
	color: "transparent",
	image: "",
};

export default DefaultReviewCard;
