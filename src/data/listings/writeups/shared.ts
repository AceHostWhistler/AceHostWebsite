/** Shared AceHost stay lists. Always customize included items per property. */

export const ACEHOST_STAY_CLOSING =
  "If you need something else, let us know and we will arrange it. Optional third-party services are charged separately unless specifically stated as included with your reservation.";

export const ACEHOST_VIP_CONCIERGE_NOTE =
  "Complimentary AceHost VIP concierge planning is included with every stay. Our local Whistler team is available to help make your trip seamless, from restaurant reservations and local recommendations to coordinating private chefs, airport transfers, private drivers, grocery pre-stocking, ski and snowboard rentals, instructors, childcare, in-home massage, snowmobiling, helicopter experiences and more.";

export const ACEHOST_SKI_PASS_NOTE =
  "Ski lift pass booking and delivery: one of the perks of booking with AceHost is complimentary ski pass delivery directly to your door. We can arrange day passes, multi-day passes, season passes and more, helping you skip the ticket office, paperwork and extra stop upon arrival. Please reach out to us before purchasing your passes, as the booking will need to be made through our team in order for us to arrange delivery. We are happy to guide you through the process and make it as easy as possible.";

export const ACEHOST_REACH_OUT_NOTE =
  "Please don't hesitate to reach out if you need anything.";

export const ACEHOST_REQUEST_WINTER = [
  "Airport transfers",
  "Private chef",
  "Private driver",
  "In-home massage",
  "Ski and snowboard rental delivery",
  "Childcare",
  "Ski instructors",
  "Helicopter and snowmobile experiences",
];

export const ACEHOST_REQUEST_GENERAL = [
  "Airport transfers",
  "Private chef",
  "Private driver",
  "In-home massage",
  "Childcare",
  "Private experiences and itinerary planning",
];

export const ACEHOST_INCLUDED_CORE = [
  "AceHost VIP concierge",
  "Restaurant reservations and recommendations",
  "Pre-arrival food and beverage stocking coordination",
];

export const ACEHOST_INCLUDED_SKI = [
  "AceHost VIP concierge",
  "Restaurant reservations and recommendations",
  "Ski lift pass ordering and delivery",
  "Pre-arrival food and beverage stocking coordination",
];

export const KADENWOOD_LOCATION_PARAGRAPHS = [
  "Sitting almost 1,000 feet above the valley floor, Kadenwood is one of Whistler's most exclusive ski-in/ski-out neighbourhoods. Set high above Creekside on Whistler Mountain, it offers incredible privacy, old-growth forest, beautiful mountain views and access to the private Kadenwood Gondola for residents and guests.",
  "The private gondola connects Kadenwood directly with Creekside Village in approximately five minutes. Creekside can also be reached by a short drive or, during ski season, directly from the mountain.",
  "For skiers, Creekside is an excellent place to start the day. While many visitors naturally begin from the main Whistler Village base, Creekside provides direct access to Whistler Mountain without needing to travel into the Village each morning. The upgraded 10-person Creekside Gondola increased out-of-base capacity by approximately 35%, while the upgraded Big Red Express increased uphill capacity by approximately 30%, helping improve mountain access and wait times.",
  "Creekside Village has everything needed close to home, including Creekside Market for groceries and some of Whistler's favourite restaurants and cafes, including Red Door Bistro, Rimrock Café, Creekbread, Dusty's, BReD and Rockit Coffee.",
  "Whistler Village is approximately a 10-minute drive away, giving guests easy access to the main Village while enjoying the privacy and peaceful mountain setting of Kadenwood.",
];

export function acehostStay(options: {
  included: string[];
  request?: string[];
  closing?: string;
}) {
  return {
    title: "Included with your stay",
    includedTitle: "Included",
    included: options.included,
    requestTitle: "Available on request",
    request: options.request ?? ACEHOST_REQUEST_WINTER,
    closing: options.closing ?? ACEHOST_STAY_CLOSING,
  };
}
