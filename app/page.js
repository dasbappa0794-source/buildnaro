'use client';

import Link from "next/link";
import "./style.css";
import { useLanguage } from "./i18n/LanguageContext";
import LanguageSwitcher from "./components/LanguageSwitcher";

const categoryKeys = [
  ["🧮", "cat1_title", "cat1_desc"],
  ["🏗️", "cat2_title", "cat2_desc"],
  ["📄", "cat3_title", "cat3_desc"],
  ["🖼️", "cat4_title", "cat4_desc"],
  ["🤖", "cat5_title", "cat5_desc"],
  ["🛠️", "cat6_title", "cat6_desc"],
];

const popularKeys = [
  ["tool1", "🏗️", "/construction-estimate-calculator"],
  ["tool2", "🧮", "#"],
  ["tool3", "🖼️", "#"],
  ["tool4", "🧮", "#"],
  ["tool5", "📄", "#"],
  ["tool6", "🛠️", "#"],
];

export default function Home() {
  const { t } = useLanguage();
  return <main>
    <header className="header">
      <div className="container nav">
        <Link href="/" className="logo">Build<span>Naro</span></Link>
        <nav><a href="#categories">{t("nav_categories")}</a><a href="#popular">{t("nav_popular")}</a><a href="#about">{t("nav_about")}</a></nav>
        <LanguageSwitcher />
      </div>
    </header>

    <section className="hero">
      <div className="container heroInner">
        <div className="badge">{t("hero_badge")}</div>
        <h1>{t("hero_title1")}<br/><span>{t("hero_title2")}</span></h1>
        <p>{t("hero_desc")}</p>
        <div className="search"><span>⌕</span><input placeholder={t("hero_search_placeholder")}/><button>{t("hero_search_btn")}</button></div>
      </div>
    </section>

    <section id="categories" className="container section">
      <div className="sectionHead"><div><h2>{t("cat_heading")}</h2><p>{t("cat_sub")}</p></div></div>
      <div className="grid cats">{categoryKeys.map(([icon,titleKey,descKey]) =>
        <a className="card category" href="#" key={titleKey}><div className="icon">{icon}</div><div><h3>{t(titleKey)}</h3><p>{t(descKey)}</p></div><b>→</b></a>)}</div>
    </section>

    <section id="popular" className="container section">
      <div className="sectionHead"><div><h2>{t("nav_popular")}</h2><p>{t("pop_sub")}</p></div><a className="view" href="#categories">{t("pop_viewall")} →</a></div>
      <div className="grid tools">{popularKeys.map(([titleKey,icon,url]) =>
        <a className="tool" href={url} key={titleKey}><div className="toolIcon">{icon}</div><div><h3>{t(titleKey)}</h3><p>{t("tool_free")}</p></div><span>→</span></a>)}</div>
    </section>

    <section className="feature">
      <div className="container featureInner">
        <div><div className="badge">{t("feature_badge")}</div><h2>{t("feature_title")}</h2><p>{t("feature_desc")}</p><a className="primary" href="/construction-estimate-calculator">{t("feature_btn")} →</a></div>
        <div className="mock"><div className="mockTop">{t("mock_top")}</div><div className="line"><span>{t("pd_area")}</span><strong>1,000 sq ft</strong></div><div className="line"><span>{t("mock_material")}</span><strong>₹ 8,50,000</strong></div><div className="total"><span>{t("mock_total")}</span><strong>₹ 12,40,000</strong></div></div>
      </div>
    </section>

    <section id="about" className="container section about"><h2>{t("about_title")}</h2><p>{t("about_desc")}</p></section>
    <footer><div className="container footer"><div className="logo">Build<span>Naro</span></div><p>{t("footer_tagline")}</p><small>{t("footer_copyright")}</small></div></footer>
  </main>
}
