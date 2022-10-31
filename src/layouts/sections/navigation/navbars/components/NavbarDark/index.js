/* eslint-disable no-param-reassign */
import MKBox from "components/MKBox";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import personality from "personality-config";
import routes from "routes";

function NavbarDark() {
	return (
		<MKBox variant="gradient" bgColor="dark" shadow="sm" py={0.25}>
			<DefaultNavbar
				routes={routes}
				action={{
					type: "external",
					route: personality.cta.link,
					label: personality.cta.name,
					color: "info",
				}}
				transparent
				relative
				light
				center
			/>
		</MKBox>
	);
}

export default NavbarDark;
