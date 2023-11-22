import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import MKBox from 'components/MKBox'
import MKTypography from 'components/MKTypography'

// Images
import team1 from 'assets/images/ginger.png'
import team2 from 'assets/images/bruce-mars.jpg'
import team3 from 'assets/images/ivana-squares.jpg'
import team4 from 'assets/images/ivana-square.jpg'
import HorizontalTeamCard from 'components/HorizontalTeamCard'

function Team () {
  return (
    <>
      <MKBox
        component="section"
        variant="gradient"
        bgColor="dark"
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
                Our Team
              </MKTypography>
              <MKTypography variant="body2" color="white" opacity={0.8}>
                We&apos;re excited to say hello
              </MKTypography>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={6}>
              <MKBox mb={1}>
                <HorizontalTeamCard
                  image={team1}
                  name="Ginger Lydic"
                  position={{ color: 'info', label: 'Owner & Esthetician' }}
                  // eslint-disable-next-line quotes
                  description={
                    <>Welcome to my world of beauty and wellness! <br></br>
                      I&apos;m Ginger Lydic, a passionate and trained esthetician dedicated to helping you achieve your skin&apos;s optimal health and radiance.
                      <br></br>
                      <br></br>
                      In the pursuit of my true passion, I made a bold decision to follow my heart after spending over two decades as a financial analyst. With unwavering enthusiasm for skincare,
                      I decided to embark on a new path and devote myself to this lifelong interest.
                      <br></br>
                      <br></br>
                      As your skincare specialist, I take pride in customizing each treatment to address your unique concerns and goals. Whether you&apos;re seeking rejuvenation, acne management, or simply a moment of relaxation, I am here to create a personalized experience tailored just for you. Throughout our time together, my mission is to not only empower others to feel confident in their own skin but also provide you with a soothing sanctuary where you can unwind and feel pampered.
                      <br></br>
                      <br></br>
                      I cherish the connections I make with each individual and believe that the power of human touch combined with exceptional skincare can create a transformative experience.
                      <br></br>
                      <br></br>
                      When I&apos;m not in the treatment room, you can find me attending industry seminars, reading up on the latest skincare research, or spending quality time with my loved ones. I am truly grateful for the opportunity to do what I love, make a positive impact, and am always eager to discover new ways to enhance the wellbeing of my clients. \n I cannot wait to embark on this skincare journey with you.
                      <br></br>
                      <br></br>
                      Together, let&apos;s achieve your skin&apos;s full potential and embrace a future filled with radiance and confidence. Book your appointment today, and I look forward to welcoming you into my oasis of skincare bliss.
                    </>}
                />
              </MKBox>
            </Grid>
            <Grid item xs={12} lg={6}>
              <MKBox mb={1}>
                <HorizontalTeamCard
                  image={team2}
                  name="William Pearce"
                  position={{ color: 'info', label: 'Boss' }}
                  description="Artist is a term applied to a person who engages in an activity deemed to be an art."
                />
              </MKBox>
            </Grid>
            <Grid item xs={12} lg={6}>
              <MKBox mb={{ xs: 1, lg: 0 }}>
                <HorizontalTeamCard
                  image={team3}
                  name="Ivana Flow"
                  position={{ color: 'info', label: 'Athlete' }}
                  description="Artist is a term applied to a person who engages in an activity deemed to be an art."
                />
              </MKBox>
            </Grid>
            <Grid item xs={12} lg={6}>
              <MKBox mb={{ xs: 1, lg: 0 }}>
                <HorizontalTeamCard
                  image={team4}
                  name="Marquez Garcia"
                  position={{ color: 'info', label: 'JS Developer' }}
                  description="Artist is a term applied to a person who engages in an activity deemed to be an art."
                />
              </MKBox>
            </Grid>
          </Grid>
        </Container>
      </MKBox>
    </>
  )
}

export default Team
