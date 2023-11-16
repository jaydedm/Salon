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

// @mui material components
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'

// Otis Kit PRO components
import MKBox from 'components/MKBox'
import MKTypography from 'components/MKTypography'

// Otis Kit PRO examples
import DefaultNavbar from 'examples/Navbars/DefaultNavbar'
import DefaultFooter from 'examples/Footers/DefaultFooter'

// Rental page sections
import Search from 'pages/LandingPages/Rental/sections/Search'
import Places from 'pages/LandingPages/Rental/sections/Places'
import Testimonials from 'pages/LandingPages/Rental/sections/Testimonials'
import Faq from 'pages/LandingPages/Rental/sections/Faq'
import Contact from 'pages/LandingPages/Rental/sections/Contact'

// Routes
import routes from 'routes'
import footerRoutes from 'footer.routes'

// Images
import bgImage from 'assets/images/bg-rental.jpeg'

function Rental () {
  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: 'external',
          route: 'https://material-ui.com/store/items/otis-kit-pro-material-kit-react/',
          label: 'buy now',
          color: 'info'
        }}
        transparent
        light
      />
      <MKBox
        minHeight="50vh"
        width="100%"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.5),
              rgba(gradients.dark.state, 0.5)
            )}, url(${bgImage})`,
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
            sx={{ mx: 'auto', textAlign: 'center' }}
          >
            <MKTypography
              variant="h2"
              color="white"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down('md')]: {
                  fontSize: size['3xl']
                }
              })}
            >
              Book your next trip
            </MKTypography>
            <MKTypography variant="body1" color="white" mt={1}>
              The time is now for it be okay to be great. People in this world shun people for being
              nice.
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: 'saturate(200%) blur(30px)',
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
          overflow: 'hidden'
        }}
      >
        <Search />
        <Places />
        <Testimonials />
        <Faq />
        <Contact />
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  )
}

export default Rental
