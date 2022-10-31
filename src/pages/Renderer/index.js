/* eslint-disable react/prop-types */
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import MKButton from "components/MKButton";
import MKBox from "components/MKBox";
import MKBadge from "components/MKBadge";
import MKTypography from "components/MKTypography";
import BaseLayout from "layouts/sections/components/BaseLayout";
import View from "layouts/sections/components/View";
import Footer from "pages/Presentation/Footer";
import MaterialTab from "./sections/material-tab";

function Home({ type, title, data, excelLink }) {
	const excelDetails = () => (
		<>
			{/* EXCEL TITLE */}
			<Container>
				<Grid
					container
					item
					xs={12}
					lg={6}
					flexDirection="column"
					alignItems="center"
					sx={{ textAlign: "center", my: 6, mx: "auto", px: 0.75 }}
				>
					<MKBadge
						variant="contained"
						color="info"
						badgeContent="Excel Files"
						container
						sx={{ mb: 2 }}
					/>
					<MKTypography variant="h2" fontWeight="bold">
						Access Raw Files Below
					</MKTypography>
				</Grid>
			</Container>
			<Container sx={{ m: 1 }}>
				<Container
					sx={{
						mt: 6,
						bgcolor: "background.paper",
						boxShadow: 0.3,
						borderRadius: 2,
					}}
				>
					<iframe title="Raw Files" width="100%" height="700" src={excelLink} />
				</Container>
			</Container>
			{/* DOWNLAOD BUTTON */}
			<Grid container item justifyContent="center" xs={12} mt={5} mb={2}>
				<MKButton
					href={excelLink}
					variant="gradient"
					color="info"
					target="_blank"
				>
					View
				</MKButton>
			</Grid>
		</>
	);

	return (
		<>
			<Card
				sx={{
					p: 2,
					mx: { xs: 2, lg: 3 },
					mt: 3,
					mb: 4,
					backgroundColor: ({ palette: { white }, functions: { rgba } }) =>
						rgba(white.main, 0.8),
					backdropFilter: "saturate(200%) blur(30px)",
					boxShadow: ({ boxShadows: { xxl } }) => xxl,
				}}
			>
				<BaseLayout
					breadcrumb={[{ label: "Home", route: "/" }, { label: type }]}
				>
					<View title={title} mapDetails={excelDetails()}>
						<MaterialTab data={data} title={title} type={type} />
					</View>
				</BaseLayout>
			</Card>

			<MKBox pt={6} px={1} mt={6}>
				<Footer />
			</MKBox>
		</>
	);
}

export default Home;
