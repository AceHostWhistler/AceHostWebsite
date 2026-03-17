import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";

interface HomePageLayoutProps {
  children: React.ReactNode;
}

const HomePageLayout: React.FC<HomePageLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-cream text-charcoal">
      <Navigation transparent={false} />
      <main className="relative">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default HomePageLayout;
