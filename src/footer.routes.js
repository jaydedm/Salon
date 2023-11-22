// @mui icons
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import GitHubIcon from '@mui/icons-material/GitHub'
import YouTubeIcon from '@mui/icons-material/YouTube'

// Otis Kit PRO components
import MKTypography from 'components/MKTypography'

// Images
import logoCT from 'assets/images/logo-ct-dark.png'

const date = new Date().getFullYear()

export default {
  brand: {
    name: 'Musea',
    image: logoCT,
    route: '/'
  },
  socials: [
    {
      icon: <FacebookIcon />,
      link: 'https://material-ui.com/store/items/otis-kit-pro-material-kit-react/'
    },
    {
      icon: <TwitterIcon />,
      link: 'https://material-ui.com/store/items/otis-kit-pro-material-kit-react/'
    },
    {
      icon: <GitHubIcon />,
      link: 'https://material-ui.com/store/items/otis-kit-pro-material-kit-react/'
    },
    {
      icon: <YouTubeIcon />,
      link: 'https://material-ui.com/store/items/otis-kit-pro-material-kit-react/'
    }
  ],
  menus: [
    {
      name: 'company',
      items: [
        {
          name: 'about us',
          href: '/aboutus'
        },
        {
          name: 'Services',
          href: '/services'
        }
      ]
    },
    {
      name: 'Address',
      items: [
        {
          name: `832 East Main Street, \n
          Suite B \n Farmington NM 87402`,
          href: 'https://material-ui.com/store/items/otis-kit-pro-material-kit-react/'
        },
        {
          name: 'privacy policy',
          href: 'https://material-ui.com/store/items/otis-kit-pro-material-kit-react/'
        },
        {
          name: 'licenses (EULA)',
          href: 'https://material-ui.com/store/items/otis-kit-pro-material-kit-react/'
        }
      ]
    }
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date} by{' '}
      <MKTypography
        component="a"
        href="https://material-ui.com/store/items/otis-kit-pro-material-kit-react/"
        target="_blank"
        rel="noreferrer"
        variant="button"
        fontWeight="regular"
      >
        Jayde
      </MKTypography>
      .
    </MKTypography>
  )
}
