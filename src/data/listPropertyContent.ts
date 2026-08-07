import type { FaqItem } from "@/lib/seo/schema";

export const LIST_PROPERTY_CANONICAL = "https://www.acehost.ca/list-property";

export const ACEHOST_AIRBNB_PROFILE_URL =
  "https://www.airbnb.ca/users/show/425922828";

export const HERO_SERVICE_STRIP = [
  "Daily Pricing",
  "Luxury Marketing",
  "Airbnb & Vrbo",
  "Guest Management",
  "Property Care",
  "VIP Concierge",
  "Owner Reporting",
];

export const TRUST_STATS = [
  { value: "4.92", label: "Guest Rating on Airbnb", airbnbAccent: true },
  { value: "900+", label: "Guest Airbnb Reviews", airbnbAccent: true },
  { value: "Superhost", label: "Airbnb Status", airbnbAccent: true },
  { value: "Premier Host", label: "Vrbo Status", vrboAccent: true },
  { value: "Local", label: "Whistler Team" },
];

export interface OwnerBenefitCard {
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
}

export const OWNER_BENEFIT_CARDS: OwnerBenefitCard[] = [
  {
    title: "Revenue Management",
    description:
      "Our team continually adjusts nightly rates based on demand, seasonality, events, booking pace, lead time, and market conditions to maximize both occupancy and revenue.",
  },
  {
    title: "Marketing & Distribution",
    description:
      "We market your property across major booking platforms, AceHost.ca, Google, social media, returning guests, direct-booking channels, and luxury travel-agent relationships.",
  },
  {
    title: "Guest Experience",
    description:
      "From the initial inquiry through checkout, our team manages guest communication, arrival support, in-stay assistance, and every detail of the guest experience.",
  },
  {
    title: "Property Care",
    description:
      "Professional housekeeping, inspections, maintenance coordination, inventory management, and regular property checks help keep your home performing at its best.",
  },
  {
    title: "VIP Concierge",
    description:
      "Our concierge services attract higher-end travelers through private chefs, butlers, drivers, ski experiences, luxury transportation, and personalized trip planning.",
  },
  {
    title: "Owner Experience",
    description:
      "Transparent reporting, flexible owner use, responsive communication, and a local Whistler team make owning a vacation rental genuinely hands-off.",
  },
];

export const HOW_IT_WORKS_STEPS = [
  {
    number: "01",
    title: "Tell Us About Your Property",
    description:
      "Send us the property address, listing link, or a few details about the home.",
  },
  {
    number: "02",
    title: "Receive Your Revenue Estimate",
    description:
      "We assess the property, neighbourhood, competition, amenities, and rental potential.",
  },
  {
    number: "03",
    title: "Meet & Prepare",
    description:
      "We'll tour the home and identify opportunities to improve presentation, amenities, guest experience, and revenue.",
  },
  {
    number: "04",
    title: "We Take It From Here",
    description:
      "AceHost manages photography, listings, pricing, guests, housekeeping, maintenance coordination, and owner reporting.",
  },
];

export const REVENUE_VALUE_COLUMNS = [
  {
    title: "Higher Nightly Rates",
    description:
      "Professional presentation, strategic revenue management, strong reviews, and luxury positioning can allow exceptional homes to command premium nightly rates.",
  },
  {
    title: "More Booking Channels",
    description:
      "We combine Airbnb, Vrbo, Booking.com, Expedia, AceHost.ca, direct bookings, repeat guests, Google visibility, social media, and travel-agent relationships.",
  },
  {
    title: "Long-Term Property Value",
    description:
      "We help owners identify furnishing, amenity, renovation, and presentation improvements that can increase rental performance and strengthen the property's appeal to future buyers.",
  },
];

export const SHOWCASE_PROPERTY_IDS = [
  "two-cedars",
  "chalet-la-forja",
  "panoramic-estate",
  "timber-haven-luxury-ski-in-ski-out-kadenwood",
  "heron-views-whistler",
  "luxury-ski-in-ski-out-7-bedroom-kadenwood",
];

export const SHOWCASE_CONDO_PROPERTY_IDS = [
  "luxe-5-bed-scandinave-retreat",
  "whistler-village-penthouse-3-bdr",
  "luxury-6-bedroom-blueberry",
  "valhalla-unit-33-village",
  "luxury-3-bed-stunning-views",
  "marquise-2-bed",
];

export const BOOKING_PLATFORMS = [
  "Airbnb",
  "Vrbo",
  "Booking.com",
  "Expedia",
  "AceHost.ca",
];

export const MARKETING_CHANNELS = [
  "Direct Guests",
  "Returning Guests",
  "Luxury Travel Agents",
  "Google Search",
  "Social Media",
];

