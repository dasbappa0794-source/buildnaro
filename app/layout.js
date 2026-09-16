import "./globals.css";
import "./style.css";
import Script from "next/script";
import { LanguageProvider } from "./i18n/LanguageContext";
const SITE_URL = "https://buildnaro.vercel.app";
export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "BuildNaro — Free Construction Cost Calculator for India", template: "%s | BuildNaro" },
  description: "Free construction cost calculator for India. Estimate material, labour, transport and total building cost by area, floors, state and construction type — download as JPG, Excel or PDF.",
  keywords: ["construction cost calculator india","building cost estimator","construction cost per sq ft","material rate guide","BOQ calculator","house construction cost","home building estimate calculator"],
  applicationName: "BuildNaro",
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  verification: { google: "4fIU3ImfngTZFkD7qE2dn4ke_kN92LFf17EDah-UMOE" },
  openGraph: { type: "website", siteName: "BuildNaro", title: "BuildNaro — Free Construction Cost Calculator for India", description: "Estimate house construction cost by area, BOQ materials, labour, transport and state — download as JPG, Excel or PDF. Free, no sign-up.", url: SITE_URL, locale: "en_IN" },
  twitter: { card: "summary_large_image", title: "BuildNaro — Free Construction Cost Calculator for India", description: "Estimate house construction cost by area, BOQ materials, labour, transport and state — free, no sign-up." },
};
export const viewport = { width: "device-width", initialScale: 1 };
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>{children}</LanguageProvider>
        <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8305568320429251" crossOrigin="anonymous" strategy="afterInteractive" />
      </body>
    </html>
  );
}
