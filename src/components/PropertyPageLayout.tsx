import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";

interface PropertyPageLayoutProps {
  children: React.ReactNode;
}

const PropertyPageLayout: React.FC<PropertyPageLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-cream text-charcoal overflow-x-hidden">
      <Navigation transparent={false} />
      <main className="relative pt-6 pb-20 md:pt-8 md:pb-28">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default PropertyPageLayout;
