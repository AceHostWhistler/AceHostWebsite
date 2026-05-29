import type { ListingData } from "../types";

const listing: ListingData = {
  slug: "snow-pine",
  photos: [
  "/photos/properties/Snowpine 3-bed Saul/01-2040 Karen Cres-01.jpg",
  "/photos/properties/Snowpine 3-bed Saul/02-2040 Karen Cres-02.jpg",
  "/photos/properties/Snowpine 3-bed Saul/03-2040 Karen Cres-03.jpg",
  "/photos/properties/Snowpine 3-bed Saul/04-2040 Karen Cres-04.jpg",
  "/photos/properties/Snowpine 3-bed Saul/05-2040 Karen Cres-05.jpg",
  "/photos/properties/Snowpine 3-bed Saul/06-2040 Karen Cres-06.jpg",
  "/photos/properties/Snowpine 3-bed Saul/07-2040 Karen Cres-07.jpg",
  "/photos/properties/Snowpine 3-bed Saul/08-2040 Karen Cres-08.jpg",
  "/photos/properties/Snowpine 3-bed Saul/09-2040 Karen Cres-09.jpg",
  "/photos/properties/Snowpine 3-bed Saul/10-2040 Karen Cres-10.jpg",
  "/photos/properties/Snowpine 3-bed Saul/11-2040 Karen Cres-11.jpg",
  "/photos/properties/Snowpine 3-bed Saul/12-2040 Karen Cres-12.jpg",
  "/photos/properties/Snowpine 3-bed Saul/13-2040 Karen Cres-13.jpg",
  "/photos/properties/Snowpine 3-bed Saul/14-2040 Karen Cres-14.jpg",
  "/photos/properties/Snowpine 3-bed Saul/15-2040 Karen Cres-15.jpg",
  "/photos/properties/Snowpine 3-bed Saul/16-2040 Karen Cres-16.jpg",
  "/photos/properties/Snowpine 3-bed Saul/17-2040 Karen Cres-17.jpg",
  "/photos/properties/Snowpine 3-bed Saul/18-2040 Karen Cres-18.jpg",
  "/photos/properties/Snowpine 3-bed Saul/19-2040 Karen Cres-19.jpg",
  "/photos/properties/Snowpine 3-bed Saul/20-2040 Karen Cres-20.jpg",
  "/photos/properties/Snowpine 3-bed Saul/21-2040 Karen Cres-21.jpg",
  "/photos/properties/Snowpine 3-bed Saul/22-2040 Karen Cres-22.jpg",
  "/photos/properties/Snowpine 3-bed Saul/23-2040 Karen Cres-23.jpg"
],
  seo: {
    title: "Snowpine | Creekside Modern Ski Chalet | AceHost",
    description: "Experience the perfect Whistler getaway at Snowpine. This modern ski chalet in Creekside features a hot tub, BBQ, and fire pit, just 7 min walk to gondola.",
  },
  header:   {
      "title": "Snow Pine | Creekside | Ski-in/Ski-out",
      "guests": 6,
      "bedrooms": 3,
      "bathrooms": 3.5,
      "priceRange": "Monthly Price Range: $10,000-$12,000"
  },
  galleryTitle: "Snowpine",
  photoAltPrefix: "Snowpine",
  structuredData: {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "Snowpine | Creekside Modern Ski Chalet",
    "image": "/photos/properties/Snowpine 3-bed Saul/01-2040 Karen Cres-01.jpg",
    "description": "This modern ski chalet in Creekside features a hot tub, BBQ, and fire pit, just 7 min walk to gondola.",
    "sku": "snowpine-creekside",
    "brand": {
      "@type": "Brand",
      "name": "AceHost"
    },
    "offers": {
      "@type": "AggregateOffer",
      "offerCount": 3,
      "lowPrice": 10000,
      "highPrice": 12000,
      "priceCurrency": "CAD",
      "availability": "https://schema.org/LimitedAvailability",
      "validFrom": "2024-01-01",
      "offers": [
        {
          "@type": "Offer",
          "name": "Monthly Rate",
          "price": 10000,
          "priceCurrency": "CAD",
          "availability": "https://schema.org/LimitedAvailability"
        },
        {
          "@type": "Offer",
          "name": "3-Month Rate",
          "price": 30000,
          "priceCurrency": "CAD",
          "availability": "https://schema.org/LimitedAvailability"
        },
        {
          "@type": "Offer",
          "name": "4-Month Rate",
          "price": 40000,
          "priceCurrency": "CAD",
          "availability": "https://schema.org/LimitedAvailability"
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "15"
    }
  },
};

export default listing;
