/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function View({
	tit2,
	tit1,
	mapDetails,
	children,
	code,
	title,
	height,
	...rest
}) {
	const [activeTab, setActiveTab] = useState(0);
	const [success, setSuccess] = useState(false);

	const handleTabType = (event, newValue) => setActiveTab(newValue);

	useEffect(() => {
		setTimeout(() => setSuccess(false), 3000);
	}, [success]);

	return (
		<MKBox
			width="100%"
			position="relative"
			borderRadius="xl"
			shadow="lg"
			mb={4}
			sx={{ overflow: "hidden" }}
			{...rest}
		>
			<MKBox
				px={3}
				sx={{
					borderBottom: ({ borders: { borderWidth, borderColor } }) =>
						`${borderWidth[1]} solid ${borderColor}`,
				}}
			>
				<Grid container spacing={2} justifyContent="space-between" py={1}>
					<Grid item xs={12} lg={3}>
						<MKTypography variant="body1" fontWeight="bold" pt={0.5}>
							{title}
						</MKTypography>
					</Grid>
					<Grid item xs={12} lg={3}>
						<AppBar position="static">
							<Tabs value={activeTab} onChange={handleTabType}>
								<Tab
									icon={
										<MKBox
											component="i"
											color="dark"
											mr={1.25}
											sx={{ fontSize: ({ typography: { size } }) => size.sm }}
											className="fas fa-align-left"
										/>
									}
									label={!tit1 ? "Overview" : tit1}
								/>
								<Tab
									icon={
										<MKBox
											component="i"
											color="dark"
											mr={1.25}
											sx={{ fontSize: ({ typography: { size } }) => size.sm }}
											className="fas fa-database"
										/>
									}
									label={!tit2 ? "Raw Data" : tit2}
								/>
							</Tabs>
						</AppBar>
					</Grid>
				</Grid>
			</MKBox>
			<MKBox display={activeTab === 0 ? "block" : "none"}>
				<MKBox width="100%" p={3}>
					<MKBox
						bgColor="grey-100"
						width="100%"
						height={height}
						maxHeight="40rem"
						borderRadius="xl"
						sx={{ overflowX: "hidden", overflowY: "scroll" }}
					>
						{children}
					</MKBox>
				</MKBox>
			</MKBox>
			<MKBox display={activeTab === 1 ? "block" : "none"} p={3}>
				<MKBox
					bgColor="grey-100"
					position="relative"
					width="100%"
					borderRadius="xl"
					sx={{ overflow: "hidden" }}
				>
					{mapDetails}
				</MKBox>
			</MKBox>
		</MKBox>
	);
}

// Setting default props for the View
View.defaultProps = {
	height: "auto",
};

// Typechecking props for the View
View.propTypes = {
	children: PropTypes.node.isRequired,
	title: PropTypes.string.isRequired,
	height: PropTypes.string,
};

export default View;
