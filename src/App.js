import { useEffect } from 'react'

import { Navigate, Route, Routes, useLocation } from 'react-router-dom'

import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'

import theme from 'assets/theme'

import Services from 'pages/Salon/sections/Services'
import Salon from 'pages/Salon/Salon'
import AboutUs from 'pages/Salon/sections/AboutUs'

export default function App () {
  const { pathname } = useLocation()

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0
    document.scrollingElement.scrollTop = 0
  }, [pathname])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/" element={<Salon />} />
        <Route path="*" element={<Navigate to="/"/>} />
      </Routes>
    </ThemeProvider>
  )
}
