import React from "react";
import Image from "next/image";
import Link from "next/link";
import BookWhistlerWinterButton from "@/components/blog/BookWhistlerWinterButton";
import {
  ASSET_BASE,
  CHALET_CAPTION,
  DRIVE_PROPERTIES,
  ELEVATION_ROWS,
  FORECAST_ROWS,
  ILLUSTRATION_CAPTION,
  SKI_ACCESS_PROPERTIES,
  SNOW_ROWS,
  SOURCE_LINKS,
  SOURCES,
  VILLAGE_PROPERTIES,
  type StayProperty,
} from "@/data/blog/whistler-snow-report-november-23-2026";

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

function SubSectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="not-prose text-lg sm:text-xl font-bold text-gray-900 leading-snug mt-10 mb-4">
      {children}
    </h3>
  );
}

function TextBlock({ children }: { children: React.ReactNode }) {
  return <div className="space-y-4 mt-6 mb-2">{children}</div>;
}

function SourceRef({ n }: { n: number }) {
  return (
    <a href={`#source-${n}`} className="text-blue-700 hover:underline">
      [{n}]
    </a>
  );
}

function IllustrationFigure({
  slug,
  alt,
  caption,
}: {
  slug: string;
  alt: string;
  caption: string;
}) {
  return (
    <figure className="not-prose my-10">
      <img
        src={`${ASSET_BASE}/${slug}.webp`}
        srcSet={`${ASSET_BASE}/${slug}-768.webp 768w, ${ASSET_BASE}/${slug}.webp 1672w`}
        sizes="(max-width: 1024px) 100vw, 820px"
        width={1672}
        height={941}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="w-full h-auto rounded-xl bg-gray-100"
      />
      <figcaption className="text-sm text-gray-600 mt-3 italic leading-relaxed">
        {caption}
      </figcaption>
    </figure>
  );
}

