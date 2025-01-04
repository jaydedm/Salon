import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";

// Images
import ginger2 from "assets/images/ginger2.png";
import HorizontalTeamCard from "components/HorizontalTeamCard";
import FaqPage from "../faq";

// eslint-disable-next-line react/prop-types
function EstTeam({ color }) {
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
          <Grid container spacing={3}>
            <Grid
              item
              xs={12}
              lg={6}
              sx={{ maxWidth: "100% !important", flexBasis: "100% !important" }}
            >
              <MKBox mb={1}>
                <HorizontalTeamCard
                  image={ginger2}
                  name="Ginger Lydic"
                  position={{ color: "info", label: "Owner & Esthetician" }}
                  description={
                    <>
                      I’m excited to pamper you and address your skincare needs!
                      Your time is valuable, and I deeply appreciate your
                      understanding of my policies. These guidelines are
                      designed to maintain a well-organized schedule, ensuring
                      each client receives the personalized attention they
                      deserve.
                      <br></br>
                      <br></br>
                      To create a harmonious and enjoyable experience for
                      everyone, please take a moment to review the important
                      details outlined below for esthetic services provided by
                      me.
                    </>
                  }
                />
              </MKBox>
            </Grid>
          </Grid>
          <FaqPage color="gold" est={true} />
        </Container>
      </MKBox>
    </>
  );
}

export default EstTeam;
