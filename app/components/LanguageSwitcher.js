'use client';

import { useLanguage } from "../i18n/LanguageContext";

export default function LanguageSwitcher() {
  const { lang, setLang, languages } = useLanguage();

  return (
    <select
      aria-label="Choose language"
      value={lang}
      onChange={(e) => setLang(e.target.value)}
    >
      {languages && languages.map((l) => (
        <option key={l.code} value={l.code}>
          {l.native}
        </option>
      ))}
    </select>
  );
}
