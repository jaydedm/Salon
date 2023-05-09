// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

// Otis Kit PRO components
import MKTypography from "components/MKTypography";

// Images
import logoCT from "assets/images/logo-ct-dark.png";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "Otis Kit PRO",
    image: logoCT,
    route: "/",
  },
  socials: [
    {
      icon: <FacebookIcon />,
      link: "https://material-ui.com/store/items/otis-kit-pro-material-kit-react/",
    },
    {
      icon: <TwitterIcon />,
      link: "https://material-ui.com/store/items/otis-kit-pro-material-kit-react/",
    },
    {
      icon: <GitHubIcon />,
      link: "https://material-ui.com/store/items/otis-kit-pro-material-kit-react/",
    },
    {
      icon: <YouTubeIcon />,
      link: "https://material-ui.com/store/items/otis-kit-pro-material-kit-react/",
    },
  ],
  menus: [
    {
      name: "company",
      items: [
        {
          name: "about us",
          href: "https://material-ui.com/store/items/otis-kit-pro-material-kit-react/",
        },
        {
          name: "freebies",
          href: "https://material-ui.com/store/items/otis-kit-pro-material-kit-react/",
        },
        {
          name: "premium tools",
          href: "https://material-ui.com/store/items/otis-kit-pro-material-kit-react/",
        },
        {
          name: "blog",
          href: "https://material-ui.com/store/items/otis-kit-pro-material-kit-react/",
        },
      ],
    },
    {
      name: "resources",
      items: [
        {
          name: "illustrations",
          href: "https://material-ui.com/store/items/otis-kit-pro-material-kit-react/",
        },
        {
          name: "bits & snippets",
          href: "https://material-ui.com/store/items/otis-kit-pro-material-kit-react/",
        },
        {
          name: "affiliate program",
          href: "https://material-ui.com/store/items/otis-kit-pro-material-kit-react/",
        },
      ],
    },
    {
      name: "help & support",
      items: [
        {
          name: "contact us",
          href: "https://material-ui.com/store/items/otis-kit-pro-material-kit-react/",
        },
        {
          name: "knowledge center",
          href: "https://material-ui.com/store/items/otis-kit-pro-material-kit-react/",
        },
        { name: "custom development", href: "https://services.creative-tim.com/" },
        {
          name: "sponsorships",
          href: "https://material-ui.com/store/items/otis-kit-pro-material-kit-react/",
        },
      ],
    },
    {
      name: "legal",
      items: [
        {
          name: "terms & conditions",
          href: "https://material-ui.com/store/items/otis-kit-pro-material-kit-react/",
        },
        {
          name: "privacy policy",
          href: "https://material-ui.com/store/items/otis-kit-pro-material-kit-react/",
        },
        {
          name: "licenses (EULA)",
          href: "https://material-ui.com/store/items/otis-kit-pro-material-kit-react/",
        },
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date} Otis Kit by{" "}
      <MKTypography
        component="a"
        href="https://material-ui.com/store/items/otis-kit-pro-material-kit-react/"
        target="_blank"
        rel="noreferrer"
        variant="button"
        fontWeight="regular"
      >
        Creative Tim
      </MKTypography>
      .
    </MKTypography>
  ),
};
