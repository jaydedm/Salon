/**
=========================================================
* Otis Kit PRO - v2.0.1
=========================================================

* Product Page: https://material-ui.com/store/items/otis-kit-pro-material-kit-react/
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/**
  All of the routes for the Otis Kit PRO React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Navbar.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `name` key is used for the name of the route on the Navbar.
  2. The `icon` key is used for the icon of the route on the Navbar.
  3. The `collapse` key is used for making a collapsible item on the Navbar that contains other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  4. The `route` key is used to store the route location which is used for the react router.
  5. The `href` key is used to store the external links location.
  6. The `component` key is used to store the component of its route.
  7. The `dropdown` key is used to define that the item should open a dropdown for its collapse items .
  8. The `description` key is used to define the description of
          a route under its name.
  9. The `columns` key is used to define that how the content should look inside the dropdown menu as columns,
          you can set the columns amount based on this key.
  10. The `rowsPerColumn` key is used to define that how many rows should be in a column.
*/

// @mui material components
import Icon from '@mui/material/Icon'

// Pages
import CoworkingPage from 'layouts/pages/landing-pages/coworking'
import Rental from 'layouts/pages/landing-pages/rental'
import HelpCenter from 'layouts/pages/support/help-center'

const routes = [
  {
    name: 'pages',
    icon: <Icon>dashboard</Icon>,
    columns: 3,
    rowsPerColumn: 2,
    collapse: [
      {
        name: 'P&W',
        collapse: [
          {
            name: 'About Us',
            route: '/aboutus',
            component: <CoworkingPage />
          },
          {
            name: 'Services',
            route: '/pages/landing-pages/rental',
            component: <Rental />
          }
        ]
      },
      {
        name: 'support',
        collapse: [
          {
            name: 'FAQ',
            route: '/pages/support/help-center',
            component: <HelpCenter />
          }
        ]
      }
    ]
  }
]

export default routes
