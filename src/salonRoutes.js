import Icon from '@mui/material/Icon'

const routes = [
  {
    name: 'pages',
    icon: <Icon>dashboard</Icon>,
    columns: 2,
    rowsPerColumn: 1,
    collapse: [
      {
        name: 'Penelope & Watson',
        collapse: [
          {
            name: 'Home',
            route: '/'
          },
          {
            name: 'About Us',
            route: '/aboutus'
          },
          {
            name: 'Services',
            route: '/services'
          }
        ]
      },
      {
        name: 'P&W Esthetics',
        collapse: [
          {
            name: 'About Us',
            route: '/estaboutus'
          },
        ]
      }
    ]
  }
]

export default routes
