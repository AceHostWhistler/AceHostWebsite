import React from "react";
import Head from "next/head";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const GolfCourseViews = () => {
  return (
    <>
      <Head>
        <title>Golf Course Views | Luxury 4-bed Whistler Village - AceHost</title>
        <meta
          name="description"
          content="Experience luxury at Golf Course Views in Whistler."
        />
      </Head>

      <div className="min-h-screen bg-white">
        <Navigation transparent={false} />

        <main className="max-w-6xl mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-6">Golf Course Views | Luxury 4-bed Whistler Village</h1>
          
          <p className="mb-4">
            This cozy, standalone chalet sits right on Nicklaus North Golf Course with stunning views of Hole 14. 
            Enjoy a private hot tub, media room, wood-burning fireplace, and chef's kitchen.
          </p>
          
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Property Details</h2>
            <ul className="list-disc pl-5">
              <li>9 Guests</li>
              <li>4 Bedrooms</li>
              <li>3.5 Bathrooms</li>
              <li>Private Hot Tub</li>
              <li>Wood-burning Fireplace</li>
              <li>Chef's Kitchen</li>
              <li>Media Room</li>
            </ul>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default GolfCourseViews;

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      ...(await serverSideTranslations(context.locale || "en", ["common"])),
    },
  };
};