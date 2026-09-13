export default function sitemap() {
  const base = "https://buildnaro.vercel.app";
  const now = new Date();
  return [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/construction-estimate-calculator`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
  ];
}
