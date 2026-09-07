import './style.css'
import Script from 'next/script'

export default function RootLayout({ children }) {
  return (
    <html lang="bn">
      <head>
        <meta name="google-adsense-account" content="ca-pub-8305568320429251" />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8305568320429251"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
