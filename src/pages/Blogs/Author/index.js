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
import Card from '@mui/material/Card'

// Otis Kit PRO components
import MKBox from 'components/MKBox'

// Otis Kit PRO examples
import DefaultNavbar from 'examples/Navbars/DefaultNavbar'

// Author page sections
import Profile from 'pages/Blogs/Author/sections/Profile'
import Posts from 'pages/Blogs/Author/sections/Posts'
import Contact from 'pages/Blogs/Author/sections/Contact'
import Footer from 'pages/Blogs/Author/sections/Footer'

// Routes
import routes from 'routes'

// Images
import bgImage from 'assets/images/city-profile.jpg'

function Author () {
  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: 'external',
          route: 'https://material-ui.com/store/items/otis-kit-pro-material-kit-react/',
          label: 'buy now',
          color: 'info'
        }}
        transparent
        light
      />
      <MKBox bgColor="white">
        <MKBox
          minHeight="25rem"
          width="100%"
          sx={{
            backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
              `${linearGradient(
                rgba(gradients.dark.main, 0.8),
                rgba(gradients.dark.state, 0.8)
              )}, url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'grid',
            placeItems: 'center'
          }}
        />
        <Card
          sx={{
            p: 2,
            mx: { xs: 2, lg: 3 },
            mt: -8,
            mb: 4,
            backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
            backdropFilter: 'saturate(200%) blur(30px)',
            boxShadow: ({ boxShadows: { xxl } }) => xxl
          }}
        >
          <Profile />
          <Posts />
        </Card>
        <Contact />
        <Footer />
      </MKBox>
    </>
  )
}

export default Author
