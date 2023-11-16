const navbarLightCode = `// Otis Kit PRO components
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

export default NavbarLight;`

export default navbarLightCode
