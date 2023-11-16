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

// prop-types is a library for typechecking of props
import PropTypes from 'prop-types'

// @mui material components
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'

// Otis Kit PRO components
import MKBox from 'components/MKBox'
import MKTypography from 'components/MKTypography'

// Otis Kit PRO examples
import FilledInfoCard from 'examples/Cards/InfoCards/FilledInfoCard'

function Header ({ image, label, title, description, cards }) {
  return (
    <>
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.8),
              rgba(gradients.dark.state, 0.8)
            )}, url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'grid',
          placeItems: 'center'
        }}
      >
        <Container>
          <Grid
            container
            item
            xs={12}
            lg={6}
            alignItems="flex-start"
            flexDirection="column"
            sx={{ px: { xs: 1, lg: 0 } }}
          >
            <MKTypography variant="h4" color="white">
              {label}
            </MKTypography>
            <MKTypography
              variant="h1"
              color="white"
              mb={1}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down('md')]: {
                  fontSize: size['3xl']
                }
              })}
            >
              {title}
            </MKTypography>
            <MKTypography variant="body1" color="white" opacity={0.8}>
              {description}
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          boxShadow: ({ boxShadows: { xxl } }) => xxl
        }}
      >
        <Grid container spacing={2}>
          {cards.map(({ variant, color, icon, title: cardTitle, description: cardDescription }) => (
            <Grid key={icon} item xs={12} sm={6} lg={4}>
              <FilledInfoCard
                variant={variant}
                color={color}
                icon={icon}
                title={cardTitle}
                description={cardDescription}
                action={{
                  type: 'internal',
                  route: '/pages/company/about-us',
                  label: 'More about us'
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Card>
    </>
  )
}

// Typechecking props for the Header
Header.propTypes = {
  image: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  cards: PropTypes.instanceOf(Array).isRequired
}

export default Header
