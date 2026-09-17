export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://buildnaro.vercel.app/sitemap.xml",
  };
}
