/* eslint-disable react/prop-types */
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
// import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import Breadcrumbs from "examples/Breadcrumbs";
// import routes from "routes";

function BaseLayout({ breadcrumb, title, children }) {
	return (
		<MKBox
			display="flex"
			flexDirection="column"
			bgColor="white"
			// minHeight="100vh"
		>
			<Container>
				<Grid
					container
					item
					xs={12}
					flexDirection="column"
					justifyContent="center"
					mx="auto"
				>
					{breadcrumb && (
						<MKBox width={{ xs: "100%", md: "50%", lg: "25%" }} mb={3}>
							<Breadcrumbs routes={breadcrumb} />
						</MKBox>
					)}
					<MKTypography variant="h3" mb={1}>
						{title}
					</MKTypography>
					{children}
				</Grid>
			</Container>
		</MKBox>
	);
}
export default BaseLayout;
