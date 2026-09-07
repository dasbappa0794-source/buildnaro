'use client'

export default function LanguageSwitcher() {
  const languages = [
    { code: 'bn', native: 'বাংলা' },
    { code: 'en', native: 'English' }
  ];

  return (
    <select aria-label="Choose language">
      {languages && languages.map((l) => (
        <option key={l.code} value={l.code}>
          {l.native}
        </option>
      ))}
    </select>
  );
}
