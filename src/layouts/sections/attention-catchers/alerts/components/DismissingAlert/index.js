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
import MKAlert from 'components/MKAlert'

function DismissingAlert () {
  return (
    <MKBox component="section" py={6}>
      <Container>
        <Grid container item xs={12} lg={10} mx="auto">
          <Grid item xs={12}>
            <MKAlert color="warning" dismissible>
              <strong>Holy molly!</strong>&nbsp; You should check in on some of those fields below.
            </MKAlert>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  )
}

export default DismissingAlert
