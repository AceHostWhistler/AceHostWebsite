import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Preconnect to domains for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Font optimization - using preload instead of stylesheet to avoid render blocking */}
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          fetchPriority="high"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
          media="print"
          onLoad={() => {
            // @ts-ignore - This is a DOM element property
            document.currentScript.media = 'all';
          }}
        />
        <noscript>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </noscript>
        
        <style
          dangerouslySetInnerHTML={{
            __html: `
              /* Font display optimization */
              @font-face {
                font-family: 'Inter';
                font-style: normal;
                font-weight: 300;
                font-display: swap;
              }
              @font-face {
                font-family: 'Inter';
                font-style: normal;
                font-weight: 400;
                font-display: swap;
              }
              @font-face {
                font-family: 'Inter';
                font-style: normal;
                font-weight: 500;
                font-display: swap;
              }
              @font-face {
                font-family: 'Inter';
                font-style: normal;
                font-weight: 600;
                font-display: swap;
              }
              @font-face {
                font-family: 'Inter';
                font-style: normal;
                font-weight: 700;
                font-display: swap;
              }
            `,
          }}
        />

        {/* Preload critical assets */}
        <link rel="preload" href="/logo.png" as="image" type="image/png" />

        {/* Add favicon */}
        <link rel="icon" href="/favicon.ico" />
        
        {/* Additional metadata for search engines */}
        <meta name="application-name" content="AceHost Whistler" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
        
        {/* OpenGraph metadata for social sharing and search results */}
        <meta property="og:site_name" content="AceHost Whistler" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://acehost.ca/logo.png" />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
        <meta property="og:image:alt" content="AceHost Whistler Logo" />
        
        {/* Twitter Card data */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:image" content="https://acehost.ca/logo.png" />

        {/* Enable DNS prefetching */}
        <meta httpEquiv="x-dns-prefetch-control" content="on" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
