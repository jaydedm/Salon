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
import Card from '@mui/material/Card'

// Otis Kit PRO components
import MKBox from 'components/MKBox'
import MKTypography from 'components/MKTypography'

// Otis Kit PRO examples
import SimpleInfoCard from 'examples/Cards/InfoCards/SimpleInfoCard'

// HelpCenter page components
import FaqCollapse from 'pages/Support/Faq/components/FaqCollapse'

function Faq () {
  const [collapse, setCollapse] = useState(false)

  return (
    <>
      <MKBox component="section" pt={20} pb={12}>
        <Container sx={{ mb: 8 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={4}>
              <SimpleInfoCard
                icon="description"
                title="Detailed Documentation"
                description="The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever."
                direction="center"
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <SimpleInfoCard
                icon="support"
                title="Awesome Support"
                description="The time is now for it to be okay to be great. People in this world shun people for being great. I'm not trying, I'm not trying to do the best way."
                direction="center"
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <SimpleInfoCard
                icon="grid_view"
                title="Styled Components"
                description="If you have the opportunity to play this game of life you need to appreciate every moment. A lot of people don’t appreciate the moment until it’s passed."
                direction="center"
              />
            </Grid>
          </Grid>
        </Container>
        <Container>
          <Grid container justifyContent="center">
            <Grid item xs={12}>
              <Card>
                <MKBox
                  variant="gradient"
                  bgColor="info"
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
                    The deposit will be credited toward your total payment during the final transaction.
                    This policy ensures efficient accommodation for all clients and upholds our commitment to exceptional experiences.
                    Thank you for your understanding and cooperation. We look forward to welcoming you and delivering a memorable and personalized service that exceeds your expectations.
                  </FaqCollapse>
                  <FaqCollapse
                    title="Guest Policy"
                    open={collapse === 2}
                    onClick={() => (collapse === 2 ? setCollapse(false) : setCollapse(2))}
                  >
                    Please have accompanying guests wait quietly in our lobby during your appointment.
                    To maintain a tranquil atmosphere, we request that no young children accompany you.
                    Thank you for understanding and working together to preserve the serenity of our space, ensuring a peaceful environment for all guests.
                  </FaqCollapse>
                  <MKTypography variant="h5" mt={6} mb={3}>
                    Account & Settings
                  </MKTypography>
                  <FaqCollapse
                    title="How do I change my password?"
                    open={collapse === 6}
                    onClick={() => (collapse === 6 ? setCollapse(false) : setCollapse(6))}
                  >
                    Society has put up so many boundaries, so many limitations on what&apos;s right
                    and wrong that it&apos;s almost impossible to get a pure thought out. It&apos;s
                    like a little kid, a little boy, looking at colors, and no one told him what
                    colors are good, before somebody tells you you shouldn&apos;t like pink because
                    that&apos;s for girls, or you&apos;d instantly become a gay two-year-old.
                  </FaqCollapse>
                  <FaqCollapse
                    title="How can I delete my account?"
                    open={collapse === 7}
                    onClick={() => (collapse === 7 ? setCollapse(false) : setCollapse(7))}
                  >
                    Why would anyone pick blue over pink? Pink is obviously a better color.
                    Everyone&apos;s born confident, and everything&apos;s taken away from you
                    <br />
                    <br />
                    We&apos;re not always in the position that we want to be at. We&apos;re
                    constantly growing. We&apos;re constantly making mistakes.
                  </FaqCollapse>
                  <FaqCollapse
                    title="How can I change account make account settings?"
                    open={collapse === 8}
                    onClick={() => (collapse === 8 ? setCollapse(false) : setCollapse(8))}
                  >
                    People in this world shun people for being great. For being a bright color.
                    We&apos;re constantly trying to express ourselves and actualize our dreams. If
                    you have the opportunity to play this game of life you need to appreciate every
                    moment. A lot of people don&apos;t appreciate the moment until it&apos;s passed.
                  </FaqCollapse>
                  <FaqCollapse
                    title="How to reset my password?"
                    open={collapse === 9}
                    onClick={() => (collapse === 9 ? setCollapse(false) : setCollapse(9))}
                  >
                    What matters is the people who are sparked by it. And the people who are like
                    offended by it, it doesn&apos;t matter. Because it&apos;s about motivating the
                    doers. Because I&apos;m here to follow my dreams and inspire other people to
                    follow their dreams, too.
                  </FaqCollapse>
                  <MKTypography variant="h5" mt={6} mb={3}>
                    Licenses
                  </MKTypography>
                  <FaqCollapse
                    title="What are the differences between the licenses on the website?"
                    open={collapse === 10}
                    onClick={() => (collapse === 10 ? setCollapse(false) : setCollapse(10))}
                  >
                    We&apos;re constantly trying to express ourselves and actualize our dreams. If
                    you have the opportunity to play this game of life you need to appreciate every
                    moment. A lot of people don&apos;t appreciate the moment until it&apos;s passed.
                    The time is now for it to be okay to be great.
                  </FaqCollapse>
                  <FaqCollapse
                    title="Can I use a premium product in an open source project?"
                    open={collapse === 11}
                    onClick={() => (collapse === 11 ? setCollapse(false) : setCollapse(11))}
                  >
                    People in this world shun people for being great. For being a bright color. For
                    standing out. But the time is now to be okay to be the greatest you. Would you
                    believe in what you believe in, if you were the only one who believed it? As we
                    live, our hearts turn colder.
                  </FaqCollapse>
                  <FaqCollapse
                    title="Can I use my Freelancer/Startup License on an alias domain?"
                    open={collapse === 12}
                    onClick={() => (collapse === 12 ? setCollapse(false) : setCollapse(12))}
                  >
                    Cause pain is what we go through as we become older. We get insulted by others,
                    lose trust for those others. We get back stabbed by friends. It becomes harder
                    for us to give others a hand. We get our heart broken by people we love, even
                    that we give them all we have. Then we lose family over time. What else could
                    rust the heart more over time? Blackgold.
                  </FaqCollapse>
                  <FaqCollapse
                    title="Can I use my Freelancer/Startup License on an alias domain?"
                    open={collapse === 13}
                    onClick={() => (collapse === 13 ? setCollapse(false) : setCollapse(13))}
                  >
                    Cause pain is what we go through as we become older. We get insulted by others,
                    lose trust for those others. We get back stabbed by friends. It becomes harder
                    for us to give others a hand. We get our heart broken by people we love, even
                    that we give them all we have. Then we lose family over time. What else could
                    rust the heart more over time? Blackgold.
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
