import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BlogRelatedArticles from "@/components/BlogRelatedArticles";

const SustainableLuxury = () => {
  const currentArticleLink = "/post/behind-the-curtain-at-acehost-sustainable-luxury-property-management-in-whistler-bc";

  // ... existing code ...

  return (
    <>
      <Head>
        <title>
          Behind the Curtain at AceHost: Sustainable Luxury Property Management in Whistler BC | AceHost
        </title>
        <meta
          name="description"
          content="Discover how AceHost combines sustainability with luxury in our property management approach. Learn about our eco-friendly practices that enhance guest experiences while preserving Whistler's natural beauty."
        />
      </Head>

      <div className="min-h-screen bg-white">
        <Navigation transparent={false} />

        <main className="pt-20">
          // ... existing code ...

          {/* Related Articles */}
          <div className="max-w-5xl mx-auto px-4 sm:px-6 mb-20">
            <BlogRelatedArticles currentArticleLink={currentArticleLink} />
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default SustainableLuxury; 