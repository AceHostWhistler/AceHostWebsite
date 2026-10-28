import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FAQ_ITEMS,
  IMAGES,
  LINKS,
  MOOD_ROWS,
} from "@/data/blog/whistler-winter-activities-beyond-skiing";

function SectionHeader({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  return (
    <h2
      id={id}
      className="not-prose scroll-mt-28 text-2xl sm:text-[1.75rem] font-bold text-gray-900 leading-tight mt-16 pt-12 border-t border-gray-200"
    >
      {children}
    </h2>
  );
}

function SubHeading({
  id,
  children,
}: {
  id?: string;
  children: React.ReactNode;
}) {
  return (
    <h3
      id={id}
      className="not-prose scroll-mt-28 text-lg sm:text-xl font-bold text-gray-900 mt-10 mb-3 leading-snug"
    >
      {children}
    </h3>
  );
}

function TextBlock({ children }: { children: React.ReactNode }) {
  return <div className="space-y-4 mt-6 mb-2">{children}</div>;
}

function ExtLink({
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

function ArticleImage({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption?: string;
}) {
  return (
    <figure className="not-prose my-8">
      <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-gray-100">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 820px) 100vw, 820px"
          loading="lazy"
        />
      </div>
      {caption ? (
        <figcaption className="text-sm text-gray-600 mt-3 italic leading-relaxed">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

export default function WhistlerWinterActivitiesBeyondSkiingContent() {
  return (
    <article className="prose prose-lg max-w-none text-gray-800 prose-headings:text-gray-900 prose-headings:font-bold prose-p:leading-[1.75] prose-li:my-1 prose-headings:scroll-mt-28 prose-a:text-blue-700">
      <TextBlock>
        <p>
          A great Whistler ski holiday deserves a few days without ski boots.
          After a couple of big mountain days, an afternoon in steaming outdoor
          pools, a long lunch or a quiet walk through the Village can feel just
          as rewarding as another early start. And when your group includes
          people who do not ski, there is plenty here to build a proper holiday
          around.
        </p>
        <p>
          The best winter activities in Whistler range from wonderfully relaxed
          to seriously adventurous. You can ride into the mountains for fondue,
          explore an illuminated forest after dark, fly above snowy peaks,
          discover British Columbia art or spend a day eating your way through
          nearby Pemberton.
        </p>
        <p>
          Here is our guide to enjoying Whistler beyond the slopes, whether you
          are planning a recovery day, entertaining the family or finding
          something everyone can do together after the lifts close.
        </p>
      </TextBlock>

      <SectionHeader id="choose-the-day">
        Choose the kind of day you want
      </SectionHeader>

      <div className="sm:hidden not-prose mt-6 space-y-3">
        {MOOD_ROWS.map((row) => (
          <div
            key={row.mood}
            className="border border-gray-200 rounded-xl p-4 bg-gray-50"
          >
            <p className="font-semibold text-gray-900 mb-1">{row.mood}</p>
            <p className="text-sm text-gray-700 leading-relaxed">{row.start}</p>
          </div>
        ))}
      </div>

      <div className="hidden sm:block not-prose overflow-x-auto my-8 -mx-4 px-4 sm:mx-0 sm:px-0">
        <table className="min-w-[480px] w-full text-sm border-collapse">
          <caption className="sr-only">
            Suggested Whistler winter activities by the kind of day you want
          </caption>
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-3 border border-gray-200 font-semibold">
                Your mood
              </th>
              <th className="p-3 border border-gray-200 font-semibold">
                Good places to start
              </th>
            </tr>
          </thead>
          <tbody>
            {MOOD_ROWS.map((row) => (
              <tr key={row.mood}>
                <td className="p-3 border border-gray-200 font-medium whitespace-nowrap">
                  {row.mood}
                </td>
                <td className="p-3 border border-gray-200">{row.start}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <TextBlock>
        <p>
          Winter tours operate on seasonal schedules. Book for your actual
          travel dates, and check snow conditions, transport, age requirements
          and any mobility needs before choosing an experience. An active day
          off skiing can still be physically demanding.
        </p>
      </TextBlock>

      <SectionHeader id="slow-down">Slow down and enjoy Whistler</SectionHeader>
      <SubHeading>Spend a few unhurried hours at Scandinave Spa</SubHeading>
      <TextBlock>
        <p>
          If we were choosing one experience for a day between ski days,{" "}
          <ExtLink href={LINKS.scandinave}>Scandinave Spa Whistler</ExtLink>{" "}
          would be near the top of the list. The outdoor thermal circuit moves
          between heat, cold water and quiet rest, surrounded by forest. On a
          snowy day, that combination of cold air and warm water is hard to
          beat.
        </p>
        <p>
          Give it room in your itinerary. This is a place to put your phone
          away, settle into the silence and enjoy being somewhere beautiful
          without having to achieve anything. Add a massage if you want to make
          it the centrepiece of your day, then keep the evening simple with
          dinner back at your chalet.
        </p>
        <p>
          The spa currently welcomes guests aged 14 and over. Ages 14 and 15
          must stay with a parent or legal guardian, with one adult per minor.
          Check the spa&apos;s{" "}
          <ExtLink href={LINKS.scandinaveMinors}>current guest policy</ExtLink>{" "}
          when booking.
        </p>
      </TextBlock>

      <ArticleImage
        src={IMAGES.sauna.src}
        alt={IMAGES.sauna.alt}
        caption="An outdoor sauna at an AceHost Whistler home, the kind of quiet rest day that pairs well with a spa outing."
      />

      <SubHeading>Turn your chalet into the destination</SubHeading>
      <TextBlock>
        <p>
          Some of the best days off happen without going very far. Have a slow
          breakfast, enjoy your home&apos;s hot tub or sauna where included, and
          leave the afternoon open for a book, a movie or a massage.
        </p>
        <p>
          <Link href={LINKS.concierge}>AceHost&apos;s concierge team</Link> can
          help coordinate an in-home massage, private chef, grocery stocking or
          an evening with a bartender. These are especially good options for a
          group that wants to spend time together without arranging several
          separate outings. Optional services are booked separately, and
          amenities depend on the home you choose.
        </p>
      </TextBlock>

      <SubHeading>Walk the Village and follow your appetite</SubHeading>
      <TextBlock>
        <p>
          The pedestrian Village Stroll is worth enjoying at a slower pace than
          the usual walk to the lifts. Browse shops and galleries, stop for
          coffee, pick out a new pair of gloves and leave time for a late lunch.
          In winter, the lights and mountain backdrop make even an ordinary
          evening walk feel like part of the holiday.
        </p>
        <p>
          For a change of scene, explore Creekside.{" "}
          <ExtLink href={LINKS.bred}>BReD</ExtLink> is a lovely stop for
          sourdough, plant-based baking and coffee. Turn the outing into a
          relaxed café morning rather than trying to fit everything into an
          hour.
        </p>
      </TextBlock>

      <SubHeading>
        Take a winter walk without heading into the backcountry
      </SubHeading>
      <TextBlock>
        <p>
          Use{" "}
          <ExtLink href={LINKS.valleyTrail}>
            winter-maintained sections of the Valley Trail
          </ExtLink>{" "}
          for a gentle outing close to town. Choose a short route that suits the
          day&apos;s conditions, wear boots with good grip and take your time at
          the viewpoints.
        </p>
        <p>
          Winter walking routes and groomed Nordic trails are different. Follow
          local signs, stay off ski-only tracks and enjoy lake views from shore
          rather than assuming a frozen surface is safe to cross.
        </p>
      </TextBlock>

      <SectionHeader id="evenings">
        Make an evening part of the adventure
      </SectionHeader>
      <SubHeading>
        Head up Blackcomb for the Crystal Hut fondue experience
      </SubHeading>
      <TextBlock>
        <p>
          The{" "}
          <ExtLink href={LINKS.fondue}>Crystal Hut fondue dinner</ExtLink> is
          one of the most memorable ways to make dinner the main event. Canadian
          Wilderness Adventures offers guided snowmobile access or a ride in a
          heated snowcat, followed by a mountain-hut meal with cheese fondue and
          a waffle dessert.
        </p>
        <p>
          The snowcat is a particularly useful option for guests who want the
          mountain setting without driving a snowmobile. You do not need to ski
          to take part, so it can bring the whole group together after a day
          spent doing different things.
        </p>
        <p>
          Book the full experience rather than planning to make your own way to
          the hut. Transport is part of the outing, and the journey is a large
          part of its appeal.
        </p>
      </TextBlock>

      <SubHeading>
        Walk through the illuminated forest at Vallea Lumina
      </SubHeading>
      <TextBlock>
        <p>
          <ExtLink href={LINKS.vallea}>Vallea Lumina</ExtLink> turns a forest
          walk into an after-dark experience with light, sound and storytelling.
          It is a lovely choice for couples, families and groups looking for an
          evening that feels different from another restaurant booking.
        </p>
        <p>
          The winter route is approximately one kilometre and typically takes 30
          to 40 minutes to walk. Allow additional time for travel and arrival. A
          Village shuttle can be added when booking, which can make the evening
          much easier to organise.
        </p>
        <p>
          This is an outdoor forest route with uneven surfaces and steps. Dress
          warmly and wear proper winter footwear. It is atmospheric precisely
          because you are out in the forest, rather than inside a conventional
          light exhibition.
        </p>
      </TextBlock>

      <SubHeading>Try a different kind of wilderness dinner</SubHeading>
      <TextBlock>
        <p>
          Fondue is not the only way to eat beyond the Village. Canadian
          Wilderness Adventures also lists{" "}
          <ExtLink href={LINKS.snowmobile}>
            snowmobile outings with a cabin breakfast or mountain dinner
          </ExtLink>
          , while its{" "}
          <ExtLink href={LINKS.snowshoe}>snowshoe experiences</ExtLink> include
          a private campfire cookout option.
        </p>
        <p>
          These outings suit guests who like a meal with a story attached: a
          forest journey, a warm place to gather and time outdoors together.
          Choose according to how much riding or walking your group wants to do.
        </p>
      </TextBlock>

      <SubHeading>Make time for a really good meal</SubHeading>
      <TextBlock>
        <p>
          A day off gives you the luxury of arriving at dinner without racing
          back from the mountain. Book somewhere you have been looking forward
          to, start with a cocktail and let the evening take its time.
        </p>
        <p>
          For ideas across different styles and budgets, browse{" "}
          <Link href={LINKS.restaurants}>
            AceHost&apos;s Whistler restaurant and coffee guide
          </Link>
          . A private chef is another lovely choice for a celebration or a group
          that would rather stay home. Let the concierge team know about dietary
          preferences early.
        </p>
      </TextBlock>

      <ArticleImage
        src={IMAGES.dining.src}
        alt={IMAGES.dining.alt}
        caption="A chalet dining table ready for a long winter meal, whether you eat in or come back from town."
      />

      <SectionHeader id="outdoors">
        Get outdoors without downhill skis
      </SectionHeader>
      <SubHeading>Go snowmobiling in the mountains</SubHeading>
      <TextBlock>
        <p>
          A{" "}
          <ExtLink href={LINKS.snowmobile}>guided snowmobile tour</ExtLink>{" "}
          opens up a very different view of Whistler. There are introductory
          outings and more demanding rides, so choose for the least experienced
          person in your group rather than simply picking the longest tour.
        </p>
        <p>
          This is a good option when you want a proper adventure on a day away
          from the lifts. Tell the operator about your riding experience so they
          can match you with the right outing.
        </p>
      </TextBlock>

      <SubHeading>Explore the forest on snowshoes</SubHeading>
      <TextBlock>
        <p>
          Snowshoeing is one of the easiest ways to spend time in a snowy forest
          without learning a new sliding sport. A guided outing is a great
          introduction, especially if you want someone else to choose a suitable
          route and explain the landscape along the way.
        </p>
        <p>
          <ExtLink href={LINKS.olympicParkSnowshoe}>
            Whistler Olympic Park
          </ExtLink>{" "}
          offers marked winter snowshoe trails and rentals in the Callaghan
          Valley. You can also book a guided forest tour with Canadian Wilderness
          Adventures. Pick a short, gentle route for a recovery day or a longer
          outing if you are keen to keep moving.
        </p>
      </TextBlock>

      <SubHeading>Try cross-country skiing or biathlon</SubHeading>
      <TextBlock>
        <p>
          If you are taking a break from downhill skiing rather than all skiing,{" "}
          <ExtLink href={LINKS.olympicPark}>Whistler Olympic Park</ExtLink>{" "}
          offers another way to enjoy the snow. A beginner Nordic lesson gives
          you a fresh challenge, with a different pace and landscape from the
          alpine.
        </p>
        <p>
          For something more unusual, look at a{" "}
          <ExtLink href={LINKS.biathlon}>Discover Biathlon experience</ExtLink>.
          The park offers a coached shooting-only introduction, so you can try
          that part of the Olympic sport without needing to cross-country ski.
        </p>
      </TextBlock>

      <SubHeading>Meet the dogs on a guided sled tour</SubHeading>
      <TextBlock>
        <p>
          A <ExtLink href={LINKS.dogsled}>guided dogsled outing</ExtLink>{" "}
          combines time in the Callaghan Valley with a chance to meet the dogs
          and learn about mushing. It is a distinctive choice for guests who
          want a winter experience beyond machinery and lifts, with the dogs
          themselves a big part of the attraction.
        </p>
      </TextBlock>

      <SubHeading>Ride through the snow to an après dome</SubHeading>
      <TextBlock>
        <p>
          For a gentler guided outing, consider Blackcomb Snowmobile&apos;s{" "}
          <ExtLink href={LINKS.sleigh}>snowcoach-drawn sleigh experience</ExtLink>
          . Options include an après dome with charcuterie and cider, as well as
          a family outing with snow play.
        </p>
        <p>
          This is a motorised snowcoach experience rather than a horse-drawn
          sleigh ride. It is a useful alternative for guests who like the idea
          of a winter excursion without driving their own snowmobile.
        </p>
      </TextBlock>

      <SubHeading>Try guided winter fishing</SubHeading>
      <TextBlock>
        <p>
          Fishing is another possibility for guests who enjoy quiet time
          outdoors. Local operators offer{" "}
          <ExtLink href={LINKS.fishing}>guided winter fishing</ExtLink>,
          including river trips and ice-fishing experiences when conditions
          permit.
        </p>
        <p>
          Let a guide recommend the right outing for the season and arrange
          equipment. Ice fishing should be planned with an operator, rather than
          treated as permission to walk onto a local frozen lake.
        </p>
      </TextBlock>

      <SectionHeader id="new-perspective">
        See the mountains from a new perspective
      </SectionHeader>
      <SubHeading>Take a sightseeing gondola ride</SubHeading>
      <TextBlock>
        <p>
          You do not need skis to enjoy the mountain views. A{" "}
          <ExtLink href={LINKS.peak2peak}>PEAK 2 PEAK sightseeing outing</ExtLink>{" "}
          lets foot passengers experience the gondolas and travel between
          Whistler and Blackcomb when the sightseeing route is operating.
        </p>
        <p>
          Choose a day with good visibility, wear warm layers and suitable
          footwear, and confirm the route and last download time. This is an
          excellent way for non-skiers to understand the scale of the mountains
          their group has been talking about all week.
        </p>
      </TextBlock>

      <SubHeading>Book a scenic helicopter flight</SubHeading>
      <TextBlock>
        <p>
          A{" "}
          <ExtLink href={LINKS.heliScenic}>
            scenic helicopter experience with Blackcomb Helicopters
          </ExtLink>{" "}
          can be a highlight of the whole trip. The appeal is the perspective:
          snowy peaks, valleys and alpine terrain that are difficult to
          appreciate from town.
        </p>
        <p>
          Some tours include an alpine landing when conditions allow. Treat the
          route and landing as weather-dependent, and leave a little flexibility
          in your holiday for the best possible flying window.
        </p>
        <p>
          For a more specialised outing, ask about a{" "}
          <ExtLink href={LINKS.iceCave}>
            guided glacier and ice-cave experience
          </ExtLink>
          . Cave access changes with the season and conditions, so availability
          needs to be confirmed for your specific dates. These are guided
          experiences, not places to explore independently.
        </p>
      </TextBlock>

      <SubHeading>Fly somewhere for the afternoon</SubHeading>
      <TextBlock>
        <p>
          If your group wants something particularly memorable, Blackcomb
          Helicopters also offers a{" "}
          <ExtLink href={LINKS.fortBerens}>Fort Berens winery experience</ExtLink>
          , combining a flight with a winery visit in Lillooet.
        </p>
        <p>
          It adds a destination and a long, leisurely stop to the flight, making
          it an appealing option for a special occasion. Lillooet is a separate
          excursion from the Pemberton day trip below.
        </p>
      </TextBlock>

      <SubHeading>Zipline through the winter forest</SubHeading>
      <TextBlock>
        <p>
          <ExtLink href={LINKS.ziptrek}>Ziptrek&apos;s winter tours</ExtLink>{" "}
          combine forest viewpoints, suspension bridges and ziplines. It is an
          energetic way to see the landscape, with guided travel between
          platforms as part of the experience.
        </p>
        <p>
          Expect walking and stairs as well as the rides. It is a fun choice for
          an adventurous group, but a different proposition from a quiet spa day
          if your legs are asking for a complete rest.
        </p>
      </TextBlock>

      <SubHeading>
        Visit the Olympic sliding track or try a bungee jump
      </SubHeading>
      <TextBlock>
        <p>
          For an adrenaline day, the Whistler Sliding Centre offers a{" "}
          <ExtLink href={LINKS.bobsleigh}>piloted passenger bobsleigh</ExtLink>{" "}
          and a{" "}
          <ExtLink href={LINKS.skeleton}>public skeleton experience</ExtLink>{" "}
          during its winter programme. These put you on the Olympic track rather
          than simply beside it.
        </p>
        <p>
          <ExtLink href={LINKS.bungee}>Whistler Bungee</ExtLink> is another
          year-round possibility for thrill seekers. These are the choices for a
          group looking for a big story to take home, with operator
          participation requirements to review before booking.
        </p>
      </TextBlock>

      <SectionHeader id="family-indoor">
        Plan a family day or an indoor afternoon
      </SectionHeader>
      <SubHeading>Go tubing or skating</SubHeading>
      <TextBlock>
        <p>
          The <ExtLink href={LINKS.tubePark}>bubly Tube Park</ExtLink> on
          Blackcomb delivers the downhill fun without ski lessons, with a
          conveyor taking riders back up. It is a good way to keep a little
          mountain excitement in a family day away from skiing.
        </p>
        <p>
          For a shorter outing close to cafés and shops, look for{" "}
          <ExtLink href={LINKS.skating}>
            winter skating at Whistler Olympic Plaza
          </ExtLink>
          . It combines easily with hot chocolate and a Village wander once the
          seasonal rink is operating.
        </p>
      </TextBlock>

      <SubHeading>Visit the Audain Art Museum</SubHeading>
      <TextBlock>
        <p>
          The <ExtLink href={LINKS.audain}>Audain Art Museum</ExtLink> deserves
          a place on the itinerary in its own right. Its British Columbia art
          collection and changing exhibitions offer a completely different way
          to experience the region, and the building&apos;s forest setting makes
          the arrival part of the visit.
        </p>
        <p>
          Allow time to browse rather than treating it as something to squeeze
          in between bookings. It is a particularly appealing choice when you
          want an indoor afternoon with more substance than shopping. Check the
          museum calendar, as it does not open every day of the week.
        </p>
      </TextBlock>

      <SubHeading>Learn about the local First Nations</SubHeading>
      <TextBlock>
        <p>
          At the <ExtLink href={LINKS.slcc}>Squamish Lil&apos;wat Cultural Centre</ExtLink>
          , Cultural Ambassadors share the living cultures of the two Nations
          through guided experiences, exhibitions and art. It gives visitors a
          richer understanding of the place they have come to enjoy.
        </p>
        <p>
          Build in time for a guided visit. If you are travelling in late 2026,
          check the current visit schedule before setting out, as renovation
          work and temporary arrangements affect opening days and some
          facilities.
        </p>
      </TextBlock>

      <SubHeading>Discover how Whistler became Whistler</SubHeading>
      <TextBlock>
        <p>
          The <ExtLink href={LINKS.museum}>Whistler Museum</ExtLink> is a
          worthwhile stop for anyone curious about the town beyond its
          present-day resort image. It is tucked behind the public library in
          the Village, making it easy to combine with coffee and a walk.
        </p>
        <p>
          Admission is by donation. Check the opening schedule, then give
          yourself time to explore the stories and people behind the
          destination.
        </p>
      </TextBlock>

      <SubHeading>Solve something together or try a new skill</SubHeading>
      <TextBlock>
        <p>
          For an indoor group activity,{" "}
          <ExtLink href={LINKS.escape}>Escape! Whistler</ExtLink> is a good
          choice when you want everyone working on the same challenge. At{" "}
          <ExtLink href={LINKS.axe}>Forged Axe Throwing</ExtLink>, coached
          sessions introduce beginners to a very different kind of target
          practice.
        </p>
        <p>
          There is also{" "}
          <ExtLink href={LINKS.climbing}>indoor climbing at The Core</ExtLink>,
          with guided sessions available for newcomers. It gives children and
          adults a fresh challenge when everyone has had enough sitting still.
        </p>
      </TextBlock>

      <SubHeading>Swim, skate or play indoors</SubHeading>
      <TextBlock>
        <p>
          <ExtLink href={LINKS.meadowPark}>Meadow Park Sports Centre</ExtLink>{" "}
          is useful for a family day, with indoor swimming facilities, a fitness
          centre and an ice rink. Check the public swim and skate timetable
          rather than assuming every facility is available for drop-in use all
          day.
        </p>
        <p>
          For another low-planning option, Whistler&apos;s{" "}
          <ExtLink href={LINKS.indoor}>indoor activity directory</ExtLink>{" "}
          includes Whislife&apos;s arcade and VR experiences, indoor golf and
          racket sports. These can be especially handy when different
          generations need a change of pace from sightseeing.
        </p>
      </TextBlock>

      <SubHeading>Spend an afternoon in Function Junction</SubHeading>
      <TextBlock>
        <p>
          Function Junction gives you another side of Whistler, with independent
          businesses, coffee and craft beer. Combine an axe-throwing booking
          with a stop at{" "}
          <ExtLink href={LINKS.coastMountain}>Coast Mountain Brewing</ExtLink>,
          or simply make it a relaxed afternoon of browsing and tasting.
        </p>
        <p>
          It is a good addition to a longer holiday when you have already
          explored the Village. Arrange transport if beer tasting is part of the
          plan.
        </p>
      </TextBlock>

      <SectionHeader id="pemberton">
        Take the scenic drive to Pemberton
      </SectionHeader>
      <TextBlock>
        <p>
          Pemberton is one of our favourite suggestions for a change of scenery
          during a Whistler stay. The drive follows Highway 99 north into a
          broad valley, with big mountain views when the weather clears and a
          different feel from the resort.
        </p>
        <p>
          <ExtLink href={LINKS.pembertonDrive}>
            Pemberton village is roughly 30 minutes from Whistler
          </ExtLink>{" "}
          in normal conditions. Allow more time in winter, and remember that the
          farms farther along the valley add driving beyond that initial half
          hour. Check your chosen stops&apos; opening days before setting out,
          then make it a leisurely day rather than a quick dash between ski
          sessions.
        </p>
      </TextBlock>

      <SubHeading>Stop at North Arm Farm</SubHeading>
      <TextBlock>
        <p>
          <ExtLink href={LINKS.northArm}>North Arm Farm</ExtLink> is a lovely
          place to include for its setting and farm-shop stop. Tourism Pemberton
          describes its{" "}
          <ExtLink href={LINKS.farmStand}>year-round farm shop</ExtLink> as a
          place for baking, pantry goods and seasonal produce.
        </p>
        <p>
          A winter visit has a different character from a summer one. The appeal
          is the farm shop, seasonal produce and valley scenery. Berry picking
          and pumpkin-patch visits belong to summer and autumn.
        </p>
      </TextBlock>

      <SubHeading>Visit The Beer Farmers</SubHeading>
      <TextBlock>
        <p>
          Farther along Pemberton Meadows Road,{" "}
          <ExtLink href={LINKS.beerFarmers}>The Beer Farmers</ExtLink> combines
          a working-farm setting with a brewery visit. Its kid-friendly tasting
          room and food offering make it a useful stop for a mixed group, as
          well as a chance to enjoy the valley from somewhere other than the
          car.
        </p>
        <p>
          If you are planning to sample beers, arrange a designated driver or
          private transport so the outing stays easy for everyone.
        </p>
      </TextBlock>

      <SubHeading>Make lunch part of the trip</SubHeading>
      <TextBlock>
        <p>
          Pemberton has enough good food to justify a visit even without a
          packed activity schedule. Depending on the day and your appetite,
          consider <ExtLink href={LINKS.townSquare}>Town Square</ExtLink>,{" "}
          <ExtLink href={LINKS.mileOne}>Mile One Eating House</ExtLink> or{" "}
          <ExtLink href={LINKS.pony}>The Pony</ExtLink>. For coffee and baking,{" "}
          <ExtLink href={LINKS.blackbird}>Blackbird Bakery</ExtLink> is another
          useful stop.
        </p>
        <p>
          Choose one proper meal rather than trying to tick off every
          restaurant. Leave room for the drive, a farm-shop browse and a few
          photographs along the way.
        </p>
      </TextBlock>

      <SectionHeader id="itineraries">Four ways to put it together</SectionHeader>
      <TextBlock>
        <p>
          <strong>The proper recovery day:</strong> Start with a slow breakfast,
          spend the middle of the day at Scandinave Spa and return to your
          chalet for a relaxed dinner. Add an in-home massage on a different day
          if you want another easy afternoon.
        </p>
        <p>
          <strong>The family day:</strong> Choose tubing or swimming during the
          day, leave time for hot chocolate in the Village and book Vallea Lumina
          for the evening. Check ages and seasonal schedules before combining
          bookings.
        </p>
        <p>
          <strong>The mountain day without skiing:</strong> Book sightseeing or
          a scenic helicopter flight when visibility looks promising, then enjoy
          lunch in town. Save Crystal Hut fondue for an evening when the group
          is ready for another mountain outing.
        </p>
        <p>
          <strong>The Pemberton day:</strong> Drive north after breakfast, visit
          North Arm Farm, choose a local lunch and continue to The Beer Farmers
          if its hours suit. Allow enough daylight and travel time for a
          comfortable return.
        </p>
        <p>
          You do not need a full schedule every day. Choosing one main
          experience often leaves more room to enjoy the place, the people you
          came with and the home you are staying in.
        </p>
      </TextBlock>

      <SectionHeader id="where-to-stay">
        Stay somewhere you will enjoy between ski days
      </SectionHeader>
      <TextBlock>
        <p>
          Your accommodation matters just as much on a day off as it does on a
          powder morning. A comfortable living room, a well-equipped kitchen and
          the right location can turn an empty day in the calendar into one of
          the nicest parts of the trip.
        </p>
      </TextBlock>

      <ArticleImage
        src={IMAGES.stay.src}
        alt={IMAGES.stay.alt}
        caption="Two Cedars in Kadenwood, one of the AceHost homes that works well when the day is about staying in as much as heading out."
      />

      <TextBlock>
        <p>
          For a larger group,{" "}
          <Link href={LINKS.twoCedars}>Two Cedars in Kadenwood</Link> offers
          indoor and outdoor hot tubs, an infrared sauna, a gym and a private
          theatre. It is an appealing base when your group wants plenty to enjoy
          at home as well as on the mountain.
        </p>
        <p>
          <Link href={LINKS.mountaintop}>The Mountaintop</Link> is another
          strong fit for a ski holiday with proper downtime, with a hot tub,
          outdoor sauna, steam room, gym and ping-pong table.{" "}
          <Link href={LINKS.panoramic}>Panoramic Estate</Link> offers another
          spacious Kadenwood option with a hot tub, indoor sauna, gym and media
          space.
        </p>
        <p>
          For a smaller group, the{" "}
          <Link href={LINKS.woodrun}>Woodrun Penthouse on Blackcomb</Link>{" "}
          combines a cosy mountain base with access to a shared pool, hot tub,
          gym and sauna. If walking out to cafés, shops and restaurants is your
          priority,{" "}
          <Link href={LINKS.tyndall}>
            Tyndall Stone Lodge in Whistler Village
          </Link>{" "}
          is worth considering for its Olympic Plaza location and shared pool
          and hot tub.
        </p>
        <p>
          The right choice depends on how you want to spend the whole holiday. A
          Village stay makes independent outings easy for non-skiers, while a
          larger mountainside home is a lovely choice for a group that enjoys
          gathering at home and arranging transport for outings.
        </p>
        <p>
          <ExtLink href={LINKS.guesty}>
            Explore AceHost stays and check your dates
          </ExtLink>
          , or{" "}
          <Link href={LINKS.concierge}>speak with our concierge team</Link>{" "}
          about building a holiday around both the skiing and everything that
          happens between ski days.
        </p>
      </TextBlock>

      <ArticleImage
        src={IMAGES.living.src}
        alt={IMAGES.living.alt}
        caption="A Village home with snow just outside the windows, useful when non-skiers want cafés and shops within easy reach."
      />

      <SectionHeader id="faq">Questions about Whistler beyond skiing</SectionHeader>
      <div className="mt-6 space-y-8">
        {FAQ_ITEMS.map((item) => (
          <div key={item.question}>
            <h3 className="not-prose text-lg sm:text-xl font-bold text-gray-900 leading-snug mb-3">
              {item.question}
            </h3>
            <p>{item.answer}</p>
          </div>
        ))}
      </div>
    </article>
  );
}
