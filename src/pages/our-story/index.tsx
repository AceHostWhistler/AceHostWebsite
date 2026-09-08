import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight, ChevronDown } from "lucide-react";
import { TRUST_STATS } from "@/data/listPropertyContent";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  initials: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Ben Kirsh",
    role: "Founder & CEO",
    initials: "BK",
    bio: "Hi, I'm Ben, a Whistler local who has spent almost my whole life between Whistler and Vancouver. Having lived here since I was born, I have witnessed the changes and rapid growth the area has seen in recent years. I enjoy sharing my insider knowledge and contacts with guests so they can truly maximize their experiences here in Whistler. I enjoy connecting in English, Spanish, or French. Like most Whistler locals, I love the outdoors and the beautiful scenery our town offers.\n\nPrior to playing semi-professional tennis, competing at the NCAA collegiate level and achieving All-American status, I was a member of the Whistler Ski Racing team, where I had the opportunity to participate in the famed Whistler Cup events. I enjoy going on road trips, exploring new lakes/mountains all around beautiful BC. Above all, I enjoy my food, so please ask me for recommendations.\n\nMy goal for AceHost is to provide homeowners with a seamless and profitable venture while providing guests with an unforgettable vacation. I am always around to answer any questions, and if time permits, to hit the slopes with guests.",
  },
  {
    name: "Max Korkh",
    role: "Director of Operations & Concierge Team",
    initials: "MK",
    bio: "Hi there! My name is Max and I'm a North Shore local. Born in Vancouver, I've spent most of my life living between Vancouver and Moscow, where my family is originally from. AceHost brought me to Whistler in 2023, although I've enjoyed many skiing holidays here in the past. I'm looking forward to making the most of ample outdoor activities that Whistler has to offer all year round.\n\nSimilar to Ben, I grew up playing tennis from the age of 5. After playing pro events and NCAA division 1 at the University of Montana, I stayed active in the tennis community, working as a club professional and the Director of Events at Tennis BC. I still love to smack that fuzzy yellow ball from time to time. When I'm not on court, I love to travel, ski, road bike and dine out.\n\nMy goal at AceHost is to deliver a first-rate experiences for both guests and homeowners. As our business ventures to new heights, it's important that we focus on small details in customer service, communication and administration to ensure healthy, sustainable growth.",
  },
  {
    name: "Emma Curto",
    role: "Lead Property Manager",
    initials: "EC",
    bio: "Hi, I'm Emma! I'm originally from Ancaster, Ontario, and I moved to Whistler in the spring of 2019. From the moment I arrived, I knew this place was special and would become my forever home. Spring is one of my favourite seasons here because you can snowboard in a T-shirt, play a full 18 holes of golf, and even go for a hike all in the same day if you're up for it!\n\nWith over ten years of experience in luxury customer service and retail, I've had the privilege of working in many parts of Whistler. This has allowed me to build meaningful connections with the incredible local community that makes this town so unique.\n\nOutside of work, you'll often find me hiking in the alpine or snowboarding with friends. I'm also passionate about travel and have explored destinations such as Italy, Spain, Hawaii, and New Zealand. My experiences have ranged from tent camping in Hana, Hawaii to enjoying five-star accommodations in the mountains of Banff, Alberta. These journeys have shown me how much thoughtful details can shape lasting memories.\n\nWhat I love most about my work is creating genuine relationships and hearing from guests about how much they enjoyed their time in Whistler. I take pride in ensuring your experience with AceHost is seamless, personalized, and truly memorable. I can't wait to welcome you to Whistler!",
  },
];

const values = [
  {
    title: "Excellence",
    description:
      "We strive for excellence in every aspect of our service, from property selection to guest experience.",
  },
  {
    title: "Integrity",
    description:
      "Honesty and transparency are fundamental to our relationships with both property owners and guests.",
  },
  {
    title: "Innovation",
    description:
      "We continuously seek innovative ways to enhance the vacation rental experience in Whistler.",
  },
  {
    title: "Personal Touch",
    description:
      "Personalized service is what sets us apart in the luxury vacation rental market.",
  },
];

