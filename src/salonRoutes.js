import Icon from '@mui/material/Icon'

const routes = [
  {
    name: 'pages',
    icon: <Icon>dashboard</Icon>,
    columns: 3,
    rowsPerColumn: 2,
    collapse: [
      {
        name: 'P&W Salon | Barber',
        collapse: [
          {
            name: 'Home',
            route: '/'
          },
          {
            name: 'About Us',
            route: '/aboutus'
          }
        ]
      },
      {
        name: 'P&W Esthetics',
        collapse: [
          {
            name: 'About Us',
            route: '/aboutus'
          },
          {
            name: 'Services',
            route: '/services'
          }
        ]
      }
    ]
  }
]

export default routes