function SnapshotTable({
  caption,
  headers,
  rows,
}: {
  caption: string;
  headers: string[];
  rows: string[][];
}) {
  return (
    <div className="not-prose overflow-x-auto mb-8 -mx-4 px-4 sm:mx-0 sm:px-0">
      <table className="min-w-[480px] w-full text-sm border-collapse">
        <caption className="text-left text-sm text-gray-600 mb-3 leading-relaxed">
          {caption}
        </caption>
        <thead>
          <tr className="bg-gray-100 text-left">
            {headers.map((header) => (
              <th
                key={header}
                scope="col"
                className="p-3 border border-gray-200 font-semibold"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row[0]}>
              {row.map((cell, index) =>
                index === 0 ? (
                  <th
                    key={`${row[0]}-${index}`}
                    scope="row"
                    className="p-3 border border-gray-200 text-left font-medium whitespace-nowrap"
                  >
                    {cell}
                  </th>
                ) : (
                  <td
                    key={`${row[0]}-${index}`}
                    className="p-3 border border-gray-200"
                  >
                    {cell}
                  </td>
                )
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function PropertyCard({ property }: { property: StayProperty }) {
  return (
    <article className="not-prose rounded-xl border border-gray-200 overflow-hidden bg-white">
      <Link href={property.listingHref} aria-label={property.listingLabel}>
        <Image
          src={property.image}
          alt={property.alt}
          width={property.width}
          height={property.height}
          className="w-full h-auto"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
        />
      </Link>
      <div className="p-5 space-y-3">
        <h4 className="text-lg font-bold text-gray-900 leading-snug">
          {property.name}
        </h4>
        <p className="text-gray-700 text-[0.95rem] leading-relaxed">
          {property.body}
        </p>
        <p className="text-sm leading-relaxed">
          <Link
            href={property.listingHref}
            className="text-blue-700 hover:underline"
          >
            {property.listingLabel}
          </Link>
          {" · "}
          <a
            href={property.airbnbHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:underline"
          >
            {property.airbnbLabel}
          </a>
        </p>
      </div>
    </article>
  );
}

function PropertyGrid({ properties }: { properties: StayProperty[] }) {
  return (
    <div className="not-prose grid gap-6 sm:grid-cols-2 mt-6 mb-4">
      {properties.map((property) => (
        <PropertyCard key={property.name} property={property} />
      ))}
    </div>
  );
}

function BookingCta({ label }: { label: string }) {
  return (
    <div className="not-prose my-8">
      <BookWhistlerWinterButton variant="primary" label={label} />
    </div>
  );
}

export default function WhistlerSnowReportNovember23Content() {
  return (
    <article
      className="prose prose-lg max-w-none text-gray-800 prose-headings:text-gray-900 prose-headings:font-bold prose-p:leading-[1.75] prose-li:my-1 prose-headings:scroll-mt-28 prose-a:text-blue-700"
      lang="en-CA"
    >
      <p className="not-prose text-lg sm:text-xl text-gray-800 leading-relaxed mb-6">
        <strong>
          Snow is building in Whistler, Blackcomb is open, and more alpine
          snowfall is in the forecast.
        </strong>{" "}
        The 2026–2027 ski season is underway, with Whistler Mountain scheduled
        to join Blackcomb on November 25, conditions permitting.{" "}
        <SourceRef n={2} />
      </p>

      <TextBlock>
        <p>
          There is a particular kind of excitement at the start of a Whistler
          winter. Ski boots come out of storage, the first turns feel
          surprisingly good, and every fresh forecast gets a little more
          attention than it probably should.
        </p>
        <p>
          This year, there is plenty to talk about. A powerful El Niño is
          influencing the Pacific, an exceptionally early polar vortex
          disruption has added another twist, and Whistler&apos;s high mountain
          terrain gives skiers a much more useful story to follow than a weather
          icon for the Village alone.
        </p>
        <p>
          At AceHost, we are excited about the winter ahead. Here is what the
          latest snow report actually says, why the November 10 weather
          development matters, and where to stay when you are ready to make a
          Whistler trip happen.
        </p>
      </TextBlock>

      <SectionHeader id="snow-now">
        How is the snow in Whistler right now?
      </SectionHeader>
      <TextBlock>
        <p>
          As of the resort&apos;s{" "}
          <strong>5:12 AM PST report on November 23, 2026</strong>, Whistler
          Blackcomb reported the following conditions. These are the
          resort&apos;s reporting measurements, with coverage varying across the
          mountain. <SourceRef n={1} />
        </p>
      </TextBlock>

      <SnapshotTable
        caption="Reported snow conditions, November 23, 2026"
        headers={["Measure", "Reported amount or status"]}
        rows={SNOW_ROWS.map((row) => [row.measure, row.value])}
      />

      <TextBlock>
        <p>
          Blackcomb opened on November 20. The resort&apos;s published schedule
          lists November 25 for Whistler Mountain, Creekside Gondola and PEAK 2
          PEAK, subject to conditions. On November 23, mandatory gondola
          downloading is in effect, so visitors should plan around the terrain
          and access currently operating. <SourceRef n={2} />{" "}
          <SourceRef n={3} />
        </p>
        <p>
          For anyone arriving soon, the{" "}
          <a
            href={SOURCE_LINKS.snowReport}
            target="_blank"
            rel="noopener noreferrer"
          >
            official Whistler Blackcomb snow report
          </a>
          ,{" "}
          <a
            href={SOURCE_LINKS.liftStatus}
            target="_blank"
            rel="noopener noreferrer"
          >
            live lift status
          </a>{" "}
          and{" "}
          <a
            href={SOURCE_LINKS.elevation}
            target="_blank"
            rel="noopener noreferrer"
          >
            mountain webcams
          </a>{" "}
          are the most useful final checks before heading out.
        </p>
      </TextBlock>

      <SectionHeader id="alpine-forecast">
        More snow is in the Whistler alpine forecast
      </SectionHeader>
      <TextBlock>
        <p>
          The encouraging near-term development is a series of Pacific weather
          systems. Tourism Whistler&apos;s alpine forecast, supplied by RWDI and
          issued at <strong>3 PM Pacific on November 23</strong>, predicts
          further mountain snowfall during the week. <SourceRef n={4} />
        </p>
      </TextBlock>

      <SnapshotTable
        caption="Forecast snowfall, not snowfall already received"
        headers={["Forecast day", "Alpine accumulation", "Freezing level"]}
        rows={FORECAST_ROWS.map((row) => [
          row.period,
          row.snow,
          row.freezingLevel,
        ])}
      />

      <TextBlock>
        <p>
          That is a welcome opportunity for the base to build. The same forecast
          flags strong ridge winds and uncertainty in the amounts, while higher
          freezing levels can bring wetter conditions lower down. Keep an eye on
          the latest update as each system approaches. <SourceRef n={4} />
        </p>
      </TextBlock>

      <IllustrationFigure
        slug="03-whistler-glades-fresh-snow"
        alt="AI-generated illustration of a skier among snow-covered evergreens inspired by Whistler glades."
        caption={ILLUSTRATION_CAPTION}
      />

      <SectionHeader id="polar-vortex">
        The November 10 polar vortex development, and why it is so unusual
      </SectionHeader>
      <TextBlock>
        <p>
          The polar vortex story has a real scientific basis. In its November 19
          outlook, the U.S. National Weather Service dates{" "}
          <strong>
            sudden stratospheric warming conditions to November 10, 2026
          </strong>
          . It describes this as only the third November occurrence in records
          beginning in 1958, following November events in 1968 and 2025, and the
          earliest occurrence in that record. <SourceRef n={5} />
        </p>
        <p>
          In plain language, the stratospheric polar vortex is a circulation of
          strong winds high above the Arctic. A sudden warming can weaken or
          disrupt that circulation, with possible effects on the weather below
          over subsequent days and weeks. The word &quot;warming&quot; refers to
          the stratosphere, so it does not simply mean warmer weather on a ski
          slope. <SourceRef n={6} />
        </p>
        <p>
          For winter watchers, the unusually early timing makes this season
          especially interesting. It introduces another influence alongside El
          Niño, with the potential to change how weather patterns evolve.
        </p>
        <p>
          The local outcome still depends on how those changes develop. The
          National Weather Service also reported that the vortex was recovering,
          and the November event does not establish a season-long cold forecast
          for Whistler. <SourceRef n={5} />
        </p>
      </TextBlock>

      <SectionHeader id="el-nino">
        What does a &quot;super El Niño&quot; mean for Whistler in 2026–2027?
      </SectionHeader>
      <TextBlock>
        <p>
          &quot;Super El Niño&quot; is the informal phrase attracting attention.
          NOAA&apos;s November 12 discussion uses the description{" "}
          <strong>strong-to-very-strong El Niño</strong>, with a greater than
          79% chance of those conditions continuing through January–March 2027.
          The pattern involves unusually warm water in the central and eastern
          equatorial Pacific and changes in the atmosphere above it.{" "}
          <SourceRef n={7} />
        </p>
        <p>
          Canadian climate scientists identify an increased likelihood of a
          milder winter across much of western Canada. Their assessment also
          notes that some coastal parts of British Columbia have been wetter
          during previous very strong events. The local balance of rain and snow
          depends on the weather arriving with each system.{" "}
          <SourceRef n={8} />
        </p>
        <p>
          El Niño and the polar vortex interact. NOAA&apos;s scientific
          explanation describes how El Niño can itself influence the
          stratospheric circulation, so there is no simple calculation in which
          one cancels the other. <SourceRef n={6} />
        </p>
        <p>
          For a ski holiday, the practical questions are much closer to the
          mountain. Where is the freezing level? How much snow is falling at ski
          elevation? Which lifts and runs are open? Those are the details that
          shape your days on snow.
        </p>
        <p>
          Our{" "}
          <Link href={SOURCE_LINKS.winterOutlook}>
            Whistler winter 2026/2027 outlook
          </Link>{" "}
          explores the wider seasonal picture. This November update adds the
          latest resort report and the new polar vortex development.
        </p>
      </TextBlock>

      <SectionHeader id="elevation">
        Why Whistler&apos;s elevation gives skiers more to work with
      </SectionHeader>
      <TextBlock>
        <p>
          A Whistler weather forecast needs some vertical perspective. The
          resort&apos;s official webcam elevations show just how far the ski
          experience extends above the Village. <SourceRef n={9} />
        </p>
      </TextBlock>

      <SnapshotTable
        caption="Key Whistler Blackcomb elevations"
        headers={["Location", "Elevation"]}
        rows={ELEVATION_ROWS.map((row) => [row.location, row.elevation])}
      />

      <TextBlock>
        <p>
          When the rain-snow transition sits between the valley and the upper
          mountain, the alpine can receive snow while lower elevations
          experience rain. That is why a rainy Village webcam, or a weather
          forecast for Vancouver, gives only part of the picture.
        </p>
        <p>
          The same principle explains why lower coastal ski areas can face
          different conditions during a mild storm. Whistler&apos;s advantage is
          the substantial height of its upper terrain. Warm systems can still
          reach high elevations, and wind or coverage can affect access, so we
          follow the mountain forecast closely.
        </p>
      </TextBlock>

      <IllustrationFigure
        slug="04-whistler-gondola-mountain-view"
        alt="AI-generated illustration of a view through a gondola window over snowy forest and a mountain valley inspired by Whistler."
        caption={ILLUSTRATION_CAPTION}
      />

      <SectionHeader id="snow-history">
        Whistler has delivered a snowy winter during a very strong El Niño
        before
      </SectionHeader>
      <TextBlock>
        <p>
          There is a particularly encouraging example in Whistler&apos;s own
          snow history. Tourism Whistler records{" "}
          <strong>
            1,257 cm, or 12.57 metres, from November 2015 through May 2016
          </strong>
          . The World Meteorological Organization classified that El Niño as
          very strong. <SourceRef n={10} /> <SourceRef n={11} />
        </p>
        <p>
          That season is a useful reminder of the range of possible outcomes. A
          powerful El Niño and substantial Whistler snowfall have occurred
          together. It does not predict the total for 2026–2027, but it gives
          skiers a good reason to keep following the mountain rather than
          letting one seasonal headline decide the trip.
        </p>
      </TextBlock>

      <IllustrationFigure
        slug="05-whistler-groomed-run-morning"
        alt="AI-generated illustration of a freshly groomed ski run in morning light inspired by Whistler."
        caption={ILLUSTRATION_CAPTION}
      />

      <SectionHeader id="winter-outlook">
        Why we are looking forward to winter 2026–2027
      </SectionHeader>
      <TextBlock>
        <p>
          There are several reasons we feel optimistic about the skiing
          opportunities ahead.
        </p>
        <p>
          <strong>Whistler offers a remarkable range of terrain.</strong> Across
          its two mountains, the resort lists 8,171 acres and more than 200
          marked runs. As snow coverage builds and terrain opens, that variety
          gives different abilities plenty to explore. Those figures describe
          the full resort, with the available terrain changing through the
          season. <SourceRef n={12} />
        </p>
        <p>
          <strong>
            There are encouraging patterns to watch into December.
          </strong>{" "}
          Dr. Judah Cohen&apos;s November 23 AER outlook points toward a
          possible cooler turn along Canada&apos;s west coast the following
          week. It is a broad, experimental regional outlook, with the local
          details still to be resolved, but it adds interest as December
          approaches. <SourceRef n={13} />
        </p>
        <p>
          <strong>
            The holiday can be excellent from the first coffee to the last run.
          </strong>{" "}
          We love the combination of mountain mornings, relaxed lunches, a walk
          through the Village and an evening back at a beautiful home. Give
          yourself several ski days, leave some room to adjust the plan, and
          choose a location that suits the way your group wants to spend its
          time.
        </p>
        <p>
          Our view is straightforward. There is plenty of winter still to come,
          and Whistler has the mountain scale, elevation and holiday setting to
          make it a very exciting one. We are looking forward to helping guests
          make the most of it.
        </p>
      </TextBlock>

      <IllustrationFigure
        slug="02-whistler-village-winter-stroll"
        alt="AI-generated illustration of a snowy Whistler-inspired village stroll with warm lights."
        caption={ILLUSTRATION_CAPTION}
      />

      <TextBlock>
        <p>
          For your time away from the slopes, our{" "}
          <Link href={SOURCE_LINKS.winterActivities}>
            Whistler winter activities guide
          </Link>{" "}
          has ideas for adding a little variety to the week.
        </p>
      </TextBlock>

      <IllustrationFigure
        slug="06-whistler-forest-winter-walk"
        alt="AI-generated illustration of a snowy forest footbridge and winter walking trail inspired by Whistler."
        caption={ILLUSTRATION_CAPTION}
      />

      <SectionHeader id="where-to-stay">
        Beautiful places to stay for your Whistler winter
      </SectionHeader>
      <TextBlock>
        <p>
          Your ideal Whistler home might put ski access first, keep you close to
          the Village, or give the whole family space to gather. These AceHost
          options offer different ways to enjoy the season.
        </p>
        <p>
          <strong>
            Ski access depends on snow coverage and open connecting terrain.
          </strong>{" "}
          The access descriptions below refer to the properties&apos; winter
          locations. For an early-season stay, we can help you understand the
          practical route to the lifts for your dates.
        </p>
      </TextBlock>

      <IllustrationFigure
        slug="07-whistler-chalet-winter-concept"
        alt="AI-generated illustration of a fictional Whistler-style chalet surrounded by snow."
        caption={CHALET_CAPTION}
      />

      <SubSectionTitle>Ski-in, ski-out and mountainside stays</SubSectionTitle>
      <PropertyGrid properties={SKI_ACCESS_PROPERTIES} />

      <SubSectionTitle>
        Village stays for easy mornings and evenings
      </SubSectionTitle>
      <PropertyGrid properties={VILLAGE_PROPERTIES} />

      <SubSectionTitle>
        Room for the family, a short drive from the Village
      </SubSectionTitle>
      <PropertyGrid properties={DRIVE_PROPERTIES} />

      <BookingCta label="Explore dates and book your Whistler stay direct" />

      <SectionHeader id="snow-faq">
        Quick answers about Whistler snow this winter
      </SectionHeader>
      <SubSectionTitle>Is Whistler Blackcomb open right now?</SubSectionTitle>
      <p>
        Blackcomb Mountain opened on November 20, 2026. Whistler Mountain is
        scheduled for November 25, conditions permitting. Check live operations
        before travelling to the lifts. <SourceRef n={3} />
      </p>
      <SubSectionTitle>
        Does El Niño mean Whistler will have poor snow all winter?
      </SubSectionTitle>
      <p>
        It raises the odds of certain seasonal weather patterns, but it does not
        determine every storm or ski day. Whistler&apos;s 2015–2016 snowfall is
        a useful example of a substantial snow season during a very strong El
        Niño. <SourceRef n={7} /> <SourceRef n={10} /> <SourceRef n={11} />
      </p>
      <SubSectionTitle>
        Will the polar vortex shift make Whistler colder?
      </SubSectionTitle>
      <p>
        It could influence the broader circulation, but the effect on Whistler
        is uncertain. The November event is a reason to watch the evolving
        forecast, rather than a confirmed local cold forecast.{" "}
        <SourceRef n={6} />
      </p>
      <SubSectionTitle>
        Can I ski back to my accommodation in November?
      </SubSectionTitle>
      <p>
        It depends on the property and open terrain. On November 23, the resort
        requires gondola downloading. Confirm the current access arrangement for
        your chosen home and travel dates. <SourceRef n={3} />
      </p>
      <SubSectionTitle>
        Where can I see the latest Whistler snow conditions?
      </SubSectionTitle>
      <p>
        Start with the{" "}
        <a
          href={SOURCE_LINKS.snowReport}
          target="_blank"
          rel="noopener noreferrer"
        >
          official resort snow report
        </a>
        , then check the{" "}
        <a
          href={SOURCE_LINKS.elevation}
          target="_blank"
          rel="noopener noreferrer"
        >
          mountain webcams
        </a>{" "}
        and{" "}
        <a
          href={SOURCE_LINKS.liftStatus}
          target="_blank"
          rel="noopener noreferrer"
        >
          live lift and terrain status
        </a>
        . This article is a dated November 23 update.
      </p>

      <SectionHeader id="plan-your-stay">
        Make this winter a Whistler winter
      </SectionHeader>
      <TextBlock>
        <p>
          The season has begun, the alpine forecast has our attention, and this
          year&apos;s unusual atmosphere gives winter watchers plenty to follow.
          We are excited about the ski days ahead and the holidays being planned
          around them.
        </p>
        <p>
          Whether you picture a family gathering at a Kadenwood estate, a
          Blackcomb penthouse with ski access, or a Village home close to dinner
          and coffee, the AceHost team would love to help you find the right
          fit. Our concierge team can also help coordinate airport transfers,
          rental equipment, lessons, private chefs and the details that make the
          week feel easy.
        </p>
      </TextBlock>

      <BookingCta label="Check availability for winter 2026–2027" />

      <TextBlock>
        <p>
          Prefer to explore first?{" "}
          <Link href="/properties">
            Browse the full AceHost Whistler collection
          </Link>{" "}
          and send us the homes that catch your eye.
        </p>
      </TextBlock>

      <SectionHeader id="sources">Sources and report notes</SectionHeader>
      <TextBlock>
        <p>
          This update separates observed snow, dated forecasts, historical
          context and AceHost&apos;s travel perspective. Rolling weather pages
          may now show later information. AI-generated winter scenes are
          labelled in their captions. Property images come from the existing
          AceHost galleries and are not dated snow-condition photographs.
        </p>
      </TextBlock>
      <ol className="mt-6 space-y-3 list-decimal pl-6">
        {SOURCES.map((source) => (
          <li key={source.id} id={`source-${source.id}`}>
            <a href={source.href} target="_blank" rel="noopener noreferrer">
              {source.title}
            </a>
            . {source.note}
          </li>
        ))}
      </ol>
      <p className="mt-6">
        Earlier update:{" "}
        <Link href={SOURCE_LINKS.octoberReport}>
          Whistler snow report, October 28, 2026
        </Link>
        .
      </p>
    </article>
  );
}
