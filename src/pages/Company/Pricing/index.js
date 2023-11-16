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
// import Card from "@mui/material/Card";

// Otis Kit PRO components
import MKBox from 'components/MKBox'

// Otis Kit PRO examples
import DefaultNavbar from 'examples/Navbars/DefaultNavbar'
import DefaultFooter from 'examples/Footers/DefaultFooter'

// Pricing page sections
import Header from 'pages/Company/Pricing/sections/Header'
import AboutUs from 'pages/Company/Pricing/sections/AboutUs'
import PricingSection from 'pages/Company/Pricing/sections/Pricing'
import LifetimeMembership from 'pages/Company/Pricing/sections/LifetimeMembership'
import Testimonials from 'pages/Company/Pricing/sections/Testimonials'
import Trust from 'pages/Company/Pricing/sections/Trust'
import Faq from 'pages/Company/Pricing/sections/Faq'

// Routes
import routes from 'routes'
import footerRoutes from 'footer.routes'

function Pricing () {
  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: 'external',
          route: 'https://material-ui.com/store/items/otis-kit-pro-material-kit-react/',
          label: 'buy now'
        }}
        transparent
        light
      />
      <Header />
      <MKBox p={3}>
        <AboutUs />
        <PricingSection />
        <LifetimeMembership />
        <Testimonials />
        <Trust />
        <Faq />
      </MKBox>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  )
}

export default Pricing
