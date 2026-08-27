import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { BlogGuestyInlineBanner } from "@/components/blog/BlogGuestyBookingCtas";
import BlogRelatedArticles from "@/components/BlogRelatedArticles";
import { allArticles } from "@/utils/blogArticles";

const SLUG =
  "can-you-airbnb-your-whistler-home-zoning-licensing-nightly-rental-rules";
const CANONICAL_URL = `https://acehost.ca/post/${SLUG}`;
const HERO =
  "/photos/properties/3445-Heron-Place/68-3445 Heron Place 53-Edit.jpg";
const SUPPORTING_IMAGE =
  "/photos/properties/Luxury 6-Bedroom | Whistler Village | Blueberry/15 - 20251108 MM4P 01 0011.jpg";
const HERO_URL = `https://acehost.ca${encodeURI(HERO)}`;
const PUBLISH_DATE = "August 1, 2026";
const ISO_MOD = "2026-08-01T10:00:00-07:00";

const META = {
  title: "Whistler Airbnb Zoning & Licence Rules | AceHost",
  description:
    "Can you Airbnb a home in Whistler? Learn the zoning, RMOW business licence, provincial registration and covenant rules owners must check.",
};

const RELATED_LINKS = [
  "/post/is-owning-a-vacation-rental-in-whistler-worth-it-2026",
  "/post/self-managing-vs-hiring-a-whistler-property-manager-what-owners-need-to-know",
  "/post/best-airbnb-property-management-company-in-whistler",
];

const CHECKLIST_ITEMS = [
  "Search the exact civic address on the RMOW map.",
  "Confirm that the property's permitted uses include tourist or temporary accommodation.",
  "Review the registered title and any Phase 1, Phase 2 or other covenants.",
  "Review the strata bylaws and confirm the permitted rental arrangement.",
  "Investigate open building and plumbing permits.",
  "Apply for the correct RMOW tourist accommodation business licence.",
  "Register with the B.C. short-term rental registry.",
  "Display the required municipal and provincial numbers on platform listings.",
  "Confirm PST, MRDT, GST and income-tax responsibilities with an accountant.",
  "Arrange vacation-rental insurance, professional cleaning, maintenance and guest support.",
  "Build a professional listing with accurate photography, pricing and house information.",
  "Decide whether to self-manage or hire a local Whistler property manager.",
];

const FAQ_ITEMS = [
  {
    question: "Can every Whistler home be listed on Airbnb?",
    answer:
      "No. The exact property must be zoned to permit tourist or temporary accommodation. Residential-zoned homes and employee housing units cannot be marketed to tourists for any length of time.",
  },
  {
    question: "How do I check whether a Whistler property allows nightly rentals?",
    answer:
      "Search the exact address using the RMOW Whistler Map, review the zoning and permitted uses, and then check title covenants and strata requirements. Do not rely only on an MLS description or another nearby Airbnb listing.",
  },
  {
    question: "Do I need a business licence if I hire a property manager?",
    answer:
      "Whistler requires business licences for vacation rental properties. Confirm the exact licensing setup for your property and management arrangement with RMOW rather than assuming another company's licence covers the unit.",
  },
  {
    question: "Does the B.C. principal residence rule apply in Whistler?",
    answer:
      "As of April 2026, RMOW says the provincial principal residence requirement does not apply in Whistler. Local zoning, covenants, municipal licensing and provincial registration requirements still apply.",
  },
  {
    question: "What is the difference between Phase 1 and Phase 2 in Whistler?",
    answer:
      "Phase 1 rental pool covenants are generally more flexible about owner use and management arrangements. Phase 2 properties generally require participation in one integrated rental pool and place stricter limits on owner use. The exact covenant registered on title controls.",
  },
  {
    question:
      "Can I rent a residential-zoned Whistler home to tourists for 30 days or longer?",
    answer:
      "RMOW says tourist accommodation is not permitted in a residential-zoned property for any length of time. Renting a home to someone who uses it as a fixed residence is a different type of occupancy and should be structured appropriately.",
  },
  {
    question: "What is the penalty for operating an illegal nightly rental in Whistler?",
    answer:
      "RMOW states that an unlicensed tourist accommodation property may face fines of up to $3,000 per day. The municipality can also require platforms to remove the listing.",
  },
  {
    question:
      "Can AceHost tell me if a property is a good vacation rental investment?",
    answer:
      "AceHost can review the property from a rental-management and guest-demand perspective, provide a revenue estimate and help identify matters that should be confirmed. Official zoning and legal confirmation should come from RMOW and qualified professionals.",
  },
];

