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
import RotatingCard from 'examples/Cards/RotatingCard'
import RotatingCardFront from 'examples/Cards/RotatingCard/RotatingCardFront'
import RotatingCardBack from 'examples/Cards/RotatingCard/RotatingCardBack'

// Images
import bgFront from 'assets/images/rotating-card-bg-front.jpeg'
import bgBack from 'assets/images/rotating-card-bg-back.jpeg'

function CardRotate () {
  return (
    <MKBox pt={6} pb={3} px={3}>
      <Grid container item xs={12} lg={6} sx={{ mx: 'auto', px: { xs: 0, lg: 6 } }}>
        <RotatingCard>
          <RotatingCardFront
            image={bgFront}
            icon="touch_app"
            title={
              <>
                Feel the
                <br />
                Material Kit
              </>
            }
            description="All the MUI components that you need in a development have been re-design with the new look."
          />
          <RotatingCardBack
            image={bgBack}
            title="Discover More"
            description="You will save a lot of time going from prototyping to full-functional code because all elements are implemented."
            action={{ type: 'internal', route: '/', label: 'start with header' }}
          />
        </RotatingCard>
      </Grid>
    </MKBox>
  )
}

export default CardRotate
