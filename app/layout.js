import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "BuildNaro - House Construction Cost Calculator",
  description: "Estimate your house construction cost in 30 seconds. Instant BOQ for cement, sand, bricks, steel.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* AdSense - Client ID preserved - Income safe */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8305568320429251"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <meta name="google-adsense-account" content="ca-pub-8305568320429251" />
      </head>
      <body className="antialiased bg-[#F5F1EB] text-[#111]">{children}</body>
    </html>
  );
}
