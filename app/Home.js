'use client';

import { useState } from "react";
import { useLanguage } from "./i18n/LanguageContext";
import LanguageSwitcher from "./components/LanguageSwitcher";
import AiToolGenerator from "../components/AiToolGenerator";

const CATEGORIES = [
  { icon: "🧮", titleKey: "cat1_title", descKey: "cat1_desc", href: null },
  { icon: "🏗️", titleKey: "cat2_title", descKey: "cat2_desc", href: "/construction-estimate-calculator" },
  { icon: "📄", titleKey: "cat3_title", descKey: "cat3_desc", href: null },
  { icon: "🖼️", titleKey: "cat4_title", descKey: "cat4_desc", href: null },
  { icon: "🤖", titleKey: "cat5_title", descKey: "cat5_desc", href: null },
  { icon: "🛠️", titleKey: "cat6_title", descKey: "cat6_desc", href: null },
];

const TOOLS = [
  { icon: "🏗️", nameKey: "tool1", href: "/construction-estimate-calculator" },
  { icon: "💰", nameKey: "tool2", href: null },
  { icon: "🖼️", nameKey: "tool3", href: null },
  { icon: "🧾", nameKey: "tool4", href: null },
  { icon: "📄", nameKey: "tool5", href: null },
  { icon: "🔳", nameKey: "tool6", href: null },
];

