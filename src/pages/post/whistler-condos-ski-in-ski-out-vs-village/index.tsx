import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BlogRelatedArticles from "@/components/BlogRelatedArticles";
import BlogBreadcrumbs from "@/components/blog/BlogBreadcrumbs";
import BlogSeoHead from "@/components/blog/BlogSeoHead";
import {
  BlogBookNowPanel,
  BlogMobileStickyBookBar,
} from "@/components/blog/BlogBookNowCta";
import {
  COMPARISON_ROWS,
  FAQ_ITEMS,
  FEATURED_PROPERTIES,
} from "@/data/blog/whistler-condos-ski-vs-village";
import { allArticles } from "@/utils/blogArticles";

const SLUG = "whistler-condos-ski-in-ski-out-vs-village";
const PUBLISH_DATE = "October 10, 2026";
const READ_TIME = "8 min read";
const HERO =
  "/photos/properties/Woodrun 2-bed/01 - 20261008 A7M3 04 A1_00668.jpg";

const RELATED = allArticles.filter((article) =>
  [
    "/post/best-condo-rentals-in-whistler",
    "/post/where-to-stay-in-whistler-winter",
    "/post/28-best-places-to-stay-in-whistler",
  ].includes(article.link)
);

const PROPERTY_GROUPS = [
  "For slope access",
  "For a Village-focused stay",
  "For convenient access to the Blackcomb base",
  "For mountainside Creekside skiing",
] as const;

function SectionImage({
  src,
  alt,
  caption,
  priority = false,
}: {
  src: string;
  alt: string;
  caption: string;
  priority?: boolean;
}) {
  return (
    <figure className="not-prose my-8">
      <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-gray-100">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 896px"
          priority={priority}
          loading={priority ? undefined : "lazy"}
        />
      </div>
      <figcaption className="mt-3 text-sm text-gray-600 leading-relaxed">
        {caption}
      </figcaption>
    </figure>
  );
}

