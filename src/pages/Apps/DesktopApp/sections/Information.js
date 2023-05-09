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

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Otis Kit PRO components
import MKBox from "components/MKBox";

// Otis Kit PRO examples
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

function Information() {
  return (
    <MKBox component="section" py={3} mt={8}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <DefaultInfoCard
              color="warning"
              icon="grid_view"
              title="Components"
              description="We get insulted by others, lose trust for those we get back."
              direction="center"
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <DefaultInfoCard
              color="warning"
              icon="textsms"
              title="Mix & Match"
              description="We get insulted by others, lose trust for those we get back."
              direction="center"
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <DefaultInfoCard
              color="warning"
              icon="palette"
              title="Design"
              description="We get insulted by others, lose trust for those we get back."
              direction="center"
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <DefaultInfoCard
              color="warning"
              icon="card_giftcard"
              title="Payment"
              description="We get insulted by others, lose trust for those we get back."
              direction="center"
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
