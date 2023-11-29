import { useState } from 'react'

import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'

import MKBox from 'components/MKBox'
import MKTypography from 'components/MKTypography'

import routes from 'salonRoutes'
import DefaultNavbar from '../DefaultNavbar'
import FaqCollapse from 'components/FaqCollapse'
import FaqCategoryCollapse from 'components/FaqCategoryCollapse'

function SalonServices () {
  const [collapse, setCollapse] = useState(false)
  const [categoryCollapse, setCategoryCollapse] = useState(false)

  const closeAll = () => {
    setCollapse(false)
    setCategoryCollapse(false)
  }

  const openNewCategory = (idx) => {
    closeAll()
    setCategoryCollapse(idx)
  }

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
                    Salon Services
                  </MKTypography>
                </MKBox>
                <MKBox p={6}>
                  <FaqCategoryCollapse title='Haircuts' open={categoryCollapse === 1} onClick={() => (categoryCollapse === 1 ? closeAll() : openNewCategory(1))} >
                    <FaqCollapse
                      title="Ladies & Gentlemen - Starting at $XXX.XX"
                      open={collapse === 1}
                      onClick={() => (collapse === 1 ? setCollapse(false) : setCollapse(1))}
                    >
                      Wash, Massage, Haircut & Style
                    </FaqCollapse>
                    <FaqCollapse
                      title="Ladies - Starting at $XXX.XX"
                      open={collapse === 2}
                      onClick={() => (collapse === 2 ? setCollapse(false) : setCollapse(2))}
                    >
                      Wash, Massage & Haircut (No Dry)
                    </FaqCollapse>
                  </FaqCategoryCollapse>
                  <FaqCategoryCollapse title='BlowDry' open={categoryCollapse === 2} onClick={() => (categoryCollapse === 2 ? setCategoryCollapse(false) : openNewCategory(2))} >
                    <FaqCollapse
                      title="Ladies - Starting at $XXX.XX"
                      open={collapse === 5}
                      onClick={() => (collapse === 5 ? setCollapse(false) : setCollapse(5))}
                    >
                      Wash, Massage & BlowDry
                    </FaqCollapse>
                    <FaqCollapse
                      title="Ladies - Starting at $XXX.XX"
                      open={collapse === 6}
                      onClick={() => (collapse === 6 ? setCollapse(false) : setCollapse(6))}
                    >
                      Wash, Massage & Updo
                    </FaqCollapse>
                  </FaqCategoryCollapse>
                  <FaqCategoryCollapse title='Hair Coloring' open={categoryCollapse === 3} onClick={() => (categoryCollapse === 3 ? setCategoryCollapse(false) : openNewCategory(3))} >
                    <FaqCollapse
                      title="Color Basic - Starting at $XXX.XX"
                      open={collapse === 8}
                      onClick={() => (collapse === 8 ? setCollapse(false) : setCollapse(8))}
                    >
                      Application of singular hair color
                    </FaqCollapse>
                    <FaqCollapse
                      title="Color Custom Made - Starting at $XXX.XX"
                      open={collapse === 9}
                      onClick={() => (collapse === 9 ? setCollapse(false) : setCollapse(9))}
                    >
                      Application of custom or multiple colors
                    </FaqCollapse>
                    <FaqCollapse
                      title="Balayage/Ombre - Starting at $XXX.XX"
                      open={collapse === 10}
                      onClick={() => (collapse === 10 ? setCollapse(false) : setCollapse(10))}
                    >
                      Artistic hair coloring techniques where color is applied in a freehand manner for a natural, gradient effect (Balayage) or a gradual transition from dark to light (Ombre).
                    </FaqCollapse>
                  </FaqCategoryCollapse>
                  <FaqCategoryCollapse title='HighLights and Lowlights - Foil Techniques' open={categoryCollapse === 4} onClick={() => (categoryCollapse === 4 ? setCategoryCollapse(false) : openNewCategory(4))} >
                      <FaqCollapse
                      title="Highlights and Lowlights - Starting at $XXX.XX"
                      open={collapse === 1001}
                      onClick={() => (collapse === 1001 ? setCollapse(false) : setCollapse(1001))}
                    >
                      1/2 Head (crown)
                    </FaqCollapse>
                    <FaqCollapse
                      title="Highlights and Lowlights - Starting at $XXX.XX"
                      open={collapse === 1002}
                      onClick={() => (collapse === 1002 ? setCollapse(false) : setCollapse(1002))}
                    >
                      ¾  Head
                    </FaqCollapse>
                    <FaqCollapse
                      title="Highlights and Lowlights - Starting at $XXX.XX"
                      open={collapse === 1003}
                      onClick={() => (collapse === 1003 ? setCollapse(false) : setCollapse(1003))}
                    >
                      Full Head
                    </FaqCollapse>
                    </FaqCategoryCollapse>
                  <FaqCategoryCollapse title='Texture, Volume, Scalp and Special Occasion' open={categoryCollapse === 5} onClick={() => (categoryCollapse === 5 ? setCategoryCollapse(false) : openNewCategory(5))} >
                    <FaqCollapse
                      title="Perms - Starting at $XXX.XX"
                      open={collapse === 13}
                      onClick={() => (collapse === 13 ? setCollapse(false) : setCollapse(13))}
                    >
                      Creating curls or waves in the hair using chemical treatments to add volume and texture.
                    </FaqCollapse>
                    <FaqCollapse
                      title="Hair Extensions - Starting at $XXX.XX"
                      open={collapse === 14}
                      onClick={() => (collapse === 14 ? setCollapse(false) : setCollapse(14))}
                    >
                      Adding length or volume to natural hair using either synthetic or natural hair extensions, providing versatility in styling
                    </FaqCollapse>
                    <FaqCollapse
                      title="Hair and Scalp Treatments - Starting at $XXX.XX"
                      open={collapse === 15}
                      onClick={() => (collapse === 15 ? setCollapse(false) : setCollapse(15))}
                    >
                      Specialized treatments to nourish and rejuvenate the hair and scalp, addressing issues such as dryness, damage, or dandruff.
                    </FaqCollapse>
                    <FaqCollapse
                      title="Bridal and Special Occasion Styling - Starting at $XXX.XX"
                      open={collapse === 16}
                      onClick={() => (collapse === 16 ? setCollapse(false) : setCollapse(16))}
                    >
                      Professional makeup services for various occasions, including natural looks, glamour, and special effects makeup.
                    </FaqCollapse>
                    <FaqCollapse
                      title="Makeup Application, Starting at $XXX.XX"
                      open={collapse === 17}
                      onClick={() => (collapse === 17 ? setCollapse(false) : setCollapse(17))}
                    >
                      ¾  Head
                    </FaqCollapse>
                    <FaqCollapse
                      title="Highlights and Lowlights - Starting at $XXX.XX"
                      open={collapse === 18}
                      onClick={() => (collapse === 18 ? setCollapse(false) : setCollapse(18))}
                    >
                      Full Head
                    </FaqCollapse>
                  </FaqCategoryCollapse>
                  <FaqCategoryCollapse title='Hands and Feet' open={categoryCollapse === 9} onClick={() => (categoryCollapse === 9 ? setCategoryCollapse(false) : openNewCategory(9))} >
                    <FaqCollapse
                      title="Manicure - Starting at $XXX.XX"
                      open={collapse === 19}
                      onClick={() => (collapse === 19 ? setCollapse(false) : setCollapse(19))}
                    >
                      Nail care services involving trimming, shaping, and polishing nails, along with cuticle care and moisturizing, providing well-groomed hands.
                    </FaqCollapse>
                    <FaqCollapse
                      title="Acrylic Nails - Full Set starting at $XXX.XX | Fill starting at $XXX.XXX"
                      open={collapse === 20}
                      onClick={() => (collapse === 20 ? setCollapse(false) : setCollapse(20))}
                    >
                      Durable and customizable acrylic extensions to enhance the strength and beauty of your natural nails. Choose from a variety of finishes and designs for a personalized and polished look.
                    </FaqCollapse>
                    <FaqCollapse
                      title="Gel Nails - Full Set starting at $XXX.XX | Fill starting at $XXX.XX"
                      open={collapse === 21}
                      onClick={() => (collapse === 21 ? setCollapse(false) : setCollapse(21))}
                    >
                      High-quality gel extensions to enhance the natural beauty of your nails. Choose from a variety of colors and finishes for a sleek and long-lasting look.
                    </FaqCollapse>
                    <FaqCollapse
                      title="Pedicure - Starting at $XXX.XX"
                      open={collapse === 22}
                      onClick={() => (collapse === 22 ? setCollapse(false) : setCollapse(22))}
                    >
                      Treat your feet to the ultimate relaxation with our luxurious pedicure. Unwind in a soothing foot soak, followed by nail care, shaping, and cuticle treatment. Our skilled technicians exfoliate and moisturize, leaving your feet soft and refreshed. Choose from a range of polish colors or enjoy a natural finish. Step out with rejuvenated and perfectly groomed feet, ready to make a statement.
                    </FaqCollapse>
                  </FaqCategoryCollapse>
                  <FaqCategoryCollapse title='Waxing' open={categoryCollapse === 6} onClick={() => (categoryCollapse === 6 ? setCategoryCollapse(false) : openNewCategory(6))} >
                    <FaqCollapse
                      title="Eyebrows and/or Upper Lip - Starting at $XXX.XX"
                      open={collapse === 23}
                      onClick={() => (collapse === 23 ? setCollapse(false) : setCollapse(23))}
                    >
                      Removal of unwanted hair using warm wax, leaving the skin smooth and hair-free for an extended period.
                    </FaqCollapse>
                  </FaqCategoryCollapse>
                  <FaqCategoryCollapse title='Barber' open={categoryCollapse === 7} onClick={() => (categoryCollapse === 7 ? setCategoryCollapse(false) : openNewCategory(7))} >
                    <FaqCollapse
                      title="Haircut - Starting at $XXX.XX"
                      open={collapse === 24}
                      onClick={() => (collapse === 24 ? setCollapse(false) : setCollapse(24))}
                    >
                      Precision cutting and styling tailored to your preferences, creating a personalized and polished look.
                    </FaqCollapse>
                    <FaqCollapse
                      title="Fade - Starting at $XXX.XX"
                      open={collapse === 25}
                      onClick={() => (collapse === 25 ? setCollapse(false) : setCollapse(25))}
                    >
                      A haircut that gradually transitions from short to longer hair, often achieving a seamless and stylish appearance.
                    </FaqCollapse>
                    <FaqCollapse
                      title="Buzz Cut - Starting at $XXX.XX"
                      open={collapse === 26}
                      onClick={() => (collapse === 26 ? setCollapse(false) : setCollapse(26))}
                    >
                      A short, uniform haircut achieved with clippers, providing a low-maintenance and neat appearance.
                    </FaqCollapse>
                    <FaqCollapse
                      title="Design/Artistic Cut - Starting at $XXX.XX"
                      open={collapse === 27}
                      onClick={() => (collapse === 27 ? setCollapse(false) : setCollapse(27))}
                    >
                      Precision cutting and styling tailored to your preferences, creating a personalized and polished look.
                    </FaqCollapse>
                    <FaqCollapse
                      title="Head Shave - Starting at $XXX.XX"
                      open={collapse === 28}
                      onClick={() => (collapse === 28 ? setCollapse(false) : setCollapse(28))}
                    >
                      Complete shaving of the head using clippers or a razor, providing a sleek and smooth finish.
                    </FaqCollapse>
                    <FaqCollapse
                      title="Line-Up - Starting at $XXX.XX"
                      open={collapse === 29}
                      onClick={() => (collapse === 29 ? setCollapse(false) : setCollapse(29))}
                    >
                      Precision outlining and shaping of the hairline, sideburns, and facial hair for a clean and defined look.
                    </FaqCollapse>
                    <FaqCollapse
                      title="Shampoo and Scalp Massage - Starting at $XXX.XX"
                      open={collapse === 30}
                      onClick={() => (collapse === 30 ? setCollapse(false) : setCollapse(30))}
                    >
                      Hair cleansing accompanied by a relaxing scalp massage, promoting a refreshed and invigorated feeling.
                    </FaqCollapse>
                    <FaqCollapse
                      title="Beard Trim - Starting at $XXX.XX"
                      open={collapse === 31}
                      onClick={() => (collapse === 31 ? setCollapse(false) : setCollapse(31))}
                    >
                      Shaping and grooming of facial hair, including trimming, edging, and detailing for a well-maintained beard.
                    </FaqCollapse>
                    <FaqCollapse
                      title="Hot Towel Shave - Starting at $XXX.XX"
                      open={collapse === 32}
                      onClick={() => (collapse === 32 ? setCollapse(false) : setCollapse(32))}
                    >
                      A classic grooming experience involving a warm, soothing towel to open pores, followed by a close and smooth straight razor shave.
                    </FaqCollapse>
                    <FaqCollapse
                      title="Facial Hair Coloring - Starting at $XXX.XX"
                      open={collapse === 33}
                      onClick={() => (collapse === 33 ? setCollapse(false) : setCollapse(33))}
                    >
                      Coloring or tinting of facial hair, such as the beard or mustache, to achieve a desired shade or cover grays.
                    </FaqCollapse>
                    <FaqCollapse
                      title="Hair and Scalp Treatment - Starting at $XXX.XX"
                      open={collapse === 34}
                      onClick={() => (collapse === 34 ? setCollapse(false) : setCollapse(34))}
                    >
                      Specialized treatments to nourish and rejuvenate the hair and scalp, addressing issues such as dryness or dandruff.
                    </FaqCollapse>
                    <FaqCollapse
                      title="Eyebrow Grooming - Starting at $XXX.XX"
                      open={collapse === 35}
                      onClick={() => (collapse === 35 ? setCollapse(false) : setCollapse(35))}
                    >
                      Shaping and grooming of eyebrows for a clean and well-defined appearance.
                    </FaqCollapse>
                    <FaqCollapse
                      title="Ear and Nose Hair Trimming - Starting at $XXX.XX"
                      open={collapse === 36}
                      onClick={() => (collapse === 36 ? setCollapse(false) : setCollapse(36))}
                    >
                      Removal or trimming of excess hair from the ears and nose for a neat and tidy look.
                    </FaqCollapse>
                  </FaqCategoryCollapse>
                  <FaqCategoryCollapse title='Kids' open={categoryCollapse === 8} onClick={() => (categoryCollapse === 8 ? setCategoryCollapse(false) : openNewCategory(8))} >
                    <FaqCollapse
                      title="Haircut - Starting at $XXX.XX"
                      open={collapse === 37}
                      onClick={() => (collapse === 37 ? setCollapse(false) : setCollapse(37))}
                    >
                      Gentle and kid-friendly haircut services tailored to the unique needs and preferences of young clients.
                    </FaqCollapse>
                  </FaqCategoryCollapse>
                </MKBox>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </MKBox>
    </>
  )
}

export default SalonServices
