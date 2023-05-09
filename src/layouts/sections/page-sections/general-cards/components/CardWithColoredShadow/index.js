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
import Grid from "@mui/material/Grid";

// Otis Kit PRO components
import MKBox from "components/MKBox";

// Otis Kit PRO examples
import TransparentBlogCard from "examples/Cards/BlogCards/TransparentBlogCard";

// Images
import image from "assets/images/products/product-1-min.jpg";

function CardWithColoredShadow() {
  return (
    <MKBox pt={6} pb={3} px={3}>
      <Grid container item xs={12} lg={6} sx={{ mx: "auto", px: { xs: 0, lg: 6 } }}>
        <TransparentBlogCard
          image={image}
          title="MateLabs mixes machine learning with IFTTT"
          description="If you’ve ever wanted to train a machine learning model and integrate it with IFTTT, you now can with ..."
          action={{
            type: "internal",
            route: "/sections/page-sections/general-cards",
            color: "info",
            label: "Read More",
          }}
        />
      </Grid>
    </MKBox>
  );
}

export default CardWithColoredShadow;
