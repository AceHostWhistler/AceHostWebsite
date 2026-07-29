export const SITE_URL = "https://acehost.ca";

export const businessInfo = {
  name: "AceHost",
  legalName: "AceHost Whistler",
  description:
    "Luxury Vacation Rental Properties in Whistler Canada | Property Management & VIP Concierge Services",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  email: "ben@acehost.ca",
  telephone: "+1-604-764-8919",
  address: {
    streetAddress: "4308 Main Street",
    addressLocality: "Whistler",
    addressRegion: "BC",
    postalCode: "V8E 1B2",
    addressCountry: "CA",
  },
  geo: {
    latitude: 50.1163,
    longitude: -122.9574,
  },
  openingHours: "Mo,Tu,We,Th,Fr,Sa,Su 09:00-21:00",
  areaServed: [
    "Whistler",
    "Pemberton",
    "Squamish",
    "Vancouver",
    "British Columbia",
    "Canada",
    "Mykonos",
    "Greece",
    "Cotswolds",
    "United Kingdom",
    "Punta Mita",
    "Mexico",
    "Phuket",
    "Thailand",
    "Santorini",
    "Hood River",
    "Oregon",
  ],
  sameAs: [
    "https://www.instagram.com/acehost_whistler/",
    "https://www.youtube.com/@acehost_Whistler/videos",
  ],
  twitterHandle: "@acehost_whistler",
} as const;
