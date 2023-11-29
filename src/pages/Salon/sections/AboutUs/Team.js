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

// eslint-disable-next-line react/prop-types
function Team ({ color }) {
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
                  description={
                    <>
                      I&apos;m Ginger Lydic, a passionate esthetician dedicated to enhancing your skin&apos;s health and radiance.
                      <br></br>
                      <br></br>
                      After over two decades as a financial analyst, I made a bold decision and decided to embark on a new path, to pursue my interest in skincare.
                      <br></br>
                      <br></br>
                      Upon finishing esthetic school, an opportunity arose to procure this space.
                      <br></br>
                      <br></br>
                      My vision was a salon where independent spirits come together to create something extraordinary.
                      <br></br>
                      <br></br>
                      It&apos;s a celebration of individuality, a haven where professionals and clients alike embark on a shared journey of grooming, beauty, wellness, and empowerment.
                      <br></br>
                      <br></br>
                      Learn more about my skincare passion, under the P&W Esthetic page.
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
