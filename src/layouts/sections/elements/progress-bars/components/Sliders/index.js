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
import Stack from '@mui/material/Stack'
import Slider from '@mui/material/Slider'

// Otis Kit PRO components
import MKBox from 'components/MKBox'

function Sliders () {
  return (
    <MKBox component="section" bgColor="white" py={12}>
      <Container>
        <Grid container item xs={12} lg={6} justifyContent="center" mx="auto">
          <Stack spacing={2} width="100%">
            <Slider defaultValue={50} />
            <Slider defaultValue={[25, 75]} />
          </Stack>
        </Grid>
      </Container>
    </MKBox>
  )
}

export default Sliders
