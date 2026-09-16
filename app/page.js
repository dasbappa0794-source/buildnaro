import Home from "./Home";

export const metadata = {
  title: "BuildNaro — Construction & Interior Cost Calculators for India",
  description: "Free, no-signup tools for construction and interior cost estimation in India. Start with our full Construction Cost Calculator by area, BOQ, labour, transport and state — more calculators coming soon.",
  alternates: { 
    canonical: "/" 
  },
  keywords: ["construction cost calculator India", "house construction cost", "BOQ calculator", "building estimate"],
  openGraph: {
    title: "BuildNaro — Construction Cost Calculators for India",
    description: "Free construction cost calculator for India with state-wise rates",
    url: "https://buildnaro.com",
    siteName: "BuildNaro",
  }
};

export default function Page() {
  return <Home />;
}
