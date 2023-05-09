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
import Stack from "@mui/material/Stack";

// Otis Kit PRO components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";

function ButtonsSizes() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container justifyContent="center">
          <Stack direction="row" alignItems="center" spacing={1}>
            <MKButton color="info" size="small">
              small
            </MKButton>
            <MKButton color="info">default</MKButton>
            <MKButton color="info" size="large">
              large
            </MKButton>
          </Stack>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default ButtonsSizes;
