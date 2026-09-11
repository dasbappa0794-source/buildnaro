import "./globals.css";
import "./style.css";
import { LanguageProvider } from "./i18n/LanguageContext";

export const metadata = {
  title: "Construction Cost Calculator India | BuildNaro",
  description: "Free construction cost calculator for India. Estimate material, labour, transport and total building cost by area, floors and construction type — Basic, Standard or Premium.",
  keywords: "construction cost calculator india, building cost estimator, construction cost per sq ft, material rate guide, BOQ calculator",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8305568320429251" crossOrigin="anonymous"></script>
        <meta name="google-adsense-account" content="ca-pub-8305568320429251" />
      </head>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
