import Card from '@mui/material/Card'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'

import MKBox from 'components/MKBox'
import MKTypography from 'components/MKTypography'

import footerRoutes from 'footer.routes'
import routes from 'salonRoutes'

import pnwLogo from 'assets/images/p&wlogo-tight.webp'
import SalonInformation from './sections/SalonInformation'
import DefaultNavbar from './sections/DefaultNavbar'
import DefaultFooter from './sections/DefaultFooter'

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
            )}, url('/p&w-bg.webp')`,
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
            <img src={pnwLogo} style={{ width: '75%' }} alt='Logo for Penolope & Watson, the best spa, salon, and barber in Farmington and Durango'></img>
            <MKTypography variant="h6" color="white" mt={8} mb={1}>
              Find us on
            </MKTypography>
            <MKBox display="flex" justifyContent="center" alignItems="center">
              <MKTypography
                component="a"
                variant="body1"
                color="white"
                href="#"
                alt="Link to Penelope & Watson Facebook"
                mr={3}
              >
                <i className="fab fa-facebook" />
              </MKTypography>
              <MKTypography
                component="a"
                variant="body1"
                color="white"
                href="#"
                alt="Link to Penelope & Watson Instagram"
                mr={3}
              >
                <i className="fab fa-instagram" />
              </MKTypography>
              <MKTypography
                component="a"
                variant="body1"
                color="white"
                href="#"
                alt="Link to Penelope & Watson Twitter"
                mr={3}
              >
                <i className="fab fa-twitter" />
              </MKTypography>
              <MKTypography
                component="a"
                variant="body1"
                color="white"
                alt="Link to Penelope & Watson Google Plus"
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
        <SalonInformation />
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  )
}

export default Salon
