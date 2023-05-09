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

// @mui material components
// import Container from "@mui/material/Container";
// import Grid from "@mui/material/Grid";
// import Card from "@mui/material/Card";

// Otis Kit PRO components
import MKBox from "components/MKBox";
// import MKTypography from "components/MKTypography";

// Otis Kit PRO examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// DesktopApp page sections
import Banner from "pages/Apps/DesktopApp/sections/Banner";
import Information from "pages/Apps/DesktopApp/sections/Information";
import Features from "pages/Apps/DesktopApp/sections/Features";
import Testimonials from "pages/Apps/DesktopApp/sections/Testimonials";
import Pricing from "pages/Apps/DesktopApp/sections/Pricing";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

function DesktopApp() {
  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "https://material-ui.com/store/items/otis-kit-pro-material-kit-react/",
          label: "buy now",
          color: "warning",
        }}
        transparent
        light
      />
      <MKBox bgColor="white">
        <MKBox
          minHeight="50vh"
          width="100%"
          sx={{
            backgroundImage: ({ functions: { linearGradient }, palette: { gradients } }) =>
              linearGradient(gradients.dark.main, gradients.dark.state),
          }}
        />
        <Banner />
        <Information />
        <Features />
        <Testimonials />
        <Pricing />
        <MKBox pt={6} px={1} mt={6}>
          <DefaultFooter content={footerRoutes} />
        </MKBox>
      </MKBox>
    </>
  );
}

export default DesktopApp;
