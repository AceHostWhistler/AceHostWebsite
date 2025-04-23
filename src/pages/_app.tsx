import React, { useEffect } from 'react';
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import { appWithTranslation } from "next-i18next";
import Head from "next/head";
import { Toaster } from 'react-hot-toast';
import { SpeedInsights } from "@vercel/speed-insights/next";

function App({ Component, pageProps }: AppProps) {
  // Add passive event listeners for better performance
  useEffect(() => {
    // Define options for passive listener
    const supportsPassive = (() => {
      let passive = false;
      try {
        const opts = Object.defineProperty({}, 'passive', {
          get: function() {
            passive = true;
            return passive;
          }
        });
        // @ts-ignore - trying to detect passive support
        window.addEventListener('testpassive', null, opts);
        // @ts-ignore - cleaning up
        window.removeEventListener('testpassive', null, opts);
      } catch (e) {}
      return passive;
    })();

    const wheelOpt = supportsPassive ? { passive: true } : false;
    const wheelEvents = ['touchstart', 'touchmove', 'mousewheel', 'wheel'];
    
    // Add passive listeners if supported by browser
    const addPassive = () => {
      wheelEvents.forEach(event => {
        window.addEventListener(event, () => {}, wheelOpt);
      });
    };

    addPassive();

    // Clean up
    return () => {
      wheelEvents.forEach(event => {
        window.removeEventListener(event, () => {});
      });
    };
  }, []);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        />
      </Head>
      <Component {...pageProps} />
      <Toaster position="top-center" />
      <Analytics />
      <SpeedInsights />
    </>
  );
}

export default appWithTranslation(App);
