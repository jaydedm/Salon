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
import MKTypography from 'components/MKTypography'

// Otis Kit PRO examples
import DefaultInfoCard from 'examples/Cards/InfoCards/DefaultInfoCard'

function SocialAnalytics () {
  return (
    <MKBox component="section" py={6}>
      <Container>
        <Grid
          container
          item
          justifyContent="center"
          xs={12}
          lg={6}
          sx={{ mx: 'auto', pb: 3, textAlign: 'center' }}
        >
          <MKTypography variant="h4" color="info" textGradient>
            Social Analytics
          </MKTypography>
          <MKTypography variant="h2" my={1}>
            Turn your idea into a startup
          </MKTypography>
          <MKTypography variant="body1" color="text">
            We&apos;re constantly trying to express ourselves and actualize our dreams. If you have
            the opportunity to play
          </MKTypography>
        </Grid>
        <Grid container spacing={3} sx={{ mt: 3 }}>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultInfoCard
              icon="groups"
              title="Check our team"
              description="We get insulted by others, lose trust for those others. We get back here to follow
                my dreams"
              direction="center"
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultInfoCard
              icon="support_agent"
              title="Support 24/7"
              description="We get insulted by others, lose trust for those others. We get back here to follow
                my dreams"
              direction="center"
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4} sx={{ mx: 'auto' }}>
            <DefaultInfoCard
              icon="update"
              title="Unlimited revisions"
              description="We get insulted by others, lose trust for those others. We get back here to follow
                my dreams"
              direction="center"
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  )
}

export default SocialAnalytics
