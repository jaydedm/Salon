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
import DefaultCounterCard from "examples/Cards/CounterCards/DefaultCounterCard";

function StatsThree() {
  return (
    <MKBox component="section" py={3}>
      <Container>
        <Grid container item xs={12} lg={9} sx={{ mx: "auto" }}>
          <Grid item xs={12} md={4}>
            <DefaultCounterCard
              color="warning"
              count={700}
              description="Of “high-performing” level are led by a certified project manager"
            />
          </Grid>
          <Grid item xs={12} md={4} display="flex">
            <DefaultCounterCard
              color="warning"
              count={1200}
              suffix="+"
              description="That meets quality standards required by our users"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <DefaultCounterCard
              color="warning"
              count={300}
              preffix=">"
              description="Actively engage team members that finishes on time"
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default StatsThree;
