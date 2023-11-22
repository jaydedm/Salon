import { useState } from 'react'

import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'

import MKBox from 'components/MKBox'
import MKTypography from 'components/MKTypography'

import routes from 'salonRoutes'
import DefaultNavbar from './DefaultNavbar'
import FaqCollapse from 'components/FaqCollapse'

function Services () {
  const [collapse, setCollapse] = useState(false)

  return (
    <>
      <DefaultNavbar
        sx={{ background: 'purple' }}
        routes={routes}
        action={{
          type: 'external',
          route:
            'https://www.vagaro.com//Users/BusinessWidget.aspx?enc=MMLjhIwJMcwFQhXLL7ifVLI82XKP4EgxOtbbrGbm4jZjcWdYw9IzYcvzEFqLd4lj0+FJ687rN1J1l6DFrUqPjprYVemBRnMBGTkiMHY5xHAdeisLuoe9bZgs+39Q1Q8aFzujirrQeEHm1ommxMF5/BAGrSS+Qq88odv8EY03uHlZx+faOFh2vxiSbea8VjxX15+7SlUMDz4oHDdrvif/h8awqX8cIKg0AdOjtf8p8h4/iJ7D6hN7nV84OcXARVPSQXitjAO2UshlnIjo8hSLM1iDGqkMBnug+fi7ieQtsYTz4s3CGzVwyKk+4voguWJEVq/dBh13Tph6mc6/5hgtoiUeJ736frDCxVRuEQ0EO4dOJ7K9tsqkIr53UIqcSLc4',
          label: 'Book Now',
          color: 'default'
        }}
        dark
      />
      <MKBox component="section" pt={10} pb={12}>
        <Container sx={{ mb: 8 }}>
        </Container>
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
                    Services
                  </MKTypography>
                </MKBox>
                <MKBox p={6}>
                  <MKTypography variant="h5" my={3}>
                    Facials
                  </MKTypography>
                  <FaqCollapse
                    title="Express Facial"
                    open={collapse === 1}
                    onClick={() => (collapse === 1 ? setCollapse(false) : setCollapse(1))}
                  >
                    Indulge in rapid rejuvenation with our convenient skincare package designed for your busy lifestyle.
                    <br></br>
                    <br></br>
                    In just 45 minutes, pamper yourself with a revitalizing dual cleanse, proceeded by a mild exfoliation, subtle extraction, and a personalized facial mask catering to your distinct skin needs. Concluding with enriching serum, dedicated eye and lip care, and safeguarding SPF shield.

                  </FaqCollapse>
                  <FaqCollapse
                    title="Tranquility Facial"
                    open={collapse === 2}
                    onClick={() => (collapse === 2 ? setCollapse(false) : setCollapse(2))}
                  >
                    Discover the ultimate experience to look and feel your best! Our comprehensive 60-minute treatment begins with a luxurious double cleanse, catering to your face, neck, and décolleté.
                    <br></br>
                    <br></br>
                    With expert hands and a soothing touch, you&apos;ll be transported to a realm of serenity with a 10-minute facial massage, releasing tension and promoting relaxation. The rejuvenating journey continues with exfoliation, impurity extractions, and a specially tailored mask, serum, eye and lip treatment, moisturizer, and SPF, all customized to suit your unique skin type.
                    <br></br>
                    <br></br>
                    Experience the revitalizing effects of this well-rounded treatment, leaving your skin nourished, radiant, and glowing with renewed vitality. Indulge in the care and attention you deserve during this personalized skincare experience.
                  </FaqCollapse>
                  <FaqCollapse
                    title="Refresh & Renew"
                    open={collapse === 3}
                    onClick={() => (collapse === 3 ? setCollapse(false) : setCollapse(3))}
                  >
                    Embark on a blissful journey of rejuvenation, with the foundation of this treatment being the Tranquility Facial.
                    <br></br>
                    <br></br>
                    Designed to refresh, re-texturize, and hydrate your skin, this 75-minute indulgence is enhanced with an enzyme peel, which replaces the traditional exfoliation step. An enzyme peel uses natural fruit enzymes to break down and dissolve dead skin cells on the surface of the skin.
                    <br></br>
                    <br></br>
                    Experience the harmonious blend of gentle exfoliation and deep hydration, leaving your skin feeling renewed and radiant.
                    <br></br>
                    <br></br>
                  </FaqCollapse>
                  <FaqCollapse
                    title="Signature Facial"
                    open={collapse === 4}
                    onClick={() => (collapse === 4 ? setCollapse(false) : setCollapse(4))}
                  >
                    Experience the ultimate pampering with our Tranquility Facial, the cornerstone of this exceptional 90-minute treatment, with added benefits of essential oils, increased facial massage time as well as a scalp massage.
                    <br></br>
                    <br></br>
                    To conclude this indulgent journey, luxuriate in the relaxation brought by the Esthemax Hydrojelly Mask, ensuring your skin receives the ultimate nourishment and hydration it deserves.
                    <br></br>
                    <br></br>
                    Unwind, rejuvenate, and bask in the transformative effects of this meticulously crafted experience. Reveal your radiant best as you embrace the revitalizing journey to a more youthful and vibrant complexion

                  </FaqCollapse>
                  <MKTypography variant="h5" mt={6} mb={3}>
                    Lashes
                  </MKTypography>
                  <FaqCollapse
                    title="Lash Lift"
                    open={collapse === 5}
                    onClick={() => (collapse === 5 ? setCollapse(false) : setCollapse(5))}
                  >
                    Experience the wonders of a semi-permanent lash transformation that amplifies your natural beauty.
                    <br></br>
                    <br></br>
                    By meticulously boosting your natural lashes from the root, we create a lifted and lengthened appearance that instantly enhances your gaze and opens up the eyes.
                    <br></br>
                    <br></br>
                    Unlike traditional eyelash curlers, the lash lift offers semi-permanent magic that can endure for several weeks, gracefully adapting to your natural lash growth cycle. 60 minutes
                  </FaqCollapse>
                  <FaqCollapse
                    title="Lash Tint"
                    open={collapse === 6}
                    onClick={() => (collapse === 6 ? setCollapse(false) : setCollapse(6))}
                  >
                    Elevate the allure of your natural lashes with a touch of enchantment, as we skillfully darken and accentuate your eyes for an intensified and defined look. 30 minutes
                  </FaqCollapse>
                  <FaqCollapse
                    title="Lash Lift & Tint"
                    open={collapse === 7}
                    onClick={() => (collapse === 7 ? setCollapse(false) : setCollapse(7))}
                  >
                    The ultimate enhancement for your lashes with our combined signature lash lift and tint treatment.
                    <br></br>
                    <br></br>
                    This experience is designed to elevate the allure of your natural lashes, creating a captivating and defined look that lasts. The lash lift and tint duo work synergistically to create a mesmerizing effect, leaving you with beautifully enhanced lashes that require minimal upkeep.
                    <br></br>
                    <br></br>
                    The results are semi-permanent, lasting for several weeks, ensuring you wake up to stunning lashes every day. 75 minutes
                  </FaqCollapse>
                  <MKTypography variant="h5" mt={6} mb={3}>
                    Brows
                  </MKTypography>
                  <FaqCollapse
                    title="Brow Lamination"
                    open={collapse === 8}
                    onClick={() => (collapse === 8 ? setCollapse(false) : setCollapse(8))}
                  >
                    Discover the transformative allure of a semi-permanent, non-invasive brow procedure that artfully adjusts and refines your natural brow pattern. Your brows are sculpted, allowing them to stay in place with a feathered, brushed-up effect that adds a touch of sophistication to your look.
                    <br></br>
                    <br></br>
                    Embrace the beauty of perfectly groomed brows that frame your eyes and elevate your entire appearance without the need for daily maintenance. 45 minutes
                  </FaqCollapse>
                  <FaqCollapse
                    title="Brow Tint"
                    open={collapse === 9}
                    onClick={() => (collapse === 9 ? setCollapse(false) : setCollapse(9))}
                  >
                    Experience brow intensification as we choose the shade to complement your hair and skin tone and skillfully darken and define your eyebrows, enhancing their natural beauty. 30 minutes
                  </FaqCollapse>
                  <FaqCollapse
                    title="Brow Lamination & Tint"
                    open={collapse === 10}
                    onClick={() => (collapse === 10 ? setCollapse(false) : setCollapse(10))}
                  >
                    The fusion of Brow Lamination and Tint offers a captivating transformation. Creating perfectly groomed and stunningly enhanced eyebrows that frame your eyes like never before along with a customized darkening of the brows which enhances definition, making your brows appear fuller and more alluring.
                    <br></br>
                    <br></br>
                    The experience is a true testament to the power of well-groomed eyebrows in enhancing your natural beauty. In just one visit, achieve an effortlessly chic and polished look that lasts for weeks, reducing the need for daily brow maintenance. 60 minutes
                  </FaqCollapse>
                  <MKTypography variant="h5" mt={6} mb={3}>
                    Waxing
                  </MKTypography>
                  <MKTypography variant="h6" mt={6} mb={3} sx={{ color: '#7b809a' }}>
                    Hair removal. Options are: Nose, Eyebrow, Upper Lip and Underarms
                  </MKTypography>
                </MKBox>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </MKBox>
    </>
  )
}

export default Services
