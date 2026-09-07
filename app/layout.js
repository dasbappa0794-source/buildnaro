export const metadata = {
  title: "BuildNaro — Free Online Tools",
  description: "Smart construction calculators and online tools.",
};

import "./style.css";
import { LanguageProvider } from "./i18n/LanguageContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
