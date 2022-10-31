import Container from "@mui/material/Container";
import MKBox from "components/MKBox";
import bgImage from "assets/images/value.jpg";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
	container: {
		padding: "3rem 3rem",
	},

	proposition: {
		paddingBottom: "2rem",
		color: "white",

		"& h1": {
			fontSize: "3.5vw",
			[theme.breakpoints.down("sm")]: {
				fontSize: "5vw",
			},
		},

		"& p": {
			color: "white",
			[theme.breakpoints.down("sm")]: {
				fontSize: "0.7rem",
			},
		},
	},
}));

function BuiltByDevelopers() {
	const classes = useStyles();
	return (
		<MKBox
			className={classes.container}
			display="flex"
			alignItems="center"
			borderRadius="xl"
			my={2}
			py={6}
			sx={{
				backgroundImage: ({
					functions: { linearGradient, rgba },
					palette: { gradients },
				}) =>
					`${linearGradient(
						rgba(gradients.dark.main, 0.8),
						rgba(gradients.dark.state, 0.9)
					)}, url(${bgImage})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
		>
			<Container>
				<Box className={classes.proposition}>
					<Box component="h1" variant="h1" color="white" mb={2}>
						Value Proposition
					</Box>
					<Box
						component="p"
						variant="body1"
						opacity={1}
						mb={2}
						textAlign="justify"
					>
						One of the tasking responsibilities of businesses in this digital
						age is transcending the noise and communicating their brand essence
						in a way that captures consumer attention and converts those
						attention into desirable actions for the business.
						<br />
						<br />A recent study by Microsoft Corp reveals that the average
						attention span of a human is about 8 seconds and several brands are
						already competing for this time. What makes you stand out each time
						is a compelling brand message that prospects can identify with, a
						huge part of why storytelling matters. <br />
						<br />
						There is no stronger connection between humans than storytelling.
						People want to interact with brands that see them, understand their
						needs and reflect their values – No better way to compel action and
						drive behavior than infusing storytelling into your digital
						marketing campaigns.
					</Box>
					{/* <MKTypography
            component="a"
            href="https://rhodetails.com/"
            target="_blank"
            rel="noreferrer"
            variant="body2"
            color="white"
            fontWeight="regular"
            sx={{
              display: "flex",
              alignItems: "center",

              "& .material-icons-round": {
                fontSize: "1.125rem",
                transform: `translateX(3px)`,
                transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
              },

              "&:hover .material-icons-round, &:focus .material-icons-round": {
                transform: `translateX(6px)`,
              },
            }}
          >
            Read more <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
          </MKTypography> */}
				</Box>
				{/* </Grid> */}
			</Container>
		</MKBox>
	);
}

export default BuiltByDevelopers;
