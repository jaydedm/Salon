/**
=========================================================
* Otis Kit PRO - v2.0.1
=========================================================

* Product Page: https://material-ui.com/store/items/otis-kit-pro-material-kit-react/
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useEffect } from 'react'

// react-router components
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'

// @mui material components
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'

// Otis Kit PRO themes
import theme from 'assets/theme'

// Otis Kit PRO routes
import AboutUs from 'pages/Company/AboutUs'
import Services from 'pages/Salon/sections/Services'
import routes from 'routes'

export default function App () {
  const { pathname } = useLocation()

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0
    document.scrollingElement.scrollTop = 0
  }, [pathname])

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse)
      }

      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />
      }

      return null
    })

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        {getRoutes(routes)}
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="*" element={<Navigate to="/salon" />} />
      </Routes>
    </ThemeProvider>
  )
}
