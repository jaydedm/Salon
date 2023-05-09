const footerThreeCode = `// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import GitHubIcon from "@mui/icons-material/GitHub";

// Otis Kit PRO examples
import CenteredFooter from "examples/Footers/CenteredFooter";

function FooterThress() {
  const company = {
    href: "https://material-ui.com/store/items/otis-kit-pro-material-kit-react/",
    name: "Creative Tim",
  };
  const links = [
    { href: "https://material-ui.com/store/items/otis-kit-pro-material-kit-react/", name: "Company" },
    { href: "https://material-ui.com/store/items/otis-kit-pro-material-kit-react/", name: "About Us" },
    { href: "https://material-ui.com/store/items/otis-kit-pro-material-kit-react/", name: "Team" },
    { href: "https://material-ui.com/store/items/otis-kit-pro-material-kit-react/", name: "Products" },
    { href: "https://material-ui.com/store/items/otis-kit-pro-material-kit-react/", name: "Blog" },
    { href: "https://material-ui.com/store/items/otis-kit-pro-material-kit-react/", name: "License" },
  ];
  const socials = [
    {
      icon: <FacebookIcon fontSize="small" />,
      link: "https://material-ui.com/store/items/otis-kit-pro-material-kit-react/",
    },
    {
      icon: <TwitterIcon fontSize="small" />,
      link: "https://material-ui.com/store/items/otis-kit-pro-material-kit-react/",
    },
    {
      icon: <InstagramIcon fontSize="small" />,
      link: "https://material-ui.com/store/items/otis-kit-pro-material-kit-react/",
    },
    {
      icon: <PinterestIcon fontSize="small" />,
      link: "https://material-ui.com/store/items/otis-kit-pro-material-kit-react/",
    },
    {
      icon: <GitHubIcon fontSize="small" />,
      link: "https://material-ui.com/store/items/otis-kit-pro-material-kit-react/",
    },
  ];

  return <CenteredFooter company={company} links={links} socials={socials} />;
}

export default FooterThress;`;

export default footerThreeCode;
