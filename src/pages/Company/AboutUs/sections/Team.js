import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'

// Otis Kit PRO components
import MKBox from 'components/MKBox'
import MKTypography from 'components/MKTypography'

// Otis Kit PRO examples
import HorizontalTeamCard from 'examples/Cards/TeamCards/HorizontalTeamCard'

// Images
import team1 from 'assets/images/team-5.jpg'
import team2 from 'assets/images/bruce-mars.jpg'
import team3 from 'assets/images/ivana-squares.jpg'
import team4 from 'assets/images/ivana-square.jpg'

function Team () {
  return (
    <MKBox
      component="section"
      variant="gradient"
      bgColor="dark"
      position="relative"
      py={6}
      px={{ xs: 2, lg: 0 }}
      mx={-2}
    >
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 6 }}>
            <MKTypography variant="h3" color="white">
              About Us
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              There&apos;s nothing I really wanted to do in life that I wasn&apos;t able to get good
              at. That&apos;s my skill.
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={team1}
                name="Emma Roberts"
                position={{ color: 'info', label: 'UI Designer' }}
                description="Welcome to my world of beauty and wellness! I'm Ginger Lydic, a passionate and trained esthetician dedicated to helping you achieve your skin's optimal health and radiance. In the pursuit of my true passion, I made a bold decision to follow my heart after spending over two decades as a financial analyst. With unwavering enthusiasm for skincare, I decided to embark on a new path and devote myself to this lifelong interest.

                As your skincare specialist, I take pride in customizing each treatment to address your unique concerns and goals. Whether you're seeking rejuvenation, acne management, or simply a moment of relaxation, I am here to create a personalized experience tailored just for you.

                Throughout our time together, my mission is to not only empower others to feel confident in their own skin but also provide you with a soothing sanctuary where you can unwind and feel pampered. I cherish the connections I make with each individual and believe that the power of human touch combined with exceptional skincare can create a transformative experience.

                When I'm not in the treatment room, you can find me attending industry seminars, reading up on the latest skincare research, or spending quality time with my loved ones. I am truly grateful for the opportunity to do what I love, make a positive impact, and am always eager to discover new ways to enhance the wellbeing of my clients.

                I cannot wait to embark on this skincare journey with you. Together, let's achieve your skin's full potential and embrace a future filled with radiance and confidence. Book your appointment today, and I look forward to welcoming you into my oasis of skincare bliss."
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
  )
}

export default Team
