import { useEffect, useState } from 'react'

import { Navigate, Route, Routes, useLocation } from 'react-router-dom'

import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'

import theme from 'assets/theme'

import EstServices from 'pages/Salon/sections/Services/EstServices'
import Salon from 'pages/Salon/Salon'
import AboutUs from 'pages/Salon/sections/AboutUs'
import SalonServices from 'pages/Salon/sections/Services/SalonServices'
import Esthetics from 'pages/Salon/Esthetics'
import { Dialog } from '@reach/dialog'
import openingSoon from 'assets/images/openingSoon.png'
import '@reach/dialog/styles.css'

export default function App () {
  const { pathname } = useLocation()
  const [showDialog, setShowDialog] = useState(true)
  const close = () => setShowDialog(false)
  console.log({ showDialog })

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0
    document.scrollingElement.scrollTop = 0
  }, [pathname])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Dialog isOpen={showDialog} onDismiss={close} style={{ textAlign: 'center' }}>
        <img src={openingSoon} style={{ width: '100%' }}></img>
        <button onClick={close} style={{ padding: '8px', color: 'darkolivegreen', border: '1px solid mistyrose', borderRadius: '4px', backgroundColor: 'white', fontFamily: 'inherit' }}>Can&apos;t wait!</button>
      </Dialog>
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
