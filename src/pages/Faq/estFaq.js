import { useState } from 'react'

import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'

import MKBox from 'components/MKBox'
import MKTypography from 'components/MKTypography'
import FaqCollapse from 'components/FaqCollapse'

// eslint-disable-next-line react/prop-types
function EstFaq ({ color }) {
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
                    title="Scheduling and Reservations Policy"
                    open={collapse === 1}
                    onClick={() => (collapse === 1 ? setCollapse(false) : setCollapse(1))}
                  >
                    All services are exclusively accessible through appointments, guaranteeing individualized focus and a smooth procedure.
                    <br></br>
                    <br></br>
                    For all services, a valid card must be placed on record, accompanied by a 25% deposit during the reservation.
                    <br></br>
                    <br></br>
                    This deposit is non-refundable and will be deducted as credit from the overall service expense upon final payment.
                  </FaqCollapse>
                  <FaqCollapse
                    title="Appointment Adjustments Policy"
                    open={collapse === 2}
                    onClick={() => (collapse === 2 ? setCollapse(false) : setCollapse(2))}
                  >
                    Should you wish to change your appointment, please give a minimum of 48 hours&apos; advance notice, enabling other clients to utilize the vacated slot.
                    <br></br>
                    <br></br>
                    For rescheduling done between 24 and 48 hours before the scheduled appointment, an extra non-refundable 25% deposit is necessary; this sum will be subtracted from the ultimate service charge upon final payment.
                    <br></br>
                    <br></br>
                    Rescheduling within 24 hours of the arranged appointment will result in a non-refundable $25 rescheduling fee, unconnected to the total service expense.
                  </FaqCollapse>
                  <FaqCollapse
                    title="Tardiness Policy"
                    open={collapse === 3}
                    onClick={() => (collapse === 3 ? setCollapse(false) : setCollapse(3))}
                  >
                    Appointments are meticulously scheduled in succession to guarantee exclusive focus on each client and ideal outcomes.
                    <br></br>
                    <br></br>
                    Arriving late will lead to a condensed session to accommodate other slated appointments, with the complete service charge remaining applicable.
                  </FaqCollapse>
                  <FaqCollapse
                    title="Late / Missed Policy"
                    open={collapse === 4}
                    onClick={() => (collapse === 4 ? setCollapse(false) : setCollapse(4))}
                  >
                    In the event that you are beyond 15 minutes late or fail to attend your arranged appointment, the outstanding balance for the service expense will be billed to the card registered on record. Consequently, you will be billed 100% of the service cost.
                  </FaqCollapse>
                  <FaqCollapse
                    title="Payment and Gratuity Policy"
                    open={collapse === 5}
                    onClick={() => (collapse === 5 ? setCollapse(false) : setCollapse(5))}
                  >
                    Services can be settled using the card on record or in cash.
                    <br></br>
                    <br></br>
                    While gratuities are welcomed, they are optional. Should you wish to show your kindness through a gratuity, it will be received with gratitude.
                  </FaqCollapse>
                  <FaqCollapse
                    title="Minor Client Policy"
                    open={collapse === 6}
                    onClick={() => (collapse === 6 ? setCollapse(false) : setCollapse(6))}
                  >
                    Clients below 18 years of age must have a parent or guardian present during treatment and consultation.
                    <br></br>
                    <br></br>
                    To ensure a peaceful atmosphere, I request accompanying companions to wait quietly in the designated waiting area after the consultation, or may choose to leave the salon.
                  </FaqCollapse>
                  <MKTypography variant="h5" mt={6} mb={3}>
                    FAQ
                  </MKTypography>
                  <FaqCollapse
                    title="Health Notes"
                    open={collapse === 7}
                    onClick={() => (collapse === 7 ? setCollapse(false) : setCollapse(7))}
                  >
                    To ensure the best service, please inform me of any medical conditions, allergies, or sensitivities that could impact your treatment.
                    <br></br>
                    <br></br>
                    If health-related rescheduling becomes necessary, associated fees could be waived. Your well-being will also be taken into account if rescheduling is required on my end.
                  </FaqCollapse>
                  <FaqCollapse
                    title="Safety and Sanitation"
                    open={collapse === 8}
                    onClick={() => (collapse === 8 ? setCollapse(false) : setCollapse(8))}
                  >
                    Your well-being is my top priority. Be assured, I follow rigorous sanitization and disinfection procedures aligned with industry benchmarks.
                    <br></br>
                    <br></br>
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

export default EstFaq
