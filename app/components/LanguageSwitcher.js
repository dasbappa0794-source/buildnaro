'use client';

import { useLanguage } from "../i18n/LanguageContext";

export default function LanguageSwitcher({ className }) {
  const { lang, setLang, languages } = useLanguage();
  return (
    <select
      className={className || "lang-switcher"}
      value={lang}
      onChange={(e) => setLang(e.target.value)}
      aria-label="Choose language"
    >
      {languages.map((l) => (
        <option key={l.code} value={l.code}>{l.native}</option>
      ))}
    </select>
  );
}
