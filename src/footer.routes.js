import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import GitHubIcon from '@mui/icons-material/GitHub'
import YouTubeIcon from '@mui/icons-material/YouTube'

import MKTypography from 'components/MKTypography'

// Images
import logoCT from 'assets/images/logo-ct-dark.png'

const date = new Date().getFullYear()

function getOS () {
  const uA = navigator.userAgent || navigator.vendor || window.opera
  if ((/iPad|iPhone|iPod/.test(uA) && !window.MSStream) || (uA.includes('Mac') && 'ontouchend' in document)) return 'iOS'

  let i; const os = ['Windows', 'Android', 'Unix', 'Mac', 'Linux', 'BlackBerry']
  for (i = 0; i < os.length; i++) if (new RegExp(os[i], 'i').test(uA)) return os[i]
}

function mapsSelector () {
  const os = getOS()
  if (os === 'iOS') {
    return 'https://maps.apple.com/?address=3832%20E%20Main%20St,%20Farmington,%20NM%2087402,%20United%20States&auid=14434958474571863594&ll=36.754303,-108.158349&lsp=9902&q=Curl%20Up%20and%20Dye&t=m'
  } else {
    return 'https://maps.app.goo.gl/EYQtPhvjuGU6fjnr7'
  }
}

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
          name: `3832 East Main Street, \n
          Suite B \n Farmington NM 87402`,
          href: mapsSelector()
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
