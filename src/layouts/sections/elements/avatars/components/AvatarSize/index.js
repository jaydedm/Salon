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

// Otis Kit PRO components
import MKBox from 'components/MKBox'
import MKAvatar from 'components/MKAvatar'

// Images
import team4 from 'assets/images/team-4.jpg'

function AvatarSize () {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container justifyContent="center">
          <Stack direction="row" alignItems="flex-end" spacing={1}>
            <MKAvatar src={team4} alt="xs" size="xs" />
            <MKAvatar src={team4} alt="sm" size="sm" />
            <MKAvatar src={team4} alt="md" size="md" />
            <MKAvatar src={team4} alt="lg" size="lg" />
            <MKAvatar src={team4} alt="xl" size="xl" />
            <MKAvatar src={team4} alt="xxl" size="xxl" />
          </Stack>
        </Grid>
      </Container>
    </MKBox>
  )
}

export default AvatarSize
