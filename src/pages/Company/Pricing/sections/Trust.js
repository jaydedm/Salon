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

// Images
import coinbase from 'assets/images/logos/gray-logos/logo-coinbase.svg'
import nasa from 'assets/images/logos/gray-logos/logo-nasa.svg'
import netflix from 'assets/images/logos/gray-logos/logo-netflix.svg'
import pinterest from 'assets/images/logos/gray-logos/logo-pinterest.svg'
import spotify from 'assets/images/logos/gray-logos/logo-spotify.svg'
import vodafone from 'assets/images/logos/gray-logos/logo-vodafone.svg'

function Trust () {
  return (
    <MKBox py={6}>
      <Container>
        <Grid
          container
          item
          justifyContent="center"
          xs={8}
          sx={{ mx: 'auto', textAlign: 'center' }}
        >
          <MKTypography variant="h6" opacity={0.5}>
            More than 50+ brands trust Material
          </MKTypography>
        </Grid>
        <Grid container spacing={3} sx={{ mt: 3 }}>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={coinbase} alt="coinbase" width="100%" opacity={0.9} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={nasa} alt="nasa" width="100%" opacity={0.9} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={netflix} alt="netflix" width="100%" opacity={0.9} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={pinterest} alt="pinterest" width="100%" opacity={0.9} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={spotify} alt="spotify" width="100%" opacity={0.9} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={vodafone} alt="vodafone" width="100%" opacity={0.9} />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  )
}

export default Trust
