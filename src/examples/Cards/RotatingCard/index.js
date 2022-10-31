import { useState } from "react";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import MKBox from "components/MKBox";
import Icon from "@mui/material/Icon";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";
import { Link } from "react-router-dom";
import MuiLink from "@mui/material/Link";

function RotatingCard({ children }) {
	const [rotate, setRotate] = useState(false);

	const rotate0 = () => setRotate(false);
	const rotate180 = () => setRotate(true);

	return (
		<MKBox
			sx={{ perspective: "50rem" }}
			onMouseEnter={rotate180}
			onMouseLeave={rotate0}
		>
			<Card
				sx={{
					backgroundColor: "transparent",
					boxShadow: "none",
					position: "relative",
					transform: rotate ? "rotateY(180deg)" : "rotateY(0)",
					transformStyle: "preserve-3d",
					transition: "all 0.8s cubic-bezier(0.34, 1.45, 0.7, 1)",
					height: "fit-content",
				}}
			>
				{children}
			</Card>
		</MKBox>
	);
}

// Typechecking props for the RotatingCard
RotatingCard.propTypes = {
	children: PropTypes.node.isRequired,
};

export default RotatingCard;

export function RotatingCardFront({ color, image, icon, title, description }) {
	return (
		<MKBox
			display="flex"
			justifyContent="center"
			alignContent="center"
			borderRadius="lg"
			coloredShadow={color}
			width="100%"
			position="relative"
			zIndex={2}
			sx={{
				backgroundImage: ({
					palette: { gradients },
					functions: { linearGradient, rgba },
				}) =>
					`${linearGradient(
						rgba(
							gradients[color] ? gradients[color].main : gradients.info.main,
							0.85
						),
						rgba(
							gradients[color] ? gradients[color].main : gradients.info.main,
							0.85
						)
					)}, url(${image})`,
				backgroundSize: "cover",
				backfaceVisibility: "hidden",
			}}
		>
			<MKBox py={12} px={3} textAlign="center" lineHeight={1}>
				{icon && (
					<MKTypography variant="h2" color="white" my={2}>
						{typeof icon === "string" ? <Icon>{icon}</Icon> : icon}
					</MKTypography>
				)}
				<MKTypography variant="h3" color="white" gutterBottom>
					{title}
				</MKTypography>
				<MKTypography variant="body2" color="white" opacity={0.8}>
					{description}
				</MKTypography>
			</MKBox>
		</MKBox>
	);
}

// Setting default props for the RotatingCardFront
RotatingCardFront.defaultProps = {
	color: "info",
	icon: "",
};

// Typechecking props for the RotatingCardFront
RotatingCardFront.propTypes = {
	color: PropTypes.oneOf([
		"primary",
		"secondary",
		"info",
		"success",
		"warning",
		"error",
		"dark",
		"light",
	]),
	image: PropTypes.string.isRequired,
	icon: PropTypes.node,
	title: PropTypes.node.isRequired,
	description: PropTypes.node.isRequired,
};

export function RotatingCardBack({ color, image, title, description, action }) {
	return (
		<MKBox
			display="flex"
			justifyContent="center"
			alignItems="center"
			borderRadius="lg"
			coloredShadow={color}
			position="absolute"
			width="100%"
			height="fit-content"
			top={0}
			left={0}
			zIndex={5}
			sx={{
				backgroundImage: ({
					palette: { gradients },
					functions: { linearGradient, rgba },
				}) =>
					`${linearGradient(
						rgba(
							gradients[color] ? gradients[color].main : gradients.info.main,
							0.85
						),
						rgba(
							gradients[color] ? gradients[color].main : gradients.info.main,
							0.85
						)
					)}, url(${image})`,
				backgroundSize: "cover",
				backfaceVisibility: "hidden",
				transform: "rotateY(180deg)",
			}}
		>
			<MKBox pt={12} pb={2} px={2} textAlign="center" lineHeight={1}>
				<MKTypography variant="h3" color="white" gutterBottom>
					{title}
				</MKTypography>
				<MKTypography variant="body2" color="white" opacity={0.8}>
					{description}
				</MKTypography>
				{action && (
					<MKBox width="50%" mt={4} mb={2} mx="auto">
						{action.type === "external" ? (
							<MKButton
								component={MuiLink}
								href={action.route}
								target="_blank"
								rel="noreferrer"
								color="white"
								size="small"
								fullWidth
							>
								{action.label}
							</MKButton>
						) : (
							<MKButton
								component={Link}
								to={action.route}
								color="white"
								size="small"
								fullWidth
							>
								{action.label}
							</MKButton>
						)}
					</MKBox>
				)}
			</MKBox>
		</MKBox>
	);
}

// Setting default props for the RotatingCardBack
RotatingCardBack.defaultProps = {
	color: "info",
};

// Typechecking props for the RotatingCardBack
RotatingCardBack.propTypes = {
	color: PropTypes.oneOf([
		"primary",
		"secondary",
		"info",
		"success",
		"warning",
		"error",
		"dark",
		"light",
	]),
	image: PropTypes.string.isRequired,
	title: PropTypes.node.isRequired,
	description: PropTypes.node.isRequired,
	action: PropTypes.oneOfType([
		PropTypes.bool,
		PropTypes.shape({
			type: PropTypes.oneOf(["external", "internal"]).isRequired,
			route: PropTypes.string.isRequired,
			label: PropTypes.string.isRequired,
		}),
	]).isRequired,
};
