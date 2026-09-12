import Head from "next/head";

interface PageCoverBackgroundProps {
  src: string;
}

export default function PageCoverBackground({ src }: PageCoverBackgroundProps) {
  return (
    <>
      <Head>
        <link rel="preload" as="image" href={src} />
      </Head>
      <img
        src={src}
        alt=""
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover object-center brightness-[0.55] animate-kenburns motion-reduce:animate-none"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-stone-950/60 via-stone-950/40 to-stone-950/75"
        aria-hidden="true"
      />
      <div className="film-grain absolute inset-0" aria-hidden="true" />
    </>
  );
}
