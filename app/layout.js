import "./globals.css";
import "./style.css";
import Script from "next/script";
import { LanguageProvider } from "./i18n/LanguageContext";
const SITE_URL = "https://buildnaro.vercel.app";
export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "BuildNaro — Free Construction Cost Calculator for India", template: "%s | BuildNaro" },
  description: "Free construction cost calculator for India.",
  verification: { google: "4fIU3ImfngTZFkD7qE2dn4ke_kN92LFf17EDah-UMOE" },
};
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