export const LIST_PROPERTY_TESTIMONIALS = [
  {
    name: "Saul K.",
    role: "Property Owner",
    text: "AceHost has done a great job managing my Whistler rentals for the past two years. I would recommend them to anyone needing rental management in the Whistler area.",
    date: "38 weeks ago",
  },
  {
    name: "Brad Schwartzberg",
    role: "Guest at Chalet La Forja",
    text: "We stayed at Chalet La Forja in Kadenwood. The property was magnificent, but the around-the-clock service provided by AceHost was even better. There was literally not one single thing that we asked for that they did not provide.",
    date: "35 weeks ago",
  },
  {
    name: "Mike Farquhar",
    role: "Guest at Chalet La Forja",
    text: "What truly made our experience exceptional was the AceHost team. From the moment we booked, Max, Ben, and Emma provided outstanding support. Their communication was prompt, helpful, and always professional.",
    date: "2 weeks ago",
  },
  {
    name: "Clifford Baughn",
    role: "Guest at Chalet La Forja",
    text: "As a retired U.S. Marine, I am not inclined to heap an exorbitant amount of praise on someone for just doing their job, but I must make an exception in the case of Ben and his team (Ben, Max, Marta, Emma and Stevie). From the time we booked until the time we left for home, Ben and his team were there for us. Their communication was outstanding, every question was answered promptly, and every detail was handled professionally. They made us feel like valued guests rather than just another reservation. Chalet La Forja was amazing — the house was spotless, beautifully maintained, and had everything our party of 12 needed for a comfortable stay.",
    date: "6 weeks ago",
  },
  {
    name: "Maryam Sarmadi",
    role: "Guest at Bluffs",
    text: "I was very satisfied with my stay at Bluffs — Luxury 2 Bed Ski in Ski out at Whistler. Since this was my first trip traveling with my three-month-old baby, having a comfortable and stress-free experience meant a lot to me. Everything was extremely clean and exactly as described. The villa was very well equipped, especially the kitchen amenities, and the view was absolutely stunning. Ben was incredibly responsive, and we sincerely hope to stay here again.",
    date: "6 weeks ago",
  },
  {
    name: "Mark Leyser",
    role: "Guest",
    text: "I rarely write reviews but AceHost Whistler deserves one. We were sourcing two homes for an artist and crew coming into town and Ben + Max absolutely nailed it. The level of care here was seriously impressive — late night grocery runs, wine deliveries, chefs, bartenders, airport transfers, and help with bags and logistics the whole way through. Felt way more like having a private concierge team than a rental company.",
    date: "13 weeks ago",
  },
  {
    name: "Paulina",
    role: "Guest at Timber Haven",
    text: "Ben is an exceptional host! His attention and hospitality were 10000/10. He helped us with everything from the very beginning and was always quick to respond. The house is an absolute WOW and worth every single penny. It's even more incredible in person. Having a cup of coffee on the terrace was the perfect way to start the day. We would definitely stay here again and highly recommend it!",
    date: "1 day ago",
  },
  {
    name: "Mauricio",
    role: "Guest at The Mountaintop",
    text: "Ben was an outstanding host. His responsiveness was exceptional. We had an unexpected issue with another property we had rented and urgently needed a new place within hours. Ben made it happen seamlessly and accommodated us on very short notice. The house is absolutely perfect — exactly as described. It was impeccably clean, spacious, beautifully designed, and located in a fantastic private area with stunning views. The amenities were excellent, and everything felt brand new and truly luxurious. Although we may have been among the first guests to stay there, the home felt professionally managed and very well prepared, as if it had years of hosting experience. We would definitely stay here again without hesitation. Thank you so much, Ben!",
    date: "February 2026",
  },
  {
    name: "Jody L",
    role: "Property Owner",
    text: "AceHost Whistler vacation rentals aren't just dealing with luxury properties — they are a high-end management team as well. They have been managing our property with high standards, receiving 5-star both owner and guest reviews. As an owner, my rental returns and vacancy rates have been the best ever. Bonus: they use WhatsApp, which is a game changer for clients around the world.",
    date: "May 6, 2025",
  },
];

