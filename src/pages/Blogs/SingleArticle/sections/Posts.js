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
import MKTypography from "components/MKTypography";

// Otis Kit PRO examples
import DefaultBlogCard from "examples/Cards/BlogCards/DefaultBlogCard";

// Images
import post1 from "assets/images/examples/color2.jpg";
import post2 from "assets/images/examples/color3.jpg";
import post3 from "assets/images/examples/color1.jpg";
import author1 from "assets/images/team-2.jpg";
import author2 from "assets/images/ivana-squares.jpg";
import author3 from "assets/images/marie.jpg";

function Posts() {
  return (
    <MKBox component="section" py={7}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={9} textAlign="center" mx="auto">
            <MKTypography variant="h3" mb={0.5}>
              See other articles
            </MKTypography>
            <MKTypography variant="body2" color="text" px={{ xs: 0, md: 6 }} mb={4}>
              Create a unique and beautiful blog posts. You can also connect your blog directly to
              Google Analytics to have a more detailed look.
            </MKTypography>
          </Grid>
          <Grid item xs={12} lg={4} mb={{ xs: 3, lg: 0 }}>
            <DefaultBlogCard
              image={post1}
              category={{ color: "primary", label: "house" }}
              title="Shared Coworking"
              description="Use border utilities to quickly style the border and border-radius of an element. Great for images, buttons."
              author={{
                image: author1,
                name: "Mathew Glock",
                date: "Posted on 28 February",
              }}
              action={{ type: "internal", route: "/pages/blogs/single-article" }}
            />
          </Grid>
          <Grid item xs={12} lg={4} mb={{ xs: 3, lg: 0 }}>
            <DefaultBlogCard
              image={post2}
              category={{ color: "info", label: "house" }}
              title="Really Housekeeping"
              description="Use border utilities to quickly style the border and border-radius of an element. Great for images, buttons."
              author={{
                image: author2,
                name: "Mathew Glock",
                date: "Posted on 28 February",
              }}
              action={{ type: "internal", route: "/pages/blogs/single-article" }}
            />
          </Grid>
          <Grid item xs={12} lg={4} mb={{ xs: 3, lg: 0 }}>
            <DefaultBlogCard
              image={post3}
              category={{ color: "warning", label: "house" }}
              title="Shared Coworking"
              description="Use border utilities to quickly style the border and border-radius of an element. Great for images, buttons."
              author={{
                image: author3,
                name: "Mathew Glock",
                date: "Posted on 28 February",
              }}
              action={{ type: "internal", route: "/pages/blogs/single-article" }}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Posts;