function TeamMemberCard({ member }: { member: TeamMember }) {
  const [expanded, setExpanded] = useState(false);
  const paragraphs = member.bio.split("\n\n");
  const preview = paragraphs[0];
  const rest = paragraphs.slice(1);

  return (
    <article className="rounded-2xl bg-white ring-1 ring-stone-200 overflow-hidden transition-shadow hover:shadow-md">
      <div className="p-6 sm:p-8">
        <div className="flex items-start gap-4 mb-5">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-stone-950 text-sm font-bold text-white">
            {member.initials}
          </div>
          <div>
            <h3 className="text-xl font-bold text-stone-950">{member.name}</h3>
            <p className="text-sm font-medium text-stone-500 mt-0.5">
              {member.role}
            </p>
          </div>
        </div>

        <p className="text-[15px] leading-relaxed text-stone-700">{preview}</p>

        {rest.length > 0 && (
          <>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                expanded ? "max-h-[2000px] opacity-100 mt-4" : "max-h-0 opacity-0"
              }`}
            >
              {rest.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-[15px] leading-relaxed text-stone-700 mb-4 last:mb-0"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-stone-950 hover:text-stone-600 transition-colors"
            >
              {expanded ? "Show less" : "Read more"}
              <ChevronDown
                className={`h-4 w-4 transition-transform ${expanded ? "rotate-180" : ""}`}
              />
            </button>
          </>
        )}
      </div>
    </article>
  );
}

const OurStory = () => {
  return (
    <div className="min-h-screen bg-white text-stone-900">
      <Head>
        <title>Our Story | AceHost Whistler Luxury Vacation Rentals</title>
        <meta
          name="description"
          content="Learn about the AceHost team and our mission to provide exceptional luxury vacation rental experiences in Whistler."
        />
        <link rel="canonical" href="https://www.acehost.ca/our-story" />
      </Head>

      <Navigation transparent={false} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-stone-950 text-white">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_75%_0%,rgba(255,255,255,0.06),transparent_55%)]"
          aria-hidden
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-stone-400 mb-4">
                About AceHost
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight leading-[1.08] mb-5">
                Whistler locals building exceptional stays
              </h1>
              <p className="text-base sm:text-lg text-stone-300 leading-relaxed max-w-xl mb-8">
                Dedicated to luxury vacation rentals and full-service property
                management in Whistler since 2018, for guests who expect more,
                and homeowners who expect results.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-stone-950 transition-colors hover:bg-stone-100"
              >
                Contact our team
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="lg:col-span-7">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/15 aspect-[4/3] lg:aspect-video">
                <Image
                  src="/photos/homepage/WhistlerVacationRental.jpg"
                  alt="Whistler mountain view, AceHost luxury vacation rentals"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-b border-gray-100 bg-white py-8 sm:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
            {TRUST_STATS.map((stat) => (
              <li key={stat.label} className="text-center">
                <p className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-950">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-stone-500">{stat.label}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* About */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-stone-500 mb-3">
                Our mission
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-950 mb-6">
                The best guest experience. A profitable home for owners.
              </h2>
              <div className="space-y-5 text-[15px] sm:text-base text-stone-600 leading-relaxed">
                <p>
                  AceHost was founded on a simple principle: provide the best
                  luxury vacation rental experience while offering homeowners a
                  profitable investment. We started with a small portfolio of
                  premium properties in Whistler and have grown into one of the
                  most trusted names in Whistler luxury accommodations.
                </p>
                <p>
                  Our team&apos;s deep knowledge of Whistler and passion for
                  hospitality allows us to offer personalized service that simply
                  cannot be matched. We carefully select each property in our
                  collection and work with homeowners to elevate standards,
                  leading to better guest satisfaction, repeat bookings, and
                  stronger returns.
                </p>
                <p>
                  Beyond beautiful homes and property management, we offer
                  comprehensive concierge services, private chefs, ski pass
                  delivery, restaurant reservations, transport, and exclusive
                  experiences, so every stay feels effortless and memorable.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/properties"
                  className="inline-flex items-center rounded-lg bg-stone-950 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-stone-800"
                >
                  Browse properties
                </Link>
                <Link
                  href="/list-property"
                  className="inline-flex items-center rounded-lg border border-stone-300 px-6 py-3 text-sm font-semibold text-stone-900 transition-colors hover:bg-stone-50"
                >
                  List your home
                </Link>
              </div>
            </div>
            <div className="relative aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5] rounded-2xl overflow-hidden shadow-lg ring-1 ring-stone-200">
              <Image
                src="/high-quality/property-gallery/3445-Heron-Place/20241125 A7M3 02 A1_05891.webp"
                alt="AceHost luxury Whistler vacation rental"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 sm:py-24 bg-stone-100 border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-stone-500 mb-3">
              The people behind AceHost
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-950 mb-4">
              Meet our team
            </h2>
            <p className="text-stone-600 leading-relaxed">
              Passionate Whistler hospitality professionals dedicated to
              exceptional experiences for guests and property owners alike.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member) => (
              <TeamMemberCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-stone-500 mb-3">
              What guides us
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-950 mb-4">
              Our values
            </h2>
            <p className="text-stone-600 leading-relaxed">
              The principles behind every property we manage and every guest we
              welcome.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-stone-200 bg-stone-50 p-8 hover:shadow-sm transition-shadow"
              >
                <h3 className="text-xl font-bold text-stone-950 mb-3">
                  {value.title}
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-24 bg-stone-950 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-5">
            Join our journey
          </h2>
          <p className="text-lg text-stone-300 leading-relaxed mb-10">
            Whether you&apos;re planning a luxury stay, listing your Whistler
            home, or exploring our concierge services, we&apos;d love to hear
            from you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link
              href="/properties"
              className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-3.5 text-sm font-semibold text-stone-950 transition-colors hover:bg-stone-100"
            >
              Browse properties
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg border border-white/30 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OurStory;
