import "./globals.css";
import "./style.css";
import { LanguageProvider } from "./i18n/LanguageContext";

export const metadata = {
  title: "BuildNaro - House Construction Cost Calculator",
  description: "Estimate your house construction cost in 30 seconds.",
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
