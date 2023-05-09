/* eslint-disable no-param-reassign */
/**
=========================================================
* Otis Kit PRO - v2.0.1
=========================================================

* Product Page: https://material-ui.com/store/items/otis-kit-pro-material-kit-react/
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Otis Kit PRO components
import MKBox from "components/MKBox";

// Otis Kit PRO examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";

// Routes
import routes from "routes";

function NavbarLight() {
  return (
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
        center
      />
    </MKBox>
  );
}

export default NavbarLight;
