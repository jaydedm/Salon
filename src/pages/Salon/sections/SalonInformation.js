import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'

import MKBox from 'components/MKBox'

import FaqPage from './faq'
import CenteredBlogCard from 'components/CenteredBlogCard'

const DescriptionText =
  <div>
    <p>We celebrate a community of independent business providers, leading to variations in services, prices, and policies. Explore important information below for a seamless experience.</p>
    <br></br>
    <p>You can navigate to both our salon and esthetic service pages, with pricing and description, under pages at the top of the website. You can also learn about the service providers on the “about us” page.</p>
    <br></br>
    <p>Thank you for choosing Penelope & Watson we&apos;re excited to pamper you and bring out your best.</p>
  </div>

function SalonInformation () {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container spacing={3} alignItems="center">
          <CenteredBlogCard
            image="/pnwstations.png"
            title="Welcome to Penelope & Watson"
            description={DescriptionText}
            action={{
              type: 'external',
              route: 'https://www.vagaro.com//Users/BusinessWidget.aspx?enc=MMLjhIwJMcwFQhXLL7ifVLI82XKP4EgxOtbbrGbm4jZjcWdYw9IzYcvzEFqLd4lj0+FJ687rN1J1l6DFrUqPjprYVemBRnMBGTkiMHY5xHAdeisLuoe9bZgs+39Q1Q8aFzujirrQeEHm1ommxMF5/BAGrSS+Qq88odv8EY03uHlZx+faOFh2vxiSbea8VjxX15+7SlUMDz4oHDdrvif/h8awqX8cIKg0AdOjtf8p8h4/iJ7D6hN7nV84OcXARVPSQXitjAO2UshlnIjo8hSLM1iDGqkMBnug+fi7ieQtsYTz4s3CGzVwyKk+4voguWJEVq/dBh13Tph6mc6/5hgtoiUeJ736frDCxVRuEQ0EO4dOJ7K9tsqkIr53UIqcSLc4',
              color: 'gold',
              label: 'Book Now'
            }}
          />
        </Grid>
      </Container>
      <FaqPage />
    </MKBox >
  )
}

export default SalonInformation
