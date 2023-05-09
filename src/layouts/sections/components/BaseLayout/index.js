/*
=========================================================
* Otis Kit PRO - v2.0.1
=========================================================

* Product Page: https://material-ui.com/store/items/otis-kit-pro-material-kit-react/
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Otis Kit PRO components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Otis Kit PRO examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import CenteredFooter from "examples/Footers/CenteredFooter";
import Breadcrumbs from "examples/Breadcrumbs";

// Routes
import routes from "routes";

function BaseLayout({ breadcrumb, title, children }) {
  return (
    <MKBox display="flex" flexDirection="column" bgColor="white" minHeight="100vh">
      <MKBox bgColor="white" shadow="sm" py={0.25}>
        <DefaultNavbar
          routes={routes}
          action={{
            type: "external",
            route: "https://material-ui.com/store/items/otis-kit-pro-material-kit-react/",
            label: "buy now",
            color: "info",
          }}
          transparent
          relative
        />
      </MKBox>
      <Container sx={{ mt: 6 }}>
        <Grid container item xs={12} flexDirection="column" justifyContent="center" mx="auto">
          <MKBox width={{ xs: "100%", md: "50%", lg: "25%" }} mb={3}>
            <Breadcrumbs routes={breadcrumb} />
          </MKBox>
          <MKTypography variant="h3" mb={1}>
            {title}
          </MKTypography>
          {children}
        </Grid>
      </Container>
      <MKBox mt="auto">
        <CenteredFooter />
      </MKBox>
    </MKBox>
  );
}

// Typechecking props for the BaseLayout
BaseLayout.propTypes = {
  breadcrumb: PropTypes.instanceOf(Array).isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default BaseLayout;
