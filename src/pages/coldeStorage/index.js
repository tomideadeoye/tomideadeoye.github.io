/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React, { useMemo, useState } from "react";
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
import bgFront from "assets/images/rotating-card-bg-front.jpeg";
import bgBack from "assets/images/rotating-card-bg-back.jpeg";
import { Divider, Stack } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import SearchBar from "material-ui-search-bar";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import CancelIcon from "@mui/icons-material/Cancel";
import CancelScheduleSendIcon from "@mui/icons-material/CancelScheduleSend";
import AlarmIcon from "@mui/icons-material/Alarm";
import colors from "assets/theme/base/colors";
import Footer from "components/footer";
import ColdeStorageCard from "components/ColdeStorageCard";
import coldestorage from "colde-storage";

const useStyles = makeStyles((theme) => ({
	searchBar: {
		background: "white",
		boxShadow: "inset 0 0 10px lightgrey",
		width: "100%",
		padding: "0 1rem",
		fontSize: "0.7rem",
		height: "2.5rem",
		borderRadius: "2rem",
		"&:hover": {
			boxShadow: "2px 1px 9px -1px rgba(199,154,154,0.72)",
		},
		[theme.breakpoints.down("md")]: {
			width: "100%",
		},
	},
}));

function Home() {
	const classes = useStyles();

	const [eisenhowerMatrix, setEisenhowerMatrix] = React.useState({
		do: {
			name: ["important", "urgent"],
			action: "Do",
			icon: <DirectionsRunIcon />,
			items: [],
		},
		schedule: {
			name: ["important", "not urgent"],
			action: "Schedule",
			icon: <AlarmIcon />,
			items: [],
		},
		delegate: {
			name: ["not important", "urgent"],
			action: "Delegate",
			icon: <CancelScheduleSendIcon />,
			items: [],
		},
		eliminate: {
			name: ["not important", "not urgent"],
			action: "Eliminate",
			icon: <CancelIcon />,
			items: [],
		},
	});

	const [code, setCode] = useState(coldestorage.code);

	function detectUrgency() {
		const _eisenhowerMatrix = eisenhowerMatrix;
		personality.project_todos.forEach((item) => {
			item.todos.forEach((todo) => {
				if (todo.important && todo.urgent) {
					_eisenhowerMatrix.do.items.push(todo.name);
				}
				if (todo.important && !todo.urgent) {
					_eisenhowerMatrix.schedule.items.push(todo.name);
				}
				if (!todo.important && todo.urgent) {
					_eisenhowerMatrix.delegate.items.push(todo.name);
				}
				if (!todo.important && !todo.urgent) {
					_eisenhowerMatrix.eliminate.items.push(todo.name);
				}
			});
			setEisenhowerMatrix(_eisenhowerMatrix);
		});
	}
	useMemo(detectUrgency, [eisenhowerMatrix]);

	const requestSearch = (searchedVal) => {
		const newVal = searchedVal?.toLowerCase();
		const filteredCode = coldestorage.code?.filter(
			(item) =>
				item?.name?.toLowerCase().includes(newVal) ||
				item?.description?.toString().toLowerCase().includes(newVal) ||
				item?.code?.toString().toLowerCase().includes(newVal)
		);
		setCode(filteredCode);
	};

	const cancelSearch = () => setCode(coldestorage.code);

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
				{/* TITLE SECTION */}
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
							badgeContent="Code"
							container
							sx={{ mb: 2 }}
						/>
						<MKTypography variant="h3" fontWeight="bold">
							Colde Storage 🧑🏿‍💻
						</MKTypography>
					</Grid>
				</Container>

				<Container>
					<SearchBar
						placeholder="Search through the code of the world 👁 "
						className={classes.searchBar}
						onChange={(e) => requestSearch(e)}
						onCancelSearch={() => cancelSearch()}
					/>
					<Box sx={{ margin: "4rem 0rem" }}>
						<Grid
							container
							rowSpacing={1}
							columnSpacing={{ xs: 1, sm: 2, md: 2 }}
							sx={{
								bgcolor: colors.gradients.info.main,
								borderRadius: "1rem",
								boxShadow: "xxl",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								padding: "0.5rem",
							}}
						>
							{code.map((item) => (
								<Grid item xs={12} sm={6} md={3} key={item.name}>
									<ColdeStorageCard data={item} />
								</Grid>
							))}
						</Grid>
					</Box>

					{coldestorage.resources.map((item) => (
						<BaseLayout key={item.description}>
							<View>
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
											<RotatingCardFront
												image={bgFront}
												title={item.description}
											/>
											<RotatingCardBack
												image={bgBack}
												action={{
													type: "external",
													route: item.link[0],
													label: "Link",
												}}
											/>
										</RotatingCard>
									</Box>
									<Box
										sx={{
											display: "flex",
											flexDirection: "column",
											alignItems: "flex-start",
											justifyContent: "center",
											padding: "1rem",
											fontSize: "1rem",
											width: "60%",
										}}
									>
										{item.link.map((_link) => (
											<a href={_link} target="_blank" rel="noreferrer">
												<li>{_link}</li>
											</a>
										))}
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
