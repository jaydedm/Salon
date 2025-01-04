import { useState } from "react";

import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

import FaqCategoryCollapse from "components/FaqCategoryCollapse";
import FaqCollapse from "components/FaqCollapse";
import routes from "salonRoutes";
import DefaultNavbar from "../DefaultNavbar";
import services from "./services";

function SalonServices() {
  const [activeCollapse, setActiveCollapse] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);

  const toggleCategory = (category) => {
    setActiveCategory((prevCategory) =>
      prevCategory === category ? null : category
    );
    setActiveCollapse(null);
  };

  const toggleCollapse = (collapseId) => {
    setActiveCollapse((prevCollapse) =>
      prevCollapse === collapseId ? null : collapseId
    );
  };

  return (
    <>
      <DefaultNavbar
        sx={{ background: "purple" }}
        routes={routes}
        action={{
          type: "external",
          route:
            "https://www.vagaro.com//Users/BusinessWidget.aspx?enc=MMLjhIwJMcwFQhXLL7ifVLI82XKP4EgxOtbbrGbm4jZjcWdYw9IzYcvzEFqLd4lj0+FJ687rN1J1l6DFrUqPjprYVemBRnMBGTkiMHY5xHAdeisLuoe9bZgs+39Q1Q8aFzujirrQeEHm1ommxMF5/BAGrSS+Qq88odv8EY03uHlZx+faOFh2vxiSbea8VjxX15+7SlUMDz4oHDdrvif/h8awqX8cIKg0AdOjtf8p8h4/iJ7D6hN7nV84OcXARVPSQXitjAO2UshlnIjo8hSLM1iDGqkMBnug+fi7ieQtsYTz4s3CGzVwyKk+4voguWJEVq/dBh13Tph6mc6/5hgtoiUeJ736frDCxVRuEQ0EO4dOJ7K9tsqkIr53UIqcSLc4",
          label: "Book Now",
          color: "default",
        }}
        dark
      />
      <MKBox component="section" pt={10} pb={12}>
        <Container sx={{ mb: 8 }}></Container>
        <Container>
          <Grid container justifyContent="center">
            <Grid item xs={12}>
              <Card>
                <MKBox
                  variant="gradient"
                  bgColor="info"
                  borderRadius="lg"
                  coloredShadow="info"
                  p={3}
                  mt={-3}
                  mx={2}
                >
                  <MKTypography variant="h3" color="white">
                    Salon Services
                  </MKTypography>
                </MKBox>
                <MKBox p={6}>
                  {services.map((category) => (
                    <FaqCategoryCollapse
                      key={category.categoryId}
                      title={category.title}
                      open={activeCategory === category.categoryId}
                      onClick={() => toggleCategory(category.categoryId)}
                    >
                      {category.services.map((service) => (
                        <FaqCollapse
                          key={service.id}
                          title={service.title}
                          open={activeCollapse === service.id}
                          onClick={() => toggleCollapse(service.id)}
                        >
                          {service.content}
                        </FaqCollapse>
                      ))}
                    </FaqCategoryCollapse>
                  ))}
                </MKBox>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </MKBox>
    </>
  );
}

export default SalonServices;