/** Full FAQ set — rendered in SSR-friendly markup for SEO */
export const LIST_PROPERTY_FAQS: FaqItem[] = [
  {
    question:
      "What makes AceHost different from other Airbnb property management companies in Whistler?",
    answer:
      "AceHost specializes exclusively in luxury vacation homes and high-end clientele. We don't just manage your listing, we elevate your property into a 5-star guest experience. Our white-glove service includes professional branding, curated guest experiences, luxury concierge services, and hands-on local support. With a strong reputation and global partnerships, we consistently outperform traditional property managers.",
  },
  {
    question: "How much does Whistler property management cost?",
    answer:
      "Our management fee structure is tailored to each property based on factors like location, size, and amenities. We typically work on a percentage of rental income. Contact us for a personalized rate quote and revenue estimate.",
  },
  {
    question: "What does AceHost's management fee include?",
    answer:
      "Our management fee covers listing optimization, guest communication, scheduling cleanings, managing check-ins, maintenance coordination, and monthly reporting. For high-end homes, we tailor services to include concierge planning, mid-stay housekeeping, and luxury amenity stocking upon request.",
  },
  {
    question: "Which booking platforms do you use?",
    answer:
      "We distribute properties across Airbnb, Vrbo, Booking.com, Expedia, AceHost.ca, direct booking channels, returning guests, and luxury travel-agent relationships — not a single platform alone.",
  },
  {
    question: "Can owners still use their property?",
    answer:
      "Yes. Depending on your preference, AceHost can adapt to owner calendars on a year-round basis, seasonally, or for select dates. We create a personally curated rental schedule that works for you and your family.",
  },
  {
    question: "How do you price the property?",
    answer:
      "Our team continually adjusts nightly rates based on demand, seasonality, events, booking pace, lead time, and market conditions. We assess competition, amenities, and neighbourhood positioning to maximize both occupancy and revenue.",
  },
  {
    question: "Who handles cleaning and maintenance?",
    answer:
      "AceHost supervises professional housekeeping teams and coordinates maintenance specialists. We inspect properties before guest arrival and after departure, and regularly visit homes to ensure everything is in working order.",
  },
  {
    question: "Do you manage Airbnb listings?",
    answer:
      "Yes. AceHost offers full-service Airbnb property management in Whistler, alongside Vrbo, Booking.com, Expedia, AceHost.ca, direct bookings, and travel-agent distribution.",
  },
  {
    question: "What areas of Whistler do you manage?",
    answer:
      "We manage luxury vacation rentals across Whistler, including Kadenwood, Blueberry Hill, Whistler Village, Creekside, Upper Village, and surrounding neighbourhoods. Send us your address and we can confirm zoning and fit.",
  },
  {
    question: "How much could my property earn?",
    answer:
      "Rental income depends on location, bedroom count, amenities, seasonality, and presentation. After reviewing your property, we provide a clear revenue estimate and outline how AceHost would market and manage the home.",
  },
  {
    question: "Can I rent my property with AceHost?",
    answer:
      "Yes, if your property is zoned for nightly rentals and meets our quality standards for luxury vacation rentals. We'll help you determine if your property qualifies during our initial consultation.",
  },
  {
    question:
      "Are AceHost luxury vacation rental homes in Whistler professionally cleaned and maintained?",
    answer:
      "Absolutely. We work with professional cleaning teams and property maintenance specialists to ensure every property is impeccably presented before each guest arrival and properly maintained throughout the year.",
  },
];

/** Supplemental SEO content preserved from the previous page */
export const SEO_SUPPLEMENT_SECTIONS = [
  {
    title: "The AceHost Team",
    description:
      "Our boutique and professional team has over 15 years of experience in luxury hospitality. AceHost's refined industry knowledge and high guest and homeowner retention rates set us apart from our competitors. After just under 4 years of business, we can confidently say that we are the fastest growing luxury vacation rental management company in Whistler.",
  },
  {
    title: "Listing & Marketing Strategies",
    description:
      "We are not your average Airbnb management company. Our elevated marketing strategies give homeowners access to additional exposure across Airbnb Superhost status, Vrbo Premier Host status, high-end travel-agent relationships, strong Google search visibility, returning guests, paid advertising at no cost to owners, social media, and referrals from locals and local businesses.",
  },
  {
    title: "Returning Guest Satisfaction",
    description:
      "Homeowners benefit from AceHost's portfolio of returning guests. Our services go above and beyond at no cost to travellers, ensuring that trusted customer base has consistently had their expectations exceeded. Referrals from past guests who have experienced AceHost hospitality contribute to our growing network of new customers.",
  },
  {
    title: "Hands-Off Homeowner Experience",
    description:
      "We reduce homeowner responsibilities by creating a hands-off rental experience where we take care of all aspects of guest accommodation. AceHost takes an individual approach with property check-ins, check-outs, sweeps for damage, and familiarizing guests with each home to ensure that their stay is comfortable.",
  },
  {
    title: "Rental Flexibility",
    description:
      "We understand that rental flexibility is important to homeowners. Depending on homeowner preference, AceHost can adapt to homeowner calendars on a year-round basis, seasonally, or for select dates.",
  },
  {
    title: "Property Care",
    description:
      "Property care is of utmost priority at AceHost. We carefully inspect all properties before guest arrival and after their departure. Under our supervision, our teams of professional housekeepers are committed to providing a high-quality standard of cleanliness.",
  },
  {
    title: "VIP Concierge Services",
    description:
      "Our luxury hospitality services offer a well curated stay for all guests, ensuring that their Whistler experience is comfortable and entertaining. Included concierge services help increase bookings and the likelihood of recurring bookings from past guests.",
  },
  {
    title: "Luxury Is Our Focus",
    description:
      "We specialize in managing luxury homes in Whistler, from beautifully appointed condos to multi-million-dollar villas. Through full-service guest management, professional cleaning, and VIP Concierge services, we give homeowners confidence that their home and guests receive exceptional care. We also help homeowners transform promising properties into elevated luxury rentals through furnishings, design updates, amenities, and guest-experience improvements.",
  },
  {
    title: "Our Relationships",
    description:
      "Exceptional property management begins with trust. At AceHost, we build lasting relationships with Whistler homeowners through clear communication, complete transparency, and meticulous care for every property. Our experienced local team manages every detail, from pricing and guest services to maintenance and property care.",
  },
];
