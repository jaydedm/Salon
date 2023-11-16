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
import RaisedBlogCard from 'examples/Cards/BlogCards/RaisedBlogCard'

function CardRaised () {
  const image =
    'https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80'

  return (
    <MKBox pt={6} pb={3} px={3}>
      <Grid container item xs={12} lg={6} sx={{ mx: 'auto', px: { xs: 0, lg: 6 } }}>
        <RaisedBlogCard
          image={image}
          title="Material Kit"
          description="One of the most beautiful and complex UI Kits built by the team behind Creative Tim. That's pretty impressive."
          action={{
            type: 'internal',
            route: '/sections/page-sections/general-cards',
            color: 'info',
            label: 'More about us'
          }}
        />
      </Grid>
    </MKBox>
  )
}

export default CardRaised
