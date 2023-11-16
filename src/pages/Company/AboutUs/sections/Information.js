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

// Otis Kit PRO components
import MKBox from 'components/MKBox'

// Otis Kit PRO examples
import DefaultInfoCard from 'examples/Cards/InfoCards/DefaultInfoCard'
import CenteredBlogCard from 'examples/Cards/BlogCards/CenteredBlogCard'

function SalonInformation () {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} lg={6}>
            <Grid container justifyContent="flex-start">
              <Grid item xs={12} md={6}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon="public"
                    title="Your Community"
                    color='pink'
                    description={
                      <div>
                        <p>`We take pride in fostering a community of talented service providers, each operating as an independent business.</p>
                        <br></br>
                        <p>As a result, our services, prices, and policies may vary based on the individual service provider. We believe this diversity ensures you have access to a wide array of offerings and expertise.</p>
                        <br></br>
                        <p>To help you navigate your experience seamlessly, we have provided an overview of our salon information and policies below. For more detailed service descriptions, pricing, providers, and booking, we encourage you to explore our other pages.</p>
                        <br></br>
                        <p>Thank you for choosing Penelope & Watson as your destination. We look forward to pampering you and bringing out the best in you. Let&apos;s embark on a journey of beauty and self-care together!</p>
                      </div>}
                  />
              </MKBox>
            </Grid>
            <Grid item xs={12} md={6}>
              <MKBox mb={5}>
                <DefaultInfoCard
                  icon="query_builder"
                  title="Operating Hours"
                  color='pink'
                  description={
                    <div>
                      <p>
                      At our establishment, we offer personalized service experiences tailored to your needs. To ensure we dedicate our full attention to you, we operate by appointment only. To secure your spot and embark on your journey of relaxation and beauty, simply head over to our services or team page, where you&apos;ll find a convenient link to book your appointment.
                      </p>
                      <br></br>
                      <p>While we cherish the opportunity to serve walk-in clients, please be aware that availability and pricing for walk-in appointments may vary. For a seamless and tailored experience, we recommend booking in advance, allowing us to curate the perfect treatment or service just for you.</p>
                      <br></br>
                      <p>Experience the luxury of personalized care and attention at our inviting space. Unlock a world of rejuvenation and indulgence by reserving your appointment today. We eagerly await the pleasure of serving you and exceeding your expectations with our exceptional services.</p>
                    </div>
                  }
                />
              </MKBox>
            </Grid>
            <Grid item xs={12} md={6}>
              <MKBox mb={{ xs: 5, md: 0 }}>
                <DefaultInfoCard
                  icon="announcement"
                  color='pink'
                  title="Booking Policy"
                  description="We get insulted by others, lose trust for those We get back freezes"
                />
              </MKBox>
            </Grid>
            <Grid item xs={12} md={6}>
              <MKBox mb={{ xs: 5, md: 0 }}>
                <DefaultInfoCard
                  icon="3p"
                  color='pink'
                  title="Improved platform"
                  description="We get insulted by others, lose trust for those We get back freezes"
                />
              </MKBox>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={4} sx={{ ml: 'auto', mt: { xs: 3, lg: 0 } }}>
          <CenteredBlogCard
            image="https://images.unsplash.com/photo-1544717302-de2939b7ef71?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            title="Welcome to Penelope & Watson"
            description="A haven for salon, barber, and esthetician services. Our space has undergone a refreshing transformation, and we are thrilled to bring you a range of exceptional services to cater to your unique needs."
            action={{
              type: 'external',
              route: 'https://www.vagaro.com//Users/BusinessWidget.aspx?enc=MMLjhIwJMcwFQhXLL7ifVLI82XKP4EgxOtbbrGbm4jZjcWdYw9IzYcvzEFqLd4lj0+FJ687rN1J1l6DFrUqPjprYVemBRnMBGTkiMHY5xHAdeisLuoe9bZgs+39Q1Q8aFzujirrQeEHm1ommxMF5/BAGrSS+Qq88odv8EY03uHlZx+faOFh2vxiSbea8VjxX15+7SlUMDz4oHDdrvif/h8awqX8cIKg0AdOjtf8p8h4/iJ7D6hN7nV84OcXARVPSQXitjAO2UshlnIjo8hSLM1iDGqkMBnug+fi7ieQtsYTz4s3CGzVwyKk+4voguWJEVq/dBh13Tph6mc6/5hgtoiUeJ736frDCxVRuEQ0EO4dOJ7K9tsqkIr53UIqcSLc4',
              color: 'gold',
              label: 'Book Now'
            }}
          />
        </Grid>
      </Grid>
    </Container>
    </MKBox >
  )
}

export default SalonInformation
