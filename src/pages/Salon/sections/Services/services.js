const services = [
  {
    title: "Facials",
    categoryId: 1,
    services: [
      {
        title: "Express Facial - $60.00",
        content:
          "Indulge in rapid rejuvenation with our convenient skincare package designed for your busy lifestyle. Includes dual cleanse, mild exfoliation, subtle extraction, and a personalized facial mask.",
        id: 1,
      },
      {
        title: "Tranquility Facial - $85.00",
        content:
          "A luxurious 60-minute treatment featuring a double cleanse, facial massage, exfoliation, and a tailored mask for ultimate skin revitalization.",
        id: 2,
      },
      {
        title: "Refresh & Renew - $105.00",
        content:
          "A 75-minute treatment with enzyme peel, hydration, and rejuvenation for refreshed and radiant skin.",
        id: 3,
      },
      {
        title: "Signature Facial - $125.00",
        content:
          "The ultimate 90-minute pampering session with added essential oils, increased massage time, and a Hydrojelly Mask.",
        id: 4,
      },
    ],
  },
  {
    title: "Lashes",
    categoryId: 2,
    services: [
      {
        title: "Lash Lift - $75.00",
        content:
          "Semi-permanent lash transformation that amplifies natural beauty by lifting lashes from the root.",
        id: 5,
      },
      {
        title: "Lash Tint - $35.00",
        content: "Darkens and accentuates natural lashes for a defined look.",
        id: 6,
      },
      {
        title: "Lash Lift & Tint - $95.00",
        content:
          "Combines lash lift and tint for a captivating and defined look.",
        id: 7,
      },
    ],
  },
  {
    title: "Brows",
    categoryId: 3,
    services: [
      {
        title: "Brow Lamination - $55.00",
        content:
          "Refines and sculpts natural brows for a feathered, brushed-up effect.",
        id: 8,
      },
      {
        title: "Brow Tint - $35.00",
        content:
          "Defines eyebrows by skillfully darkening and enhancing their natural beauty.",
        id: 9,
      },
      {
        title: "Brow Lamination & Tint - $75.00",
        content:
          "Combines lamination and tint for perfectly groomed and enhanced eyebrows.",
        id: 10,
      },
    ],
  },
  {
    title: "Waxing",
    categoryId: 4,
    services: [
      {
        title: "Nose - $15.00",
        content:
          "Effectively remove nose hair with our precise 15-minute waxing service.",
        id: 11,
      },
      {
        title: "Eyebrow - $25.00",
        content:
          "Achieve ideal, precise brows in just 30 minutes with our efficient eyebrow waxing.",
        id: 12,
      },
      {
        title: "Upper Lip - $15.00",
        content:
          "Quickly remove unwanted upper lip hair with our efficient 15-minute waxing service.",
        id: 13,
      },
    ],
  },
  {
    title: "Haircuts",
    categoryId: 5,
    services: [
      {
        title: "Men's Basic Cut - Starting at $30.00",
        content:
          "Whether you’re after a simple trim or a fresh new style, this service provides a precise, professional cut tailored to your preferences with great attention to detail. Please note: this service does not include a wash.",
        id: 14,
      },
      {
        title: "Women's Cut - Starting at $45.00",
        content:
          "This service includes a revitalizing wash and precision cut designed to enhance your look. Whether you’re opting for basic shaping or a bold new style, you’ll leave feeling refreshed and confident.",
        id: 15,
      },
      {
        title: "Bang Trim - Starting at $15.00",
        content:
          "Shapes and refreshes your bangs to your desired length, ensuring a neat and stylish look between full haircuts. Please note: this service does not include wash, or styling.",
        id: 16,
      },
    ],
  },
  {
    title: "Texture, Volume, and Scalp",
    categoryId: 6,
    services: [
      {
        title: "Shampoo Service - Starting at $15.00",
        content:
          "Provides a relaxing and rejuvenating experience, using high-quality products tailored to your hair type. Enjoy a gentle scalp massage while we cleanse and nourish your hair, leaving it soft, shiny, and revitalized.",
        id: 17,
      },
      {
        title: "Hair & Scalp Treatment - Starting at $50.00",
        content:
          "Revitalizes and nourishes your hair while promoting a healthy scalp. This specialized treatment targets dryness, irritation, and damage to restore shine and vitality.",
        id: 18,
      },
    ],
  },
  {
    title: "Hair Coloring",
    categoryId: 7,
    services: [
      {
        title: "Color Basic",
        content:
          "Features a carefully curated selection of essential colors with high-quality pigments, delivering vibrant, consistent, and professional results.",
        id: 19,
      },
      {
        title: "Color Custom Made",
        content:
          "Offers personalized color solutions designed to meet your unique needs and preferences. Our expert stylist collaborates with you to craft a distinctive and customized look, ensuring a stunning finish that’s truly your own.",
        id: 20,
      },
      {
        title: "Specialty Highlight",
        content:
          "Experience a unique approach to hair highlighting with specialized techniques that deliver stunning, head-turning results. Perfect for adding dimension and flair, this service enhances your natural beauty with customized color solutions tailored to your style.",
        id: 21,
      },
    ],
  },
  {
    title: "Style & Special Occasions",
    categoryId: 8,
    services: [
      {
        title: "Women's Wash & Basic Style - Starting at $30.00",
        content:
          "A revitalizing hair wash designed specifically for women, ensuring clean, refreshed, and vibrant hair. This service includes basic styling to enhance your natural beauty, leaving you polished and ready for any occasion. Please note: this service does not include a haircut.",
        id: 22,
      },
      {
        title: "Women's Wash & Formal Style - Starting at $60.00",
        content:
          "This service provides a refreshing hair wash, leaving your hair clean and rejuvenated. It also includes professional styling designed to perfectly complement formal attire, making it ideal for dances, weddings, or other special events. Please note: this service does not include a haircut.",
        id: 23,
      },
    ],
  },
  {
    title: "Barber",
    categoryId: 9,
    services: [
      {
        title: "Design / Artistic Cut - Starting at $20.00",
        content:
          "This service is where creativity meets precision in hairstyling. Our skilled stylist will craft a personalized look that reflects your individual style and makes a bold statement.",
        id: 24,
      },
      {
        title: "Head Shave - Starting at $25.00",
        content:
          "Experience a clean and smooth head shave that enhances your look and provides a refreshing feel. Our skilled barber uses high-quality products to ensure a comfortable and precise shave tailored to your preferences.",
        id: 25,
      },
      {
        title: "Line-Up - Starting at $20.00",
        content:
          "Precision grooming service that focuses on creating clean, sharp edges along the hairline, beard, and sideburns. Using clippers or trimmers, the barber defines and refines the natural hairline, enhancing the overall haircut with crisp, symmetrical lines. This service is ideal for maintaining a polished and fresh appearance between full haircuts.",
        id: 26,
      },
      {
        title: "Beard Trim - Starting at $15.00",
        content:
          "A beard trim is a grooming service that shapes and refines your facial hair to keep it neat and tidy. The barber or stylist carefully trims your beard to your desired length and shape, removing excess length or stray hairs, while maintaining the natural contours of your face. This service helps define your beard, giving it a clean, polished look.",
        id: 27,
      },
      {
        title: "Hot Towel Shave - Starting at $35.00",
        content:
          "Experience the ultimate relaxation with our Hot Towel Shave, where warm towels and premium shaving products combine for a smooth, close shave. Perfect for those seeking a luxurious grooming experience, this service leaves your skin feeling refreshed and revitalized.",
        id: 28,
      },
      {
        title: "Eyebrow Grooming - Starting at $15.00",
        content:
          "The barber trims and removes any stray hairs (if preferred) to create a clean, defined look that complements your face. This service ensures your brows are neat and well-groomed without over-shaping.",
        id: 29,
      },
    ],
  },
  {
    title: "Hands and Feet",
    categoryId: 10,
    services: [
      {
        title: "Coming Soon",
        content: "We promise!",
        id: 30,
      },
    ],
  },
];

export default services;
