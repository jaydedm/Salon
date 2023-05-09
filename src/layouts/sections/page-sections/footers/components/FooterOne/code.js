const footerOneCode = `// Otis Kit PRO components
import MKTypography from "components/MKTypography";

// Otis Kit PRO examples
import DetailedFooter from "examples/Footers/DetailedFooter";

function FooterOne() {
  const date = new Date().getFullYear();

  const footerContent = {
    brand: {
      name: "OTIS KIT PRO",
      description: "The next generation of design systems.",
    },
    socials: [
      {
        icon: <i className="fab fa-facebook" />,
        link: "https://material-ui.com/store/items/otis-kit-pro-material-kit-react/",
      },
      {
        icon: <i className="fab fa-twitter" />,
        link: "https://material-ui.com/store/items/otis-kit-pro-material-kit-react/",
      },
      {
        icon: <i className="fab fa-instagram" />,
        link: "https://material-ui.com/store/items/otis-kit-pro-material-kit-react/",
      },
      {
        icon: <i className="fab fa-pinterest" />,
        link: "https://material-ui.com/store/items/otis-kit-pro-material-kit-react/",
      },
      {
        icon: <i className="fab fa-github" />,
        link: "https://material-ui.com/store/items/otis-kit-pro-material-kit-react/",
      },
    ],
    menus: [
      {
        name: "company",
        items: [
          { name: "about us", href: "https://material-ui.com/store/items/otis-kit-pro-material-kit-react/" },
          { name: "career", href: "https://material-ui.com/store/items/otis-kit-pro-material-kit-react/" },
          { name: "press", href: "https://material-ui.com/store/items/otis-kit-pro-material-kit-react/" },
          { name: "blog", href: "https://material-ui.com/store/items/otis-kit-pro-material-kit-react/" },
        ],
      },
      {
        name: "Pages",
        items: [
          { name: "login", href: "https://material-ui.com/store/items/otis-kit-pro-material-kit-react/" },
          { name: "register", href: "https://material-ui.com/store/items/otis-kit-pro-material-kit-react/" },
          { name: "add list", href: "https://material-ui.com/store/items/otis-kit-pro-material-kit-react/" },
          { name: "contact", href: "https://material-ui.com/store/items/otis-kit-pro-material-kit-react/" },
        ],
      },
      {
        name: "legal",
        items: [
          { name: "terms", href: "https://material-ui.com/store/items/otis-kit-pro-material-kit-react/" },
          { name: "about us", href: "https://material-ui.com/store/items/otis-kit-pro-material-kit-react/" },
          { name: "team", href: "https://material-ui.com/store/items/otis-kit-pro-material-kit-react/" },
          { name: "privacy", href: "https://material-ui.com/store/items/otis-kit-pro-material-kit-react/" },
        ],
      },
      {
        name: "resources",
        items: [
          { name: "blog", href: "https://material-ui.com/store/items/otis-kit-pro-material-kit-react/" },
          { name: "services", href: "https://material-ui.com/store/items/otis-kit-pro-material-kit-react/" },
          { name: "product", href: "https://material-ui.com/store/items/otis-kit-pro-material-kit-react/" },
          { name: "pricing", href: "https://material-ui.com/store/items/otis-kit-pro-material-kit-react/" },
        ],
      },
    ],
    copyright: (
      <MKTypography variant="button" color="secondary">
        Copyright &copy; {date} Material Design by{" "}
        <MKTypography
          component="a"
          href="https://material-ui.com/store/items/otis-kit-pro-material-kit-react/"
          target="_blank"
          rel="noreferrer"
          variant="button"
          color="secondary"
        >
          Creative Tim
        </MKTypography>
        .
      </MKTypography>
    ),
  };

  return <DetailedFooter content={footerContent} />;
}

export default FooterOne;`;

export default footerOneCode;
