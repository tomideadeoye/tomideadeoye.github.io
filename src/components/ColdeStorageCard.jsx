/* eslint-disable react/prop-types */
import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
// import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
// import { Box } from "@mui/material";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { makeStyles } from "@mui/styles";

const ExpandMore = styled((props) => {
	const { expand, ...other } = props;
	return <IconButton {...other} />;
})(({ theme, expand }) => ({
	transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
	marginLeft: "auto",
	transition: theme.transitions.create("transform", {
		duration: theme.transitions.duration.shortest,
	}),
}));

const useStyles = makeStyles(() => ({
	syntaxHighlight: {
		fontSize: "0.5rem",
	},
}));

export default function ColdeStorageCard({ data }) {
	const { name, code, description, image } = data;
	const [expanded, setExpanded] = React.useState(false);
	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardHeader
				// avatar={
				// 	<Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
				// 		R
				// 	</Avatar>
				// }
				textAlign="center"
				action={
					<IconButton aria-label="settings">
						<MoreVertIcon />
					</IconButton>
				}
				title={name}
			/>
			{image && (
				<CardMedia
					component="img"
					height="194"
					image="/static/images/cards/paella.jpg"
					alt="Paella dish"
				/>
			)}

			<CardContent>
				<Typography variant="body2" color="text.secondary">
					{description}
				</Typography>
			</CardContent>
			<CardActions disableSpacing>
				{/* <IconButton aria-label="add to favorites">
					<FavoriteIcon />
				</IconButton>
				<IconButton aria-label="share">
					<ShareIcon />
				</IconButton> */}
				<ExpandMore
					expand={expanded}
					onClick={handleExpandClick}
					aria-expanded={expanded}
					aria-label="show more"
				>
					<ExpandMoreIcon />
				</ExpandMore>
			</CardActions>
			<Collapse in={expanded} timeout="auto" unmountOnExit>
				<RenderedCode code={code} />
			</Collapse>
		</Card>
	);
}

const RenderedCode = ({ code }) => {
	const classes = useStyles();

	return (
		<CardContent>
			{Array.isArray(code) &&
				code?.map((_code) => (
					<SyntaxHighlighter
						wrapLongLines
						showLineNumbers
						wrapLines
						style={docco}
						className={classes.syntaxHighlight}
					>
						{_code}
					</SyntaxHighlighter>
				))}
			{!Array.isArray(code) && (
				<SyntaxHighlighter style={docco} className={classes.syntaxHighlight}>
					{code}
				</SyntaxHighlighter>
			)}
		</CardContent>
	);
};
