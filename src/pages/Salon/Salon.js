/*
=========================================================
* Otis Kit PRO - v2.0.1
=========================================================

* Product Page: https://material-ui.com/store/items/otis-kit-pro-material-kit-react/
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// rellax
// import Rellax from 'rellax'

// typed-js
// import * as Typed from 'typed.js'

// @mui material components
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'

// Otis Kit PRO components
import MKBox from 'components/MKBox'
import MKTypography from 'components/MKTypography'
// import MKButton from 'components/MKButton'

// Otis Kit PRO examples
import DefaultNavbar from 'examples/Navbars/DefaultNavbar'
import DefaultFooter from 'examples/Footers/DefaultFooter'

// About Us page sections
import Information from 'pages/Company/AboutUs/sections/Information'
import Team from 'pages/Company/AboutUs/sections/Team'
import Featuring from 'pages/Company/AboutUs/sections/Featuring'
import Newsletter from 'pages/Company/AboutUs/sections/Newsletter'

// Routes
import routes from 'routes'
import footerRoutes from 'footer.routes'

import pnwLogo from 'assets/images/p&wlogo-tight.png'

function Salon () {
  return (
    <>
      <DefaultNavbar
        sx={{ background: 'purple' }}
        routes={routes}
        action={{
          type: 'external',
          route:
            'https://www.vagaro.com//Users/BusinessWidget.aspx?enc=MMLjhIwJMcwFQhXLL7ifVLI82XKP4EgxOtbbrGbm4jZjcWdYw9IzYcvzEFqLd4lj0+FJ687rN1J1l6DFrUqPjprYVemBRnMBGTkiMHY5xHAdeisLuoe9bZgs+39Q1Q8aFzujirrQeEHm1ommxMF5/BAGrSS+Qq88odv8EY03uHlZx+faOFh2vxiSbea8VjxX15+7SlUMDz4oHDdrvif/h8awqX8cIKg0AdOjtf8p8h4/iJ7D6hN7nV84OcXARVPSQXitjAO2UshlnIjo8hSLM1iDGqkMBnug+fi7ieQtsYTz4s3CGzVwyKk+4voguWJEVq/dBh13Tph6mc6/5hgtoiUeJ736frDCxVRuEQ0EO4dOJ7K9tsqkIr53UIqcSLc4',
          label: 'Book Now',
          color: 'default'
        }}
        transparent
        light
      />
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: ({
            functions: { linearGradient, rgba },
            palette: { gradients }
          }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(https://www.blog.stylezapp.com/wp-content/uploads/2021/10/image-1.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'grid',
          placeItems: 'center'
        }}
      >
        <Container>
          <Grid
            container
            item
            xs={12}
            lg={8}
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            sx={{ mx: 'auto', textAlign: 'center' }}
          >
            <img src={pnwLogo} style={{ width: '75%' }}></img>
            <MKTypography variant="h6" color="white" mt={8} mb={1}>
              Find us on
            </MKTypography>
            <MKBox display="flex" justifyContent="center" alignItems="center">
              <MKTypography
                component="a"
                variant="body1"
                color="white"
                href="#"
                mr={3}
              >
                <i className="fab fa-facebook" />
              </MKTypography>
              <MKTypography
                component="a"
                variant="body1"
                color="white"
                href="#"
                mr={3}
              >
                <i className="fab fa-instagram" />
              </MKTypography>
              <MKTypography
                component="a"
                variant="body1"
                color="white"
                href="#"
                mr={3}
              >
                <i className="fab fa-twitter" />
              </MKTypography>
              <MKTypography
                component="a"
                variant="body1"
                color="white"
                href="#"
              >
                <i className="fab fa-google-plus" />
              </MKTypography>
            </MKBox>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          background: 'white',
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          boxShadow: ({ boxShadows: { xxl } }) => xxl
        }}
      >
        <Information />
        <Team />
        <Featuring />
        <Newsletter />
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  )
}

export default Salon
