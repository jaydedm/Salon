import { useEffect } from 'react'

import { Navigate, Route, Routes, useLocation } from 'react-router-dom'

import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'

import theme from 'assets/theme'

import '@reach/dialog/styles.css'
import Esthetics from 'pages/Salon/Esthetics'
import Salon from 'pages/Salon/Salon'
import AboutUs from 'pages/Salon/sections/AboutUs'
import EstServices from 'pages/Salon/sections/Services/EstServices'
import SalonServices from 'pages/Salon/sections/Services/SalonServices'

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
        <Route path="/estaboutus" element={<Esthetics />} />
        <Route path="/estservices" element={<EstServices />} />
        <Route path="/services" element={<SalonServices />} />
        <Route path="/" element={<Salon />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </ThemeProvider >
  )
}
