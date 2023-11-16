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
import Divider from '@mui/material/Divider'

// Otis Kit PRO components
import MKBox from 'components/MKBox'

// Otis Kit PRO examples
import DefaultCounterCard from 'examples/Cards/CounterCards/DefaultCounterCard'

function Counters () {
  return (
    <MKBox component="section" py={3}>
      <Container>
        <Grid container item xs={12} lg={9} sx={{ mx: 'auto' }}>
          <Grid item xs={12} md={4}>
            <DefaultCounterCard
              count={300}
              suffix="+"
              title="Coded Elements"
              description="From buttons, to inputs, navbars, alerts or cards, you are covered"
            />
          </Grid>
          <Grid item xs={12} md={4} display="flex">
            <Divider orientation="vertical" sx={{ display: { xs: 'none', md: 'block' }, mx: 0 }} />
            <DefaultCounterCard
              count={100}
              suffix="+"
              title="Design Blocks"
              description="Mix the sections, change the colors and unleash your creativity"
            />
            <Divider orientation="vertical" sx={{ display: { xs: 'none', md: 'block' }, ml: 0 }} />
          </Grid>
          <Grid item xs={12} md={4}>
            <DefaultCounterCard
              count={41}
              title="Pages"
              description="Save 3-4 weeks of work when you use our pre-made pages for your website"
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  )
}

export default Counters