export default function Home() {
  const { t } = useLanguage();
  const [query, setQuery] = useState("");
  const [notice, setNotice] = useState("");

  const runSearch = (e) => {
    e.preventDefault();
    const q = query.trim().toLowerCase();
    if (!q) return;
    if (/constr|build|house|home|material|boq|cost/.test(q)) {
      window.location.href = "/construction-estimate-calculator";
      return;
    }
    setNotice("That tool is coming soon — try “construction” for now.");
    setTimeout(() => setNotice(""), 3000);
  };

  return (
    <>
      <header className="header">
        <div className="container nav">
          <a className="logo" href="/">Build<span>Naro</span></a>
          <nav>
            <a href="/">{t("nav_home")}</a>
            <a href="#categories">{t("nav_categories")}</a>
            <a href="#tools">{t("nav_popular")}</a>
            <a href="#about">{t("nav_about")}</a>
          </nav>
          <LanguageSwitcher />
        </div>
      </header>

      <section className="hero">
        <div className="heroInner container">
          <div className="badge">{t("hero_badge")}</div>
          <h1>{t("hero_title1")}<span>{t("hero_title2")}</span></h1>
          <p>{t("hero_desc")}</p>
          <p style={{ marginBottom: 20, fontSize: 13, color: "#8a94a6" }}>
            Works for Mumbai, Delhi NCR, Bangalore, Kolkata, Chennai, Pune, Hyderabad, Ahmedabad — and every state in India.
          </p>
          <form className="search" onSubmit={runSearch}>
            <span>🔍</span>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t("hero_search_placeholder")}
            />
            <button type="submit">{t("hero_search_btn")}</button>
          </form>
          {notice && <p style={{ marginTop: 10, fontSize: 13, color: "#F97316", fontWeight: 700 }}>{notice}</p>}
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <AiToolGenerator />
        </div>
      </section>

      <section className="section" id="categories">
        <div className="container">
          <div className="sectionHead">
            <div><h2>{t("cat_heading")}</h2><p>{t("cat_sub")}</p></div>
          </div>
          <div className="grid cats">
            {CATEGORIES.map((c) => {
              const content = (
                <>
                  <span className="icon">{c.icon}</span>
                  <div>
                    <h3>{t(c.titleKey)}</h3>
                    <p>{t(c.descKey)}</p>
                  </div>
                  <b>{c.href ? "→" : "Soon"}</b>
                </>
              );
              return c.href ? (
                <a key={c.titleKey} className="card category" href={c.href}>{content}</a>
              ) : (
                <div key={c.titleKey} className="card category" style={{ opacity: 0.6, cursor: "default" }}>{content}</div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section" id="tools" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="sectionHead">
            <div><h2>{t("nav_popular")}</h2><p>{t("pop_sub")}</p></div>
          </div>
          <div className="grid tools">
            {TOOLS.map((tool) => {
              const inner = (
                <>
                  <span className="toolIcon">{tool.icon}</span>
                  <div>
                    <h3>{t(tool.nameKey)}</h3>
                    <p>{tool.href ? t("tool_free") : "Coming soon"}</p>
                  </div>
                  <span>{tool.href ? "→" : ""}</span>
                </>
              );
              return tool.href ? (
                <a key={tool.nameKey} className="tool" href={tool.href}>{inner}</a>
              ) : (
                <div key={tool.nameKey} className="tool" style={{ opacity: 0.6, cursor: "default" }}>{inner}</div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="feature">
        <div className="featureInner">
          <div>
            <div className="badge">{t("feature_badge")}</div>
            <h2>{t("feature_title")}</h2>
            <p>{t("feature_desc")}</p>
            <a className="primary" href="/construction-estimate-calculator">{t("feature_btn")}</a>
          </div>
          <div className="mock">
            <div className="mockTop">{t("mock_top")}</div>
            <div className="line"><span>Cement</span><span>₹1,25,000</span></div>
            <div className="line"><span>{t("mock_material")}</span><span>₹4,80,000</span></div>
            <div className="line"><span>Labour</span><span>₹2,00,000</span></div>
            <div className="total"><span>{t("mock_total")}</span><span>₹8,05,000</span></div>
          </div>
        </div>
      </section>

      <section className="section about container" id="about">
        <h2>{t("about_title")}</h2>
        <p>{t("about_desc")}</p>
      </section>

      <section className="section container" id="faq">
        <div className="sectionHead"><div><h2>Frequently Asked Questions</h2></div></div>
        <div className="faqList">
          <details><summary>How is construction cost calculated in India?</summary>
            <p>Construction cost is usually estimated either by multiplying built-up area by a per sq ft rate, or by adding up a detailed Bill of Quantities (BOQ) for materials, plus labour and transport. BuildNaro lets you use either method — or both together — for a more accurate estimate.</p>
          </details>
          <details><summary>What is the average construction cost per sq ft in India?</summary>
            <p>It varies by city, material quality and labour rates — typically around ₹1,500 to ₹2,500+ per sq ft for a standard residential build. Set your Construction Type and State in the calculator to get a closer estimate for your location.</p>
          </details>
          <details><summary>Does this work for my city — Mumbai, Delhi, Bangalore, Kolkata, Chennai, Pune, Hyderabad?</summary>
            <p>Yes — BuildNaro covers every Indian state along with major cities and districts, including Mumbai, Delhi NCR, Bangalore, Kolkata, Chennai, Pune, Hyderabad, Ahmedabad and more, with location-adjusted rate suggestions.</p>
          </details>
          <details><summary>Is BuildNaro free to use?</summary>
            <p>Yes, completely free with no sign-up required. Your estimate stays on your own device unless you choose to download or share it.</p>
          </details>
          <details><summary>Can I download my estimate?</summary>
            <p>Yes — download your final estimate as a JPG image, an Excel spreadsheet, or a PDF, formatted to fit an A4 page.</p>
          </details>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "How is construction cost calculated in India?", acceptedAnswer: { "@type": "Answer", text: "Construction cost is usually estimated either by multiplying built-up area by a per sq ft rate, or by adding up a detailed Bill of Quantities (BOQ) for materials, plus labour and transport. BuildNaro lets you use either method — or both together." } },
          { "@type": "Question", name: "What is the average construction cost per sq ft in India?", acceptedAnswer: { "@type": "Answer", text: "It varies by city, material quality and labour rates — typically around ₹1,500 to ₹2,500+ per sq ft for a standard residential build." } },
          { "@type": "Question", name: "Does this work for my city — Mumbai, Delhi, Bangalore, Kolkata, Chennai, Pune, Hyderabad?", acceptedAnswer: { "@type": "Answer", text: "Yes — BuildNaro covers every Indian state along with major cities and districts, with location-adjusted rate suggestions." } },
          { "@type": "Question", name: "Is BuildNaro free to use?", acceptedAnswer: { "@type": "Answer", text: "Yes, completely free with no sign-up required." } },
          { "@type": "Question", name: "Can I download my estimate?", acceptedAnswer: { "@type": "Answer", text: "Yes — download your final estimate as a JPG image, an Excel spreadsheet, or a PDF formatted for A4." } },
        ],
      }) }} />

      <footer>
        <div className="container footer">
          <a className="logo" href="/">Build<span>Naro</span></a>
          <p>{t("footer_tagline")}</p>
          <small>{t("footer_copyright")}</small>
        </div>
      </footer>
    </>
  );
}