function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

function ZoningStepsGraphic() {
  const steps = [
    {
      n: "1",
      title: "Search exact address",
      body: "Use the RMOW Whistler Map with your civic address and turn on the Zoned for Nightly Rentals layer.",
    },
    {
      n: "2",
      title: "Review permitted uses",
      body: "Open the applicable zoning bylaw and confirm tourist or temporary accommodation is a permitted use.",
    },
    {
      n: "3",
      title: "Confirm covenants",
      body: "Review registered title, Phase 1 or Phase 2 rental pool covenants and strata bylaws.",
    },
  ];
  return (
    <div
      className="not-prose grid grid-cols-1 sm:grid-cols-3 gap-4 my-10"
      aria-label="Three-step zoning check"
    >
      {steps.map((step) => (
        <div
          key={step.n}
          className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
        >
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-900 text-sm font-semibold text-white mb-3">
            {step.n}
          </span>
          <h3 className="text-base font-semibold text-gray-900 mb-2">
            {step.title}
          </h3>
          <p className="text-sm text-gray-700 leading-relaxed">{step.body}</p>
        </div>
      ))}
    </div>
  );
}

export default function BlogPost() {
  const currentArticleLink = `/post/${SLUG}`;
  const relatedArticles = RELATED_LINKS.map((link) =>
    allArticles.find((a) => a.link === link)
  ).filter((a): a is (typeof allArticles)[number] => Boolean(a));

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <>
      <Head>
        <title>{META.title}</title>
        <meta name="description" content={META.description} />
        <link rel="canonical" href={CANONICAL_URL} />
        <meta property="og:title" content={META.title} />
        <meta property="og:description" content={META.description} />
        <meta property="og:image" content={HERO_URL} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={CANONICAL_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={META.title} />
        <meta name="twitter:description" content={META.description} />
        <meta name="twitter:image" content={HERO_URL} />
        <meta
          name="keywords"
          content="Whistler Airbnb zoning, Whistler nightly rental zoning, Whistler tourist accommodation licence, Whistler short-term rental rules, Phase 1 Phase 2 Whistler, AceHost property management Whistler"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqStructuredData),
          }}
        />
      </Head>

      <div className="min-h-screen bg-white">
        <Navigation transparent={false} />

        <main className="pt-24 pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full mb-4">
                Property Management, Whistler
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Can You Airbnb Your Whistler Home? Zoning, Licensing and Nightly
                Rental Rules Explained
              </h1>
              <div className="flex flex-wrap items-center text-sm text-gray-600 mb-8 gap-x-4">
                <span>Published: {PUBLISH_DATE}</span>
                <span className="hidden sm:inline" aria-hidden>
                  |
                </span>
                <span>12 min read</span>
              </div>
              <div className="relative w-full aspect-[16/9] mb-8 rounded-xl overflow-hidden">
                <Image
                  src={HERO}
                  alt="Luxury Whistler vacation rental home managed by AceHost"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 896px"
                />
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-800 leading-relaxed">
                Whistler can be an exceptional place to own a vacation rental. It
                is a globally recognized destination with strong winter demand, a
                busy summer season and travellers arriving from around the world.
              </p>
              <p>
                However, owning a home in Whistler does not automatically mean you
                can list it on Airbnb, VRBO or another short-term rental platform.
              </p>
              <p>
                Whistler has specific rules governing tourist accommodation. The
                exact property, unit, zoning, registered covenants and licensing
                status all matter. Two homes located only a few minutes apart can
                have completely different rental permissions.
              </p>
              <p>
                If you are thinking about buying a Whistler investment property,
                renting your existing home or changing property managers, this guide
                explains the main checks you should complete before accepting nightly
                bookings.
              </p>

              <div
                className="bg-blue-50 border-l-4 border-blue-700 rounded-r-xl p-6 my-8 not-prose shadow-sm"
                role="group"
                aria-label="Short answer"
              >
                <p className="text-sm font-semibold uppercase tracking-wide text-blue-900 mb-2">
                  The short answer
                </p>
                <p className="text-gray-900 leading-relaxed m-0">
                  You can Airbnb a Whistler property only when its zoning permits
                  tourist or temporary accommodation, any registered covenants allow
                  the intended use, the required RMOW business licence is in place
                  and the property is registered with the provincial short-term
                  rental registry.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 not-prose">
                1. Start with the exact property&apos;s zoning
              </h2>
              <p>
                The first question is not whether other homes in the neighbourhood
                are listed on Airbnb. The first question is whether the zoning for
                your exact property or unit permits tourist accommodation.
              </p>
              <p>
                According to the{" "}
                <ExternalLink href="https://www.whistler.ca/business-development/business-licenses/tourist-accommodation-requirements/">
                  Resort Municipality of Whistler&apos;s tourist accommodation
                  requirements
                </ExternalLink>
                , the property&apos;s permitted uses must include tourist
                accommodation, temporary accommodation or applicable wording that
                allows temporary lodging.
              </p>
              <p>
                Properties with residential zoning and employee housing units cannot
                be marketed or rented to tourists. RMOW also explains that tourist
                accommodation is not permitted in a residential-zoned property for
                any length of time. A conventional residential tenancy for someone
                using the property as their home is different from providing paid
                accommodation to visitors.
              </p>
              <p>This is why owners should not rely solely on:</p>
              <ul>
                <li>an MLS description</li>
                <li>the neighbourhood name</li>
                <li>another Airbnb listing in the same area</li>
                <li>a realtor&apos;s informal summary</li>
                <li>shorthand such as &quot;Zone 1&quot;</li>
                <li>the way the property was used by a previous owner</li>
              </ul>
              <p>
                The safest starting point is the{" "}
                <ExternalLink href="https://www.whistler.ca/business-development/land-use-and-development/find-property-information/">
                  RMOW Whistler Map
                </ExternalLink>
                , where you can search the civic address, review the zoning and turn
                on the Zoned for Nightly Rentals layer. You should then open the
                applicable zoning bylaw and confirm that the permitted uses match
                your intended rental activity.
              </p>
              <p>
                If the answer is unclear, RMOW also offers a formal property zoning
                inquiry. A legal professional can help review title documents and a
                local property manager can help identify questions that should be
                confirmed before a purchase becomes unconditional.
              </p>

              <ZoningStepsGraphic />

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 not-prose">
                2. Zoning and covenants are not the same thing
              </h2>
              <p>
                Correct zoning is essential, but it is not the only document that can
                affect rental use.
              </p>
              <p>
                Some Whistler properties have covenants registered on title. These
                may govern how a unit is rented, how often an owner can use it and
                whether it must participate in a particular rental pool.
              </p>
              <p>Whistler commonly refers to Phase 1 and Phase 2 rental pool covenants.</p>
              <h3 className="text-xl font-semibold text-gray-900 not-prose">
                Phase 1 properties
              </h3>
              <p>
                RMOW describes Phase 1 rental pool covenants as less restrictive than
                Phase 2 covenants. When the owner is not using the property, the unit
                is generally expected to be available to the public through a rental
                pool.
              </p>
              <p>
                Where a covenant does not require one integrated rental pool, owners
                can usually choose their booking and management arrangement or
                self-manage. The exact covenant registered against the property still
                needs to be reviewed.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 not-prose">
                Phase 2 properties
              </h3>
              <p>
                Phase 2 rental pool covenants are more restrictive. RMOW says these
                units generally need to be made available through one integrated
                rental pool selected by the strata, with owner use limited by the
                covenant. The standard description allows 28 days of owner use in
                summer and 28 days in winter, although the registered document should
                always be checked for the specific property.
              </p>
              <p>
                This distinction can materially affect how you use the property, which
                company can manage it and how much personal occupancy you are allowed.
              </p>
              <p>
                You can read RMOW&apos;s current explanation of{" "}
                <ExternalLink href="https://www.whistler.ca/business-development/land-use-and-development/covenants-and-modifications/">
                  Phase 1 and Phase 2 rental pool covenants
                </ExternalLink>
                .
              </p>

              <div className="relative aspect-[16/9] my-10 rounded-lg overflow-hidden not-prose max-w-full">
                <Image
                  src={SUPPORTING_IMAGE}
                  alt="Luxury Whistler vacation rental interior in Blueberry"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 896px"
                  loading="lazy"
                />
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 not-prose">
                3. A Whistler tourist accommodation business licence is required
              </h2>
              <p>
                Eligible zoning alone does not authorize an owner to start taking
                bookings.
              </p>
              <p>
                RMOW requires a business licence for owners who market, manage or
                provide paid accommodation to tourists. This includes self-managed
                vacation rentals, properties with Phase 1 covenants and eligible
                properties without a rental pool covenant.
              </p>
              <p>
                The requirement also applies to the marketing of the property. In
                other words, an owner should not publish a nightly rental listing
                first and plan to deal with licensing later.
              </p>
              <p>As of August 2026, RMOW lists the following municipal fees:</p>
              <ul>
                <li>$25 business licence application fee</li>
                <li>
                  $250 annual tourist accommodation business licence fee per guest
                  unit
                </li>
              </ul>
              <p>
                Fees and application requirements can change. Confirm the current
                amount on the official{" "}
                <ExternalLink href="https://www.whistler.ca/business-development/business-licenses/tourist-accommodation-requirements/">
                  RMOW requirements page
                </ExternalLink>{" "}
                before applying.
              </p>
              <p>
                Whistler business licences expire at the end of the calendar year and
                must be renewed. The valid municipal licence number also needs to
                appear on applicable short-term rental platform listings.
              </p>
              <p>
                If you use a property manager, do not assume that the manager&apos;s
                general business licence automatically replaces every licence required
                for the individual property or ownership structure. Confirm the
                licensing arrangement with RMOW during onboarding.
              </p>

              <div className="not-prose my-8 rounded-xl border border-gray-200 bg-gray-50 p-6">
                <p className="text-gray-900 font-medium mb-3 m-0">
                  Not sure whether a property is suitable?
                </p>
                <p className="text-gray-700 mb-4 m-0">
                  Send AceHost the address and basic property information and we can
                  help identify the questions that need to be confirmed.
                </p>
                <Link
                  href="/list-property"
                  className="inline-flex items-center justify-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
                >
                  Check a Whistler Property With AceHost
                </Link>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 not-prose">
                4. Provincial short-term rental registration is a separate requirement
              </h2>
              <p>
                Whistler owners also need to consider the provincial short-term rental
                registry.
              </p>
              <p>
                RMOW identifies provincial registration as the third basic requirement
                after zoning and municipal licensing. Airbnb, VRBO and other
                short-term rental platforms use the provincial registration number to
                validate listings.
              </p>
              <p>
                Owners can review the current requirements and apply through the{" "}
                <ExternalLink href="https://www2.gov.bc.ca/gov/content/housing-tenancy/short-term-rentals/registry">
                  Province of British Columbia short-term rental registry
                </ExternalLink>
                .
              </p>
              <p>
                Municipal licensing and provincial registration are separate. Having
                one does not eliminate the need for the other.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 not-prose">
                5. Does B.C.&apos;s principal residence requirement apply in Whistler?
              </h2>
              <p>This is one of the most common points of confusion.</p>
              <p>
                As of April 2026, RMOW states that the provincial principal residence
                requirement does not apply to short-term rentals in Whistler. That
                means Whistler is not subject to the same principal-residence
                restriction that applies in many other B.C. communities.
              </p>
              <p>However, this does not make every Whistler home eligible for Airbnb.</p>
              <p>Whistler tourist accommodation is still regulated through:</p>
              <ul>
                <li>municipal zoning</li>
                <li>title covenants</li>
                <li>the RMOW business licence</li>
                <li>provincial registration</li>
                <li>platform validation and enforcement</li>
              </ul>
              <p>
                The exemption from the provincial principal-residence rule does not
                override local zoning or turn a residential-zoned home into a legal
                nightly rental.
              </p>
              <p>
                For the latest position, review RMOW&apos;s page explaining{" "}
                <ExternalLink href="https://www.whistler.ca/business-development/land-use-and-development/provincial-legislation/how-b-c-s-new-short-term-rental-rules-affect-whistler/">
                  how B.C.&apos;s short-term rental rules affect Whistler
                </ExternalLink>
                .
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 not-prose">
                6. Open building permits can delay a licence
              </h2>
              <p>
                An overlooked building file can become a major surprise during the
                licensing process.
              </p>
              <p>
                RMOW reviews the property file when processing a tourist accommodation
                business licence. If the home has an open or incomplete building or
                plumbing permit, the issue may need to be resolved before the
                municipality will issue the licence.
              </p>
              <p>
                This can include work completed by a prior owner. Building and
                plumbing files attach to the property, not simply to the person who
                originally started the work.
              </p>
              <p>Before buying a property for vacation rental use, investigate:</p>
              <ul>
                <li>zoning and permitted uses</li>
                <li>registered covenants</li>
                <li>strata bylaws and rental pool requirements</li>
                <li>open building or plumbing permits</li>
                <li>municipal business licence eligibility</li>
                <li>provincial registration requirements</li>
                <li>insurance and tax obligations</li>
              </ul>
              <p>
                The{" "}
                <ExternalLink href="https://www.whistler.ca/business-development/land-use-and-development/find-property-information/">
                  RMOW property information guide
                </ExternalLink>{" "}
                explains how to locate zoning, legal descriptions and property
                records.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 not-prose">
                7. What happens if a Whistler Airbnb is not properly licensed?
              </h2>
              <p>
                Operating first and asking questions later can be extremely expensive.
              </p>
              <p>
                RMOW states that an unlicensed tourist accommodation rental is illegal
                and may be fined up to $3,000 per day. The municipality can also
                require a short-term rental platform to remove a non-compliant listing.
              </p>
              <p>
                The rules apply to advertising and marketing, not only to a completed
                guest stay. Publishing an ineligible or unlicensed listing can create
                enforcement risk even before the first reservation checks in.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 not-prose">
                8. Do not forget taxes and insurance
              </h2>
              <p>
                Zoning and licensing determine whether the use is allowed, but owners
                also need an appropriate tax and insurance setup.
              </p>
              <p>
                Whistler&apos;s{" "}
                <ExternalLink href="https://www.whistler.ca/municipal-services/grants-and-funding/municipal-and-regional-district-tax/">
                  Municipal and Regional District Tax
                </ExternalLink>{" "}
                is currently 3%, in addition to 8% Provincial Sales Tax on applicable
                short-term tourist accommodation.{" "}
                <ExternalLink href="https://www.canada.ca/en/revenue-agency/programs/about-canada-revenue-agency-cra/compliance/platform-economy/sharing-economy.html">
                  GST obligations
                </ExternalLink>{" "}
                can also apply. The booking platform may collect and remit certain
                taxes depending on the listing and account structure, but owners should
                never assume every obligation is automatically handled.
              </p>
              <p>
                Speak with an accountant familiar with short-term accommodation and
                confirm that your insurer knows the property will be used as a
                vacation rental. A standard residential policy may not provide the
                coverage required for frequent paying guests.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 not-prose">
                9. A practical checklist before listing your Whistler home
              </h2>
              <p>
                Before publishing an Airbnb or VRBO listing, complete these checks:
              </p>
              <ul className="not-prose list-none pl-0 space-y-3 my-6">
                {CHECKLIST_ITEMS.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 rounded-lg border border-gray-200 bg-white px-4 py-3 shadow-sm"
                  >
                    <span
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-white text-xs"
                      aria-hidden
                    >
                      ✓
                    </span>
                    <span className="text-gray-800 text-base leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 not-prose">
                How AceHost can help
              </h2>
              <p>
                AceHost is a Whistler property management company specializing in
                luxury vacation rentals, while also managing a broader selection of
                chalets, townhomes and condos.
              </p>
              <p>
                If you already own a property, our team can review the address and
                available information with you, help identify the questions that need
                to be confirmed, prepare a rental projection and explain how we would
                position the home.
              </p>
              <p>
                If you are still looking to buy, we can share our opinion on location,
                layout, bedroom count, amenities, likely guest appeal and potential
                rental performance. We can also connect you with trusted local real
                estate and professional contacts where appropriate.
              </p>
              <p>
                Final zoning, legal, tax and licensing confirmation should always come
                from RMOW and the appropriate qualified professionals. Our role is to
                help you approach the process with better information and then manage
                the property once it is ready.
              </p>
              <p>
                For a deeper look at returns, read{" "}
                <Link href="/post/is-owning-a-vacation-rental-in-whistler-worth-it-2026">
                  Is Owning a Vacation Rental in Whistler Worth It in 2026?
                </Link>
                . If you are deciding how to operate the home, see{" "}
                <Link href="/post/self-managing-vs-hiring-a-whistler-property-manager-what-owners-need-to-know">
                  Self-Managing vs Hiring a Whistler Property Manager
                </Link>
                .
              </p>
              <div className="not-prose flex flex-col sm:flex-row flex-wrap gap-3 my-8">
                <Link
                  href="/list-property"
                  className="inline-flex items-center justify-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
                >
                  Check a Whistler Property With AceHost
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 border border-gray-900 text-gray-900 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                >
                  Contact AceHost
                </Link>
              </div>

              <h2
                id="faqs"
                className="text-3xl font-bold text-gray-900 mt-12 mb-6 not-prose"
              >
                Frequently asked questions
              </h2>
              {FAQ_ITEMS.map((item) => (
                <div key={item.question} className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 not-prose mb-2">
                    {item.question}
                  </h3>
                  <p>{item.answer}</p>
                </div>
              ))}

              <div className="not-prose bg-amber-50 border border-amber-200 rounded-xl p-6 my-10">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Disclaimer
                </h3>
                <p className="text-gray-800 text-sm leading-relaxed m-0">
                  This article provides general information as of August 1, 2026. It
                  is not legal, tax, accounting, insurance or real estate advice.
                  Regulations, fees and property information can change. Confirm the
                  status of the exact property with the Resort Municipality of
                  Whistler, the Province of British Columbia and the appropriate
                  qualified professionals before marketing or operating tourist
                  accommodation.
                </p>
              </div>

              <BlogGuestyInlineBanner compact />


              <BlogRelatedArticles
                currentArticleLink={currentArticleLink}
                articles={relatedArticles}
              />
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
