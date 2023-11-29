import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import MKBox from 'components/MKBox'
import MKTypography from 'components/MKTypography'

// Images
import ginger2 from 'assets/images/ginger2.png'
import HorizontalTeamCard from 'components/HorizontalTeamCard'
import FaqPage from '../faq'

// eslint-disable-next-line react/prop-types
function EstTeam ({ color }) {
  return (
    <>
      <MKBox
        component="section"
        variant="gradient"
        bgColor={color || 'dark'}
        position="relative"
        py={6}
        pt={12}
        px={{ xs: 2, lg: 0 }}
        mx={-2}
      >
        <Container>
          <Grid container>
            <Grid item xs={12} md={8} sx={{ mb: 6 }}>
              <MKTypography variant="h3" color="white">
                The Team
              </MKTypography>
              <MKTypography variant="body2" color="white" opacity={0.8}>
                I&apos;m excited to say hello
              </MKTypography>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={6} sx={{ maxWidth: '100% !important', flexBasis: '100% !important' }}>
              <MKBox mb={1}>
                <HorizontalTeamCard
                  image={ginger2}
                  name="Ginger Lydic"
                  position={{ color: 'info', label: 'Owner & Esthetician' }}
                  description={
                    <>Welcome to P&W Esthetics, my world of beauty and wellness! As the exclusive service provider, I customize treatments to address your unique concerns and goals.
                      <br></br>
                      <br></br>
                      Whether you&apos;re seeking rejuvenation, acne management, or simply a moment of relaxation, I am here to create a personalized experience tailored just for you. Embrace the impact of the facial options, the allure of lash and brow treatments, and the irresistible charm of waxing and tinting services.
                      <br></br>
                      <br></br>
                      Throughout our time together, my mission is to not only empower you to feel confident in your own skin but also provide you with a soothing sanctuary where you can unwind and feel pampered. I cherish the connections I make with each individual and believe that the power of human touch combined with exceptional skincare can create a transformative experience.
                      <br></br>
                      <br></br>
                      I am truly grateful for the opportunity to do what I love, make a positive impact, and am always eager to discover new ways to enhance the wellbeing of my clients. Embark on this skincare journey with me—schedule your appointment, and together, we&apos;ll unlock your skin&apos;s full potential for a future filled with radiance and confidence.
                      <br></br>
                      <br></br>
                      I value your time and appreciate your understanding of my policies. These guidelines help maintain a well-organized schedule, ensuring every client receives the attention and care they deserve.
                      <br></br>
                      <br></br>
                      To ensure a harmonious and pleasant experience for all clients, please take a moment to review the important information below.
                    </>}
                />
              </MKBox>
            </Grid>
          </Grid>
          <FaqPage color='gold' est={true} />
        </Container>
      </MKBox>
    </>
  )
}

export default EstTeam
