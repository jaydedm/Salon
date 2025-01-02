import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Images
import team1 from "assets/images/ginger.png";
import team2 from "assets/images/cutepic.jpeg";
import team3 from 'assets/images/alexis2.png'
// import team3 from 'assets/images/ivana-squares.jpg'
// import team4 from 'assets/images/ivana-square.jpg'
import HorizontalTeamCard from "components/HorizontalTeamCard";

// eslint-disable-next-line react/prop-types
function Team({ color }) {
  return (
    <>
      <MKBox
        component="section"
        variant="gradient"
        bgColor={color || "dark"}
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
                  position={{ color: "info", label: "Owner & Esthetician" }}
                  description={
                    <>
                      I&apos;m Ginger Lydic, a passionate esthetician dedicated
                      to enhancing your skin&apos;s health and radiance.
                      <br></br>
                      <br></br>
                      Welcome! As a passionate esthetician, I am dedicated to
                      enhancing your skin’s health and radiance. After over two
                      decades as a financial analyst, I made a bold decision and
                      decided to embark on a new path, to pursue my interest in
                      skincare.
                      <br></br>
                      <br></br>
                      Upon completing esthetics school, I was thrilled to
                      procure this space and bring my vision to life: a salon
                      where independent professionals come together to create
                      something extraordinary. This is a haven for
                      individuality, beauty, wellness, and empowerment—a place
                      where both clients and professionals thrive.
                      <br></br>
                      <br></br>
                      My approach is highly personalized, tailoring treatments
                      to your unique concerns and goals. Whether you’re seeking
                      rejuvenation, acne management, or a moment of relaxation,
                      I am here to provide a customized experience designed just
                      for you. From facials and waxing to lash and brow
                      treatments, I aim to deliver results that leave you
                      feeling refreshed, confident, and radiant.
                      <br></br>
                      <br></br>
                      Beyond treatments, my mission is to create a sanctuary
                      where you can unwind, feel pampered, and embrace
                      self-care. I cherish the connections I make with each
                      individual and believe that the power of human touch
                      combined with exceptional skincare can create a
                      transformative experience.
                      <br></br>
                      <br></br>
                      It’s an honor to do what I love, make a positive impact,
                      and continuously explore new ways to enhance the
                      well-being of my clients. Let’s embark on this skincare
                      journey together—schedule your appointment, and let’s
                      unlock your skin’s full potential for a future filled with
                      confidence and beauty.
                    </>
                  }
                />
              </MKBox>
            </Grid>
            <Grid item xs={12} lg={6}>
              <MKBox mb={1}>
                <HorizontalTeamCard
                  image={team3}
                  name="Alexis Acrey"
                  position={{ color: "info", label: "Barber & Hairstylist" }}
                  description={
                    <>
                      Hi, I’m Alexis Acrey! I’m thrilled to have the opportunity
                      to work with you as your barber or hairstylist. After
                      years of figuring out where I wanted to take my career, I
                      found my calling in the beauty industry. I graduated with
                      an Associate’s Degree in Barbering from San Juan College.
                      <br></br>
                      <br></br>
                      Since then, I&apos;ve been lucky to team up with Ginger to
                      help bring her vision to life. Together, we&apos;re
                      creating a space where creativity thrives, and people can
                      learn and grow—not just as professionals and clients, but
                      as individuals.
                      <br></br>
                      <br></br>
                      I’m excited to share my skills with you, whether
                      you&apos;re looking for a fresh cut, a new style, or a
                      place to feel truly taken care of. I look forward to
                      working together!
                      <br></br>
                      <br></br>
                    </>
                  }
                />
              </MKBox>
            </Grid>
            <Grid item xs={12} lg={6}>
              <MKBox mb={1}>
                <HorizontalTeamCard
                  image={team2}
                  name="This Could Be You"
                  position={{ color: "info", label: "Stylist" }}
                  description={
                    <span>
                      We&apos;re always welcoming professional and passionate
                      creatives to join our team.{" "}
                      <a href="mailto:owner@penelopeandwatson.com">
                        Contact us{" "}
                      </a>{" "}
                      to learn more.
                    </span>
                  }
                />
              </MKBox>
            </Grid>
            <Grid item xs={12} lg={6}>
              <MKBox mb={1}>
                <HorizontalTeamCard
                  image={team2}
                  name="This Could Be You"
                  position={{ color: "info", label: "Stylist" }}
                  description={
                    <span>
                      We&apos;re always welcoming professional and passionate
                      creatives to join our team.{" "}
                      <a href="mailto:owner@penelopeandwatson.com">
                        Contact us{" "}
                      </a>{" "}
                      to learn more.
                    </span>
                  }
                />
              </MKBox>
            </Grid>
          </Grid>
        </Container>
      </MKBox>
    </>
  );
}

export default Team;
