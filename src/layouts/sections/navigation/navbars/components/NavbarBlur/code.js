const navbarBlurCode = `// Otis Kit PRO examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";

// Routes
import routes from "routes";

function NavbarBlur() {
  return (
    <DefaultNavbar
      routes={routes}
      action={{
        type: "external",
        route: "https://material-ui.com/store/items/otis-kit-pro-material-kit-react/",
        label: "buy now",
        color: "info",
      }}
      relative
      center
    />
  );
}

export default NavbarBlur;`

export default navbarBlurCode
