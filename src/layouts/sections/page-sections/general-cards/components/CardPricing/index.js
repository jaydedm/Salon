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
import Grid from '@mui/material/Grid'

// Otis Kit PRO components
import MKBox from 'components/MKBox'

// Otis Kit PRO examples
import SimplePricingCard from 'examples/Cards/PricingCards/SimplePricingCard'

function CardPricing () {
  return (
    <MKBox pt={6} pb={3} px={3}>
      <Grid container item xs={12} lg={6} sx={{ mx: 'auto', px: { xs: 0, lg: 6 } }}>
        <SimplePricingCard
          variant="gradient"
          color="dark"
          title="Premium"
          description="Free access for 200 members"
          price={{ value: '$499', type: 'year' }}
          action={{ type: 'internal', route: '/', label: 'buy now' }}
          specifications={[
            'Complete documentation',
            'Working materials in Sketch',
            '20GB cloud storage',
            '100 team members'
          ]}
        />
      </Grid>
    </MKBox>
  )
}

export default CardPricing
