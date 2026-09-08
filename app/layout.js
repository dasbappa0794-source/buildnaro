import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "BuildNaro - House Construction Cost Calculator",
  description: "Estimate your house construction cost in 30 seconds.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
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
