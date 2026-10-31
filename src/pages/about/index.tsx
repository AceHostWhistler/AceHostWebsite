import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

export default function AboutRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/our-story");
  }, [router]);

  return (
    <>
      <Head>
        <title>About us | AceHost Whistler Luxury Vacation Rentals</title>
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://acehost.ca/our-story" />
      </Head>
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg">Redirecting to About us...</p>
      </div>
    </>
  );
}
