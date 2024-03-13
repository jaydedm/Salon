import FacebookIcon from '@mui/icons-material/Facebook'

import MKTypography from 'components/MKTypography'

// Images
import logoCT from 'assets/images/pnwfavicon.png'
import { mapsSelector } from 'utils'

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
      link: 'https://www.facebook.com/penelopeandwatson'
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