export default function WhistlerCondosSkiVsVillagePost() {
  const currentArticleLink = `/post/${SLUG}`;

  return (
    <>
      <BlogSeoHead
        keywords="Whistler condos, ski-in ski-out Whistler condo, Whistler Village condo, Upper Village Blackcomb condo, AceHost Whistler rentals"
        faqItems={[...FAQ_ITEMS]}
      />

      <div className="min-h-screen bg-white overflow-x-hidden">
        <Navigation transparent={false} />

        <main className="pt-24 pb-28 md:pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <BlogBreadcrumbs slug={SLUG} />
              <h1 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-gray-900 mb-3 leading-tight">
                Whistler Condos: Ski-In Ski-Out vs. Village Stays
              </h1>
              <div className="flex flex-wrap items-center text-sm text-gray-600 mb-4 gap-x-4">
                <span>Published: {PUBLISH_DATE}</span>
                <span className="hidden sm:inline" aria-hidden>
                  |
                </span>
                <span>{READ_TIME}</span>
              </div>
              <p className="text-lg sm:text-xl text-gray-800 leading-relaxed mb-5">
                Find a Whistler condo that fits the way you travel, from
                slopeside stays to convenient Village locations.
              </p>
              <BlogBookNowPanel
                id="book-now-hero"
                placement="hero"
                compact
                headline="Find Your Whistler Stay"
                supporting="Search live dates on AceHost's booking site and choose a condo that matches your ski days, evenings and group."
              />
              <SectionImage
                src={HERO}
                alt="Woodrun Lodge at dusk on Blackcomb Mountain"
                caption="Woodrun Lodge on Blackcomb, with ski-in/ski-out along Merlin's run."
                priority
              />
            </div>

            <article className="prose prose-lg max-w-none">
              <h2
                id="what-matters"
                className="text-3xl font-bold text-gray-900 mt-4 mb-4 scroll-mt-28"
              >
                What matters most for your trip?
              </h2>
              <p>
                The choice is usually simpler than the listings make it look. You
                are weighing three things: how you get onto the mountain, how
                easily you walk to dinner and groceries, and whether the condo's
                bedrooms and amenities actually fit your group.
              </p>
              <p>
                Ski-in/ski-out sounds like the obvious answer until you are
                carrying skis across a road, meeting a child at a lesson, or
                walking home for lunch with a non-skier. A Village condo can feel
                like the social heart of the trip, then feel long on a cold
                morning walk to the gondola. Neither option is universally
                better. The right one depends on who is travelling with you.
              </p>
              <p>
                If you already know you want to browse every AceHost condo, see
                our{" "}
                <Link href="/post/best-condo-rentals-in-whistler">
                  best condo rentals in Whistler
                </Link>{" "}
                guide. This article answers a narrower question: should you book
                a ski-in/ski-out condo or stay in the Village?
              </p>

              <h2
                id="ski-access-types"
                className="text-3xl font-bold text-gray-900 mt-12 mb-4 scroll-mt-28"
              >
                Ski-in/ski-out vs. walk-to-lifts
              </h2>
              <p>
                Whistler listings use &quot;ski-in/ski-out&quot; in more than one
                way. Treat the four setups below as different products, not as
                synonyms.
              </p>
              <p>
                <strong>A building beside accessible ski terrain</strong> is the
                closest thing to skiing from the door. Woodrun Lodge sits
                alongside Merlin's run on Blackcomb. The Aspens sits on-hill, with
                slope access just steps from a ground-floor unit. Even then, you
                still need to know where you click in, how you return, and
                whether that connecting snow is open.
              </p>
              <p>
                <strong>A short walk to a ski-access point</strong> can still be
                excellent, especially for confident skiers. It is not the same as
                skiing into the living room. You may walk a path, cross a road or
                carry gear through a lobby.
              </p>
              <p>
                <strong>Accommodation near a gondola</strong> is what many Upper
                Village guests actually want. Le Chamois is a clear example: the
                Blackcomb Gondola is about a 2-minute walk from the building. That
                is ski convenience, not ski-into-the-unit access.
              </p>
              <p>
                <strong>A Village condo with a longer walk to the lifts</strong>{" "}
                trades first-tracks speed for restaurants, shops and groceries.
                Eagle Lodge is about a 7-minute walk to the gondolas through
                Whistler Village. Tyndall Stone Lodge is in the Village core,
                with gondolas an easy walk or a free shuttle ride, depending on
                how you prefer to start the day.
              </p>
              <p>Before you book, check five practical details:</p>
              <ul>
                <li>Where you put your skis on, not just the building name.</li>
                <li>
                  Whether the route includes walking sections, stairs or road
                  crossings.
                </li>
                <li>How you get back at the end of the day.</li>
                <li>
                  Whether the connecting terrain suits your skiing ability.
                  Beginner-friendly lodging is not the same as a beginner-friendly
                  ski-out.
                </li>
                <li>
                  Whether access depends on snowfall, snowmaking and open terrain,
                  especially early and late season.
                </li>
              </ul>
              <p>
                Woodrun Lodge sits alongside Merlin's run with genuine
                ski-in/ski-out access, including a short ski down toward the
                Blackcomb Gondola. That is still a useful reminder to confirm how
                you get on and off the mountain at any slopeside condo, especially
                early and late season.
              </p>

              <h2
                id="which-option"
                className="text-3xl font-bold text-gray-900 mt-12 mb-4 scroll-mt-28"
              >
                Which option suits your group?
              </h2>
              <p>
                For families, the easiest condo is not always the closest building
                to a ski run. The actual route in ski boots, where you store
                equipment, who sleeps on a sofa bed, and where lessons meet can
                matter more than a slopeside label. Ski-in/ski-out is also not
                automatically suitable for every beginner. Connecting runs can be
                steeper or less reliable than the groomed trails you came to ski.
              </p>

              <div className="not-prose my-8 overflow-hidden rounded-xl border border-gray-200">
                <table className="hidden md:table w-full text-left text-sm">
                  <caption className="sr-only">
                    Comparison of Whistler condo priorities
                  </caption>
                  <thead className="bg-gray-900 text-white">
                    <tr>
                      <th scope="col" className="px-4 py-3 font-semibold w-[28%]">
                        Your priority
                      </th>
                      <th scope="col" className="px-4 py-3 font-semibold w-[36%]">
                        What to look for
                      </th>
                      <th scope="col" className="px-4 py-3 font-semibold w-[36%]">
                        What to check
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {COMPARISON_ROWS.map((row, index) => (
                      <tr
                        key={row.priority}
                        className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                      >
                        <th
                          scope="row"
                          className="px-4 py-4 font-semibold text-gray-900 align-top"
                        >
                          {row.priority}
                        </th>
                        <td className="px-4 py-4 text-gray-700 align-top leading-relaxed">
                          {row.lookFor}
                        </td>
                        <td className="px-4 py-4 text-gray-700 align-top leading-relaxed">
                          {row.check}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div className="md:hidden divide-y divide-gray-200">
                  {COMPARISON_ROWS.map((row) => (
                    <div key={row.priority} className="px-4 py-5 bg-white">
                      <p className="font-semibold text-gray-900 mb-3">
                        {row.priority}
                      </p>
                      <p className="text-sm text-gray-500 uppercase tracking-wide mb-1">
                        What to look for
                      </p>
                      <p className="text-gray-700 text-sm leading-relaxed mb-3">
                        {row.lookFor}
                      </p>
                      <p className="text-sm text-gray-500 uppercase tracking-wide mb-1">
                        What to check
                      </p>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {row.check}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <BlogBookNowPanel
                id="book-now-comparison"
                placement="comparison"
                headline="Ready to Choose Your Condo?"
                supporting="Once you know whether ski access or Village walkability matters more, search dates and see which AceHost stays fit."
              />

              <h2
                id="locations"
                className="text-3xl font-bold text-gray-900 mt-12 mb-4 scroll-mt-28"
              >
                Choosing your Whistler location
              </h2>
              <p>
                Location is the other half of the decision. For a broader
                neighbourhood comparison, including larger homes, read{" "}
                <Link href="/post/where-to-stay-in-whistler-winter">
                  where to stay in Whistler in winter
                </Link>. The notes below are about condo tradeoffs specifically.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">
                Whistler Village and Village North
              </h3>
              <p>
                Stay here if evenings, groceries and a pedestrian village matter.
                Eagle Lodge sits in Town Plaza on the Village Stroll. Tyndall
                Stone Lodge overlooks Olympic Plaza. Both put restaurants, cafes
                and shops immediately nearby. The lift walk is real, but you are
                not driving into town for dinner.
              </p>
              <p>
                Village North is a quieter extension of the same idea: still
                walkable, usually a little removed from the busiest Stroll. It is
                still a Village stay, not a slopeside one.
              </p>
              <SectionImage
                src="/photos/properties/whistler-village-views-luxury-2-5-bedroom/01 - 20250707 A7M3 01 A1_07036.jpg"
                alt="Renovated living and dining area in a Whistler Village condo"
                caption="Village condos trade a longer lift walk for restaurants, groceries and a pedestrian evening."
              />

              <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">
                Upper Village and Blackcomb
              </h3>
              <p>
                Upper Village sits at the base of Blackcomb, across Fitzsimmons
                Creek from the main Village. It is quieter, with the Blackcomb
                Gondola, Fairmont and Upper Village dining close at hand. Some
                buildings here are on-hill. Others, like Le Chamois, are a short
                walk to the gondola.
              </p>
              <p>
                The main Village is still reachable on foot from several of these
                condos. Woodrun's listing describes the Fairmont as about a
                one to two-minute downhill walk and Whistler Village as about a
                10 to 15-minute walk. That is a different evening than staying on the
                Stroll, but you are not isolated from town.
              </p>
              <SectionImage
                src="/photos/properties/The Aspens/4800-Spearhead-Drive-4.JPG"
                alt="Aerial view of Upper Village condos beside Blackcomb ski runs"
                caption="Upper Village and Blackcomb favour ski convenience, with the main Village still walkable from many buildings."
              />

              <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">
                Creekside and mountainside alternatives
              </h3>
              <p>
                Creekside is Whistler's original base, with its own gondola,
                restaurants, grocery shopping and a calmer village of its own. A
                condo in the Creekside base area is a different stay from a
                mountainside home above it.
              </p>
              <p>
                The Bluffs in Taluswood is the mountainside version: ski-in/ski-out
                onto the Dave Murray Downhill, with Creekside Village a short
                drive away. Do not assume you can walk to Creekside shops and
                restaurants the way you would from a Village condo. If you want
                that sidewalk convenience, look at Creekside base lodging, not
                every property that lists Creekside in the name.
              </p>
              <SectionImage
                src="/photos/properties/Bluffs Unit 4/Bluffs drone.jpg"
                alt="Taluswood condos on the mountainside above Creekside and Alpha Lake"
                caption="Taluswood's Bluffs sits above Creekside. Ski access is on the mountain. Creekside shops are a short drive."
              />

              <h2
                id="acehost-condos"
                className="text-3xl font-bold text-gray-900 mt-12 mb-4 scroll-mt-28"
              >
                AceHost condos to consider
              </h2>
              <p>
                These stays are grouped by the kind of trip they support, not
                ranked as a best-to-worst list. Browse the{" "}
                <Link href="/properties?category=condos">
                  full Whistler condo collection
                </Link>{" "}
                when you are ready to compare more layouts.
              </p>

              {PROPERTY_GROUPS.map((group) => {
                const properties = FEATURED_PROPERTIES.filter(
                  (property) => property.group === group
                );
                if (properties.length === 0) return null;
                const groupId = properties[0]?.groupId;

                return (
                  <div key={group}>
                    <h3
                      id={groupId}
                      className="text-2xl font-semibold text-gray-900 mt-10 mb-4 scroll-mt-28"
                    >
                      {group}
                    </h3>
                    {properties.map((property) => (
                      <article
                        key={property.href}
                        className="not-prose border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm mb-8"
                      >
                        <div className="relative aspect-[16/9] bg-gray-100">
                          <Image
                            src={property.image}
                            alt={property.imageAlt}
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 896px"
                            loading="lazy"
                          />
                        </div>
                        <div className="p-5 sm:p-6">
                          <p className="text-sm text-gray-500 mb-1">
                            {property.building}
                          </p>
                          <h4 className="text-xl font-semibold text-gray-900 mb-3 leading-snug">
                            {property.name}
                          </h4>
                          <p className="text-gray-700 leading-relaxed mb-4">
                            {property.summary}
                          </p>
                          <ul className="space-y-2 mb-5">
                            {property.features.map((feature) => (
                              <li
                                key={feature}
                                className="text-gray-700 leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray-900"
                              >
                                {feature}
                              </li>
                            ))}
                          </ul>
                          <p className="text-sm text-gray-500 mb-5">
                            {property.caption}
                          </p>
                          <Link
                            href={property.href}
                            className="inline-flex items-center justify-center min-h-12 px-6 rounded-lg bg-white text-gray-900 border border-gray-300 font-semibold hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2"
                          >
                            View Property
                          </Link>
                        </div>
                      </article>
                    ))}
                  </div>
                );
              })}

              <BlogBookNowPanel
                id="book-now-properties"
                placement="properties"
                headline="Check Your Dates with AceHost"
                supporting="Open the booking site to search availability across AceHost Whistler condos. Dates and homes change, so confirm there."
              />

              <h2
                id="what-to-check"
                className="text-3xl font-bold text-gray-900 mt-12 mb-4 scroll-mt-28"
              >
                What to check before booking a condo
              </h2>
              <p>
                Amenities vary by property. Do not assume every AceHost condo
                includes free parking, air conditioning, a pool, a private hot
                tub, in-suite laundry or elevator access. Read the listing for
                the unit you are actually booking.
              </p>
              <p>
                <strong>Sleeping arrangements.</strong> Count enclosed bedrooms
                separately from extra sleeping areas. Tyndall is 2.5 bedrooms:
                two proper bedrooms and a living-room pullout. Le Chamois uses a
                Murphy bed in the living area. Eagle Lodge is one king bedroom
                plus a sofa bed. Woodrun and The Aspens both use a sofa bed to
                reach their advertised guest count.
              </p>
              <p>
                <strong>Beds and bathrooms.</strong> A sofa bed or Murphy bed is
                still a bed, but it is not a quiet enclosed room. Match bathroom
                count to how your group actually gets out the door in the
                morning.
              </p>
              <p>
                <strong>Kitchen.</strong> Most of these condos have a full
                kitchen. Le Chamois is more compact, with a stovetop,
                refrigerator, air fryer and combination microwave. If you plan to
                cook every night, that difference matters.
              </p>
              <p>
                <strong>Hot tubs and pools.</strong> Woodrun, The Aspens, Tyndall,
                Eagle Lodge and Le Chamois all use shared building amenities.
                Bluffs Unit 4 has a shared complex hot tub, not a private one.
                Shared facilities can have posted hours or temporary maintenance
                closures.
              </p>
              <p>
                <strong>Parking.</strong> Woodrun includes two guaranteed free
                underground spots. Eagle Lodge and Le Chamois include one free
                underground stall. Tyndall includes one guaranteed underground
                space. The Aspens charges approximately $26 CAD per vehicle, per
                day, through the building. Bluffs includes two underground stalls
                plus outdoor parking outside the building.
              </p>
              <p>
                <strong>Laundry, ski storage, stairs and elevators.</strong>{" "}
                Tyndall, Eagle Lodge, Woodrun and Bluffs have in-suite laundry.
                The Aspens and Le Chamois use shared laundry. Woodrun and Eagle
                Lodge have elevator access. The Aspens unit is ground floor. Ski
                storage ranges from dedicated lockers at Woodrun and Le Chamois
                to building or underground storage at the others. Confirm the
                listing if you are travelling with a lot of gear.
              </p>

              <h2
                id="faqs"
                className="text-3xl font-bold text-gray-900 mt-12 mb-4 scroll-mt-28"
              >
                Short FAQ
              </h2>
              {FAQ_ITEMS.map((item) => (
                <div key={item.question}>
                  <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-2">
                    {item.question}
                  </h3>
                  <p>{item.answer}</p>
                </div>
              ))}

              <BlogBookNowPanel
                id="book-now-footer"
                placement="footer"
                emphasis
                headline="Find Your Whistler Condo"
                supporting="Explore AceHost stays, check availability for your dates, and find the right fit for your next Whistler trip."
              />

              <BlogRelatedArticles
                currentArticleLink={currentArticleLink}
                articles={RELATED}
                showBookingCtas={false}
              />
            </article>
          </div>
        </main>

        <Footer />
        <BlogMobileStickyBookBar heroSelector="#book-now-hero" />
      </div>
    </>
  );
}
