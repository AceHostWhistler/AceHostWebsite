import React from "react";
import Link from "next/link";
import {
  EL_NINO_GUIDE_PATH,
  FAQ_ITEMS,
  FORECAST_ISSUE,
  FORECAST_ROWS,
  SOURCES,
} from "@/data/blog/whistler-snow-report-october-28-2026";

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

export default function WhistlerSnowReportOctober28Content() {
  return (
    <article className="prose prose-lg max-w-none text-gray-800 prose-headings:text-gray-900 prose-headings:font-bold prose-p:leading-[1.75] prose-li:my-1 prose-headings:scroll-mt-28 prose-a:text-blue-700">
      <TextBlock>
        <p>
          Fresh October snow is giving Whistler skiers a welcome reason to look
          beyond the &quot;super El Niño&quot; headlines. Snow is being reported
          on the mountain, and the latest dated alpine forecast points to
          another cold window before a warmer spell next week.
        </p>
        <p>
          At AceHost, we see good reasons to remain optimistic about the skiing
          opportunities ahead. Whistler&apos;s elevation and its history during
          powerful El Niño winters support that view. October snowfall cannot
          settle the outlook for an entire season, but it does challenge the
          idea that this winter is already a write-off.
        </p>
      </TextBlock>

      <SectionHeader id="how-much-snow">
        How much snow has Whistler received
      </SectionHeader>
      <TextBlock>
        <p>
          Snow-Forecast&apos;s Whistler Blackcomb report, updated October 28,
          lists 10 cm of fresh snow and an upper-mountain snow depth of 20 cm.
          These are independently reported figures, not an official
          resort-certified 24-hour or season-to-date total. The report also
          describes early coverage in the upper alpine. <SourceRef n={1} />
        </p>
        <p>
          Fresh snowfall and snow depth describe different things. Depth
          reflects the snow remaining on the ground after settling, melting and
          redistribution. Those numbers should not be added together or
          presented as an accumulated snowfall total.
        </p>
        <p>
          The encouraging development is the return of snow before the ski
          season begins. This is still an early coating, with substantial
          base-building needed before terrain can open.
        </p>
      </TextBlock>

      <SectionHeader id="alpine-forecast">
        The Whistler alpine snow forecast for late October
      </SectionHeader>
      <TextBlock>
        <p>
          Tourism Whistler&apos;s RWDI alpine forecast, issued at 9:15 am
          Pacific on October 28, gives the following snapshot.{" "}
          <SourceRef n={2} />
        </p>
      </TextBlock>

      <p className="not-prose text-sm text-gray-600 mt-6 mb-3 leading-relaxed">
        {FORECAST_ISSUE}. Snow amounts are forecast accumulation, not measured
        snowfall.
      </p>
      <div className="not-prose overflow-x-auto mb-8 -mx-4 px-4 sm:mx-0 sm:px-0">
        <table className="min-w-[560px] w-full text-sm border-collapse">
          <caption className="sr-only">
            {FORECAST_ISSUE}. Snow amounts are forecast accumulation, not
            measured snowfall.
          </caption>
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-3 border border-gray-200 font-semibold">
                Forecast period
              </th>
              <th className="p-3 border border-gray-200 font-semibold">Snow</th>
              <th className="p-3 border border-gray-200 font-semibold">
                Alpine high
              </th>
              <th className="p-3 border border-gray-200 font-semibold">
                Freezing level
              </th>
            </tr>
          </thead>
          <tbody>
            {FORECAST_ROWS.map((row) => (
              <tr key={row.period}>
                <td className="p-3 border border-gray-200 whitespace-nowrap">
                  {row.period}
                </td>
                <td className="p-3 border border-gray-200">{row.snow}</td>
                <td className="p-3 border border-gray-200">{row.alpineHigh}</td>
                <td className="p-3 border border-gray-200">
                  {row.freezingLevel}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <TextBlock>
        <p>
          The Wednesday-to-Friday amounts total 16 cm in that forecast. They are
          predicted accumulation across those periods, not measured snowfall or
          16 cm guaranteed to fall after this article is read. Some forecast and
          reported snowfall windows may overlap, so we have kept them separate.
        </p>
        <p>
          A warm-up follows: the same outlook lifts freezing levels to 2,800 m
          on Monday, November 2, and 3,200 m on Tuesday, November 3. That could
          affect how much early snow survives. This is a promising cold spell,
          rather than a forecast of uninterrupted snowfall into November.
        </p>
      </TextBlock>

      <SectionHeader id="alpine-vs-village">
        Why alpine conditions matter more than village rain
      </SectionHeader>
      <TextBlock>
        <p>
          Whistler Village and the upper mountain can experience very different
          weather at the same time. The resort&apos;s elevation reference places
          the Village near 675 m, the Roundhouse around 1,850 m and the top of
          7th Heaven Express at 2,284 m. A weather forecast for the Village
          alone therefore leaves out much of the mountain skiers come to
          explore. <SourceRef n={3} />
        </p>
        <p>
          During a Pacific storm, the freezing level helps explain where snow is
          more likely to accumulate and where rain becomes a concern. A low
          freezing level can favour snow across a much larger part of the
          mountain. When it rises above the ski area, early coverage becomes
          more vulnerable.
        </p>
        <p>
          That is a useful theme from our existing winter outlook. For broader
          context, read our{" "}
          <Link href={EL_NINO_GUIDE_PATH}>
            Whistler weather forecast for winter 2026/2027 and El Niño guide
          </Link>
          . This dated report adds the late-October weather picture to that
          longer seasonal discussion.
        </p>
      </TextBlock>

      <SectionHeader id="super-el-nino">
        What a super El Niño means for Whistler
      </SectionHeader>
      <TextBlock>
        <p>
          The El Niño forecast deserves to be taken seriously. NOAA&apos;s
          October 8 discussion reports a greater than 83% chance of
          strong-to-very-strong El Niño continuing through January to March
          2027. That is a forecast of the tropical Pacific climate pattern, not
          an 83% probability of poor skiing in Whistler. <SourceRef n={4} />
        </p>
        <p>
          &quot;Super El Niño&quot; is an informal label for a very strong
          event. As the US Geological Survey explains, these events shift the
          odds of particular regional conditions without guaranteeing the
          expected outcome. A powerful El Niño can make a seasonal signal more
          important while still leaving uncertainty about individual places and
          storms. <SourceRef n={5} />
        </p>
        <p>
          Canadian climate scientists expect a milder winter across much of the
          country, and western Canada faces a greater risk of warmer, less snowy
          conditions. Their assessment also notes that every event differs and
          that some coastal British Columbia regions were wetter during previous
          very strong events. That history is useful context, not a specific
          wet-weather forecast for Whistler. <SourceRef n={6} />
        </p>
      </TextBlock>

      <SectionHeader id="el-nino-2015-2016">
        More than twelve metres in the 2015/2016 El Niño
      </SectionHeader>
      <TextBlock>
        <p>
          There is a concrete historical reason to avoid blanket pessimism.
          Tourism Whistler&apos;s snowfall table records 1,257 cm, or 12.57
          metres, for the 2015/16 season. USGS identifies 2015/16 as a very
          strong El Niño event. Substantial Whistler snowfall and a powerful El
          Niño have happened together before. <SourceRef n={7} />{" "}
          <SourceRef n={5} />
        </p>
        <p>
          That total does not tell us what 2026/27 will deliver, or what
          conditions were like on any particular holiday week in 2015/16. It
          does show why the strength of El Niño alone cannot describe every
          skier&apos;s experience over an entire winter.
        </p>
      </TextBlock>

      <SectionHeader id="memorable-snowstorms">
        Can extreme weather still bring memorable snowstorms
      </SectionHeader>
      <TextBlock>
        <p>
          El Niño alters large-scale circulation and can increase the risk of
          high-impact weather in some regions. It does not follow that a
          stronger event automatically means more Whistler powder, larger local
          temperature swings or a particular October storm. Those claims would
          require much more specific evidence. <SourceRef n={6} />
        </p>
        <p>
          What matters to snowfall is how moisture and temperature line up
          during each storm. USGS&apos;s assessment for the neighbouring
          Northwest US makes that distinction explicitly: temperatures during
          storms matter more directly for snowfall than the seasonal average.
          Its regional forecast covers Idaho, Oregon and Washington, so it
          should not be treated as a Whistler forecast. <SourceRef n={8} />
        </p>
        <p>
          For skiers, the practical lesson is to watch the sequence of weather
          systems. Cold snowstorms can still occur within an otherwise mild
          season. Warm spells can interrupt them. The timing of each storm, the
          freezing level and the snow already on the mountain will shape the
          skiing available during a particular trip.
        </p>
      </TextBlock>

      <SectionHeader id="season-ahead">
        What this means for the Whistler ski season ahead
      </SectionHeader>
      <TextBlock>
        <p>
          Whistler Blackcomb is targeting November 20, 2026 for winter opening,
          subject to weather and conditions. October snow is encouraging
          preparation for that date, but it does not mean the resort is open or
          that specific runs will be ready. <SourceRef n={9} />
        </p>
        <p>
          Our take is cautiously optimistic. Fresh snow is returning, the
          current alpine forecast offers a cold window, and Whistler has a real
          history of substantial snowfall during a very strong El Niño. Those
          are meaningful reasons to look forward to winter without promising a
          record season.
        </p>
        <p>
          For a ski holiday, give yourself time to enjoy the mountain across
          different weather days. Follow the resort&apos;s live snow report,
          open terrain and lift status as your dates approach. A seasonal
          climate headline is useful context; the conditions during your stay
          will determine the skiing.
        </p>
        <p>
          If you are planning a Whistler winter escape, AceHost can help you
          choose a home that fits your group and arrange local concierge
          services.{" "}
          <Link href="/properties">Explore our Whistler winter stays</Link> and{" "}
          <Link href="/contact">speak with our team</Link> about making the most
          of your time in the mountains.
        </p>
      </TextBlock>

      <SectionHeader id="faq">Quick answers for Whistler skiers</SectionHeader>
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

      <SectionHeader id="sources">Sources for this dated report</SectionHeader>
      <ol className="mt-6 space-y-3 list-decimal pl-6">
        {SOURCES.map((source) => (
          <li key={source.id} id={`source-${source.id}`}>
            {source.external ? (
              <a
                href={source.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {source.label}
              </a>
            ) : (
              <Link href={source.href}>{source.label}</Link>
            )}
          </li>
        ))}
      </ol>
    </article>
  );
}
