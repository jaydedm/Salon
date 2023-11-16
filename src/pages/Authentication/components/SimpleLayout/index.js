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

// prop-types is a library for typechecking of props
import PropTypes from 'prop-types'

// @mui material components
import Grid from '@mui/material/Grid'

// Otis Kit PRO components
import MKBox from 'components/MKBox'
// import MKTypography from "components/MKTypography";

// Otis Kit PRO example components
import DefaultNavbar from 'examples/Navbars/DefaultNavbar'
import CenteredFooter from 'examples/Footers/CenteredFooter'

// Otis Kit PRO page layout routes
import routes from 'routes'

function SimpleLayout ({ children }) {
  return (
    <MKBox height="100vh" display="flex" flexDirection="column" justifyContent="space-between">
      <DefaultNavbar
        routes={routes}
        action={{
          type: 'external',
          route: 'https://material-ui.com/store/items/otis-kit-pro-material-kit-react/',
          label: 'buy now',
          color: 'info'
        }}
        transparent
      />
      <MKBox width="calc(100% - 2rem)" px={1} mx="auto">
        <Grid container spacing={1} justifyContent="center">
          <Grid item xs={11} sm={9} md={5} lg={4} xl={3}>
            {children}
          </Grid>
        </Grid>
        <CenteredFooter />
      </MKBox>
    </MKBox>
  )
}

// Typechecking props for the SimpleLayout
SimpleLayout.propTypes = {
  children: PropTypes.node.isRequired
}

export default SimpleLayout
