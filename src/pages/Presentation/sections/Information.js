import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
	serviceList: {
		[theme.breakpoints.down("lg")]: {
			width: "100%",
			margin: "1rem",
			padding: "1rem",
			// fontSize: "2.3vw",
		},
	},
}));

const services = [
	{
		name: "Data Visualisation",
		tasks: ["Seaborn", "Pygal", "D3", "PowerPoint", "PowerBI"],
	},
	{
		name: "Mobile/Web Engineering",
		tasks: ["React", "Flutter", "JavaScript", "Python"],
	},
	{ name: "Blockchain Research", tasks: ["Blockchain", "DeFi", "MEV"] },
];

function Information() {
	const classes = useStyles();
	return (
		<MKBox
			component="section"
			py={1}
			my={1}
			sx={{
				display: "flex",
				justifyContent: "center",
				alignItems: "flex-start",
			}}
			className={classes.serviceList}
		>
			<Grid
				container
				spacing={2}
				sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "flex-start",
				}}
			>
				{services.map((item) => (
					<Grid xs={12} md={12} lg={3}>
						<DefaultInfoCard
							title={item.name}
							description={item.tasks}
							direction="center"
						/>
					</Grid>
				))}{" "}
			</Grid>
		</MKBox>
	);
}

export default Information;
