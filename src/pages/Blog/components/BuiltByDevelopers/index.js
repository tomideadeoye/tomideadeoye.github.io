// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function BuiltByDevelopers() {
  const bgImage =
    "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/desktop.jpg";

  return (
    <MKBox
      display="flex"
      alignItems="center"
      borderRadius="xl"
      my={2}
      py={6}
      sx={{
        backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
          `${linearGradient(
            rgba(gradients.dark.main, 0.8),
            rgba(gradients.dark.state, 0.8)
          )}, url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container>
        <Grid container item xs={12} lg={6} sx={{ ml: { xs: 0, lg: 6 } }}>
          {/* <MKTypography variant="h4" color="white" fontWeight="bold">
            Built by developers
          </MKTypography> */}
          <MKTypography variant="h3" color="white" mb={1}>
            PROJECT SCOPE
          </MKTypography>
          <MKTypography variant="body1" color="white" opacity={0.8} mb={2}>
            <ul>
              <li>
                review and analysis of identified laws towards determining legal obligations placed
                on Unilever therein.
              </li>
              <li>
                Critical review and analysis of identified laws towards determining legal
                obligations placed on Unilever therein.
              </li>
              <li>
                Highlight the regularity and deadlines for the performance of identified legal
                obligations flowing from the laws.
              </li>
              <li>
                Identify the penalties for non-compliance with obligations imposed by the laws{" "}
              </li>
              <li>
                Highlight any significant judicial pronouncements relating to the identified legal
                obligations
              </li>
            </ul>
          </MKTypography>
          <MKTypography
            component="a"
            href="/"
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
            Go to project brief <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
          </MKTypography>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default BuiltByDevelopers;
