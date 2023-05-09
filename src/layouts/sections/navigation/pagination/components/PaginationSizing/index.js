/* eslint-disable no-param-reassign */
/**
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
import Icon from "@mui/material/Icon";

// Otis Kit PRO components
import MKPagination from "components/MKPagination";

function PaginationSizing() {
  return (
    <Container sx={{ height: "100%" }}>
      <Grid container spacing={3} alignItems="center" mx="auto" height="100%">
        <Grid item xs={12}>
          <MKPagination size="small" placement="center">
            <MKPagination item>
              <Icon>keyboard_arrow_left</Icon>
            </MKPagination>
            <MKPagination item active>
              1
            </MKPagination>
            <MKPagination item>2</MKPagination>
            <MKPagination item>3</MKPagination>
            <MKPagination item>4</MKPagination>
            <MKPagination item>5</MKPagination>
            <MKPagination item>
              <Icon>keyboard_arrow_right</Icon>
            </MKPagination>
          </MKPagination>
        </Grid>
        <Grid item xs={12}>
          <MKPagination placement="center">
            <MKPagination item>
              <Icon>keyboard_arrow_left</Icon>
            </MKPagination>
            <MKPagination item active>
              1
            </MKPagination>
            <MKPagination item>2</MKPagination>
            <MKPagination item>3</MKPagination>
            <MKPagination item>4</MKPagination>
            <MKPagination item>5</MKPagination>
            <MKPagination item>
              <Icon>keyboard_arrow_right</Icon>
            </MKPagination>
          </MKPagination>
        </Grid>
        <Grid item xs={12}>
          <MKPagination size="large" placement="center">
            <MKPagination item>
              <Icon>keyboard_arrow_left</Icon>
            </MKPagination>
            <MKPagination item active>
              1
            </MKPagination>
            <MKPagination item>2</MKPagination>
            <MKPagination item>3</MKPagination>
            <MKPagination item>4</MKPagination>
            <MKPagination item>5</MKPagination>
            <MKPagination item>
              <Icon>keyboard_arrow_right</Icon>
            </MKPagination>
          </MKPagination>
        </Grid>
      </Grid>
    </Container>
  );
}

export default PaginationSizing;
