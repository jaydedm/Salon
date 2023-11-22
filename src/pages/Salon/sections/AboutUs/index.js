import MKBox from 'components/MKBox'
import footerRoutes from 'footer.routes'
import DefaultFooter from 'pages/Salon/sections/DefaultFooter'
import DefaultNavbar from 'pages/Salon/sections/DefaultNavbar'

import routes from 'salonRoutes'
import Team from './Team'

function AboutUs () {
  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: 'external',
          route: 'https://www.vagaro.com//Users/BusinessWidget.aspx?enc=MMLjhIwJMcwFQhXLL7ifVLI82XKP4EgxOtbbrGbm4jZjcWdYw9IzYcvzEFqLd4lj0+FJ687rN1J1l6DFrUqPjprYVemBRnMBGTkiMHY5xHAdeisLuoe9bZgs+39Q1Q8aFzujirrQeEHm1ommxMF5/BAGrSS+Qq88odv8EY03uHlZx+faOFh2vxiSbea8VjxX15+7SlUMDz4oHDdrvif/h8awqX8cIKg0AdOjtf8p8h4/iJ7D6hN7nV84OcXARVPSQXitjAO2UshlnIjo8hSLM1iDGqkMBnug+fi7ieQtsYTz4s3CGzVwyKk+4voguWJEVq/dBh13Tph6mc6/5hgtoiUeJ736frDCxVRuEQ0EO4dOJ7K9tsqkIr53UIqcSLc4',
          label: 'Book Now',
          color: 'default'
        }}
        dark
      />
      <MKBox component="section" py={12}>
        <Team />
      </MKBox >
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  )
}

export default AboutUs
