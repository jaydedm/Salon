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

import { useState } from 'react'

// @mui material components
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Snackbar from '@mui/material/Snackbar'

// @mui icons
import CloseIcon from '@mui/icons-material/Close'

// Otis Kit PRO components
import MKBox from 'components/MKBox'
import MKButton from 'components/MKButton'

function ToastMessage () {
  const [show, setShow] = useState(false)
  const toggleSnackbar = () => setShow(!show)

  const toastStyles = ({
    palette: { info },
    borders: { borderRadius },
    typography: { size },
    boxShadows: { lg }
  }) => ({
    '& .MuiPaper-root': {
      backgroundColor: info.main,
      borderRadius: borderRadius.lg,
      fontSize: size.sm,
      fontWeight: 400,
      boxShadow: lg,
      px: 2,
      py: 0.5
    }
  })

  const toastTemplate = (
    <MKBox display="flex" justifyContent="space-between" alignItems="center" color="white">
      Hello, world! This is a notification message.
    </MKBox>
  )

  return (
    <MKBox component="section" py={6}>
      <Container>
        <Grid container item xs={12} lg={10} justifyContent="center" mx="auto">
          <MKButton variant="gradient" color="info" onClick={toggleSnackbar}>
            Show Snackbar
          </MKButton>
        </Grid>
        <Snackbar
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          open={show}
          autoHideDuration={3000}
          onClose={toggleSnackbar}
          message={toastTemplate}
          action={
            <CloseIcon fontSize="medium" sx={{ cursor: 'pointer' }} onClick={toggleSnackbar} />
          }
          sx={toastStyles}
        />
      </Container>
    </MKBox>
  )
}

export default ToastMessage
