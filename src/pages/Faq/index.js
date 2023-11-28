import { useState } from 'react'

import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'

import MKBox from 'components/MKBox'
import MKTypography from 'components/MKTypography'
import FaqCollapse from 'components/FaqCollapse'
import { mapsSelector } from 'utils'

// eslint-disable-next-line react/prop-types
function Faq ({ color }) {
  const [collapse, setCollapse] = useState(false)

  console.log(color)

  return (
    <>
      <MKBox component="section" pt={20} pb={12}>
        <Container sx={{ mb: 8 }}>
        </Container>
        <Container>
          <Grid container justifyContent="center">
            <Grid item xs={12}>
              <Card>
                <MKBox
                  variant="gradient"
                  bgColor={color || 'info'}
                  borderRadius="lg"
                  coloredShadow="info"
                  p={3}
                  mt={-3}
                  mx={2}
                >
                  <MKTypography variant="h3" color="white">
                    Important Information
                  </MKTypography>
                </MKBox>
                <MKBox p={6}>
                  <MKTypography variant="h5" my={3}>
                    Policies
                  </MKTypography>
                  <FaqCollapse
                    title="Booking Policy"
                    open={collapse === 1}
                    onClick={() => (collapse === 1 ? setCollapse(false) : setCollapse(1))}
                  >
                    To secure your preferred service, we require a non-refundable deposit and a valid card on file at the time of booking.
                    <br></br>
                    <br></br>
                    The deposit will be credited toward your total payment during the final transaction.
                    <br></br>
                    <br></br>
                    This policy ensures efficient accommodation for all clients and upholds our commitment to exceptional experiences.
                    <br></br>
                    <br></br>
                    Thank you for your understanding and cooperation. We look forward to welcoming you and delivering a memorable and personalized service that exceeds your expectations.
                  </FaqCollapse>
                  <FaqCollapse
                    title="Guest Policy"
                    open={collapse === 2}
                    onClick={() => (collapse === 2 ? setCollapse(false) : setCollapse(2))}
                  >
                    Please have accompanying guests wait quietly in our lobby during your appointment.
                    <br></br>
                    <br></br>
                    To maintain a tranquil atmosphere, we request that no young children accompany you unless they have an appointment.
                    <br></br>
                    <br></br>
                    Thank you for understanding and working together to preserve the serenity of our space, ensuring a peaceful environment for all guests.
                  </FaqCollapse>
                  <MKTypography variant="h5" mt={6} mb={3}>
                    FAQ
                  </MKTypography>
                  <FaqCollapse
                    title="Operating Hours"
                    open={collapse === 6}
                    onClick={() => (collapse === 6 ? setCollapse(false) : setCollapse(6))}
                  >
                    We offer personalized services by appointment only, for a focused experience.
                    <br></br>
                    <br></br>
                    Walk-in appointments may be available but will vary, as well as pricing.
                    <br></br>
                    <br></br>
                    For a seamless and tailored experience, we recommend booking in advance.
                  </FaqCollapse>
                  <FaqCollapse
                    title="Location"
                    open={collapse === 7}
                    onClick={() => (collapse === 7 ? setCollapse(false) : setCollapse(7))}
                  >
                    <a href={mapsSelector()}>
                      3832 East Main Street
                      <br></br>
                      Suite B
                      <br></br>
                      Farmington NM 87402
                    </a>
                  </FaqCollapse>
                </MKBox>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </MKBox>
    </>
  )
}

export default Faq
