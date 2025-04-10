import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppWidget from "./components/WhatsAppWidget";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ankara Dana Kurban Satışı - Tufanlar Besi | ankaradanakurban.com",
  description: "Ankara'da veteriner kontrolünde doğal ortamda yetişmiş dana kurbanlıklar ve hisseli kurbanlık seçenekleri ile hijyenik, islami kesim hizmetleri.",
  icons:{
    icon: '/1.jpeg',
  },
  keywords: [
    "Ankara dana kurban",
    "hisseli kurban Ankara",
    "ankara kurbanlık dana",
    "islami kesim kurban",
    "Tufanlar Besi Ankara",
    "veteriner kontrollü kurbanlık",
    "ankara hijyenik kurban kesimi"
  ],
  openGraph: {
    title: "Ankara Dana Kurban Satışı - Tufanlar Besi",
    description: "Ankara'da veteriner kontrolünde doğal ortamda yetişmiş dana kurbanlıklar ve hisseli kurbanlık seçenekleri ile hijyenik, islami kesim hizmetleri.",
    url: "https://www.ankaradanakurban.com",
    siteName: "Tufanlar Besi",
    images: [
      {
        url: "https://www.ankaradanakurban.com/1.jpeg",
        width: 1200,
        height: 630,
        alt: "Ankara Dana Kurban Satışı - Tufanlar Besi"
      }
    ],
    locale: "tr_TR",
    type: "website",
  },
  alternates: {
    canonical: "https://www.ankaradanakurban.com",
  },
  contactPoint: {
    telephone: "+90 546 978 78 08",
    contactType: "Müşteri Hizmetleri",
    areaServed: "TR",
    availableLanguage: ["Turkish"]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="robots" content="index, follow" />
          <meta name="author" content="Tufanlar Besi" />
          <meta name="language" content="tr" />
          <meta name="theme-color" content="#ffffff" />
          <meta name="google-site-verification" content="iOtqdeL_0xm1dL1d2VkN4s45YQrLGm1naO72QoEPV0M" />
          <link rel="icon" href="/favicon.ico" type="image/x-icon" />

          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Ankara Dana Kurban Satışı - Tufanlar Besi" />
          <meta name="twitter:description" content="Ankara'da veteriner kontrolünde doğal ortamda yetişmiş dana kurbanlıklar ve hisseli kurbanlık seçenekleri ile hijyenik, islami kesim hizmetleri." />
          <meta name="twitter:image" content="https://www.ankaradanakurban.com/1.jpeg" />

          {/* Structured Data (Schema.org) */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                name: "Tufanlar Besi",
                image: "https://www.ankaradanakurban.com/1.jpeg",
                url: "https://www.ankaradanakurban.com",
                telephone: "+90 546 978 78 08",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Mamak",
                  addressRegion: "Ankara",
                  postalCode: "06635",
                  streetAddress: "Gökçeyurt",
                },
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: 39.9718205,
                  longitude: 33.0235587
                },
                openingHours: "Mo-Su 00:00-24:00",
                priceRange: "₺₺",
                sameAs: ["https://www.instagram.com/tufanlar_besi_ciftligi"]
              }),
            }}
          />
        </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        <div className="lg:p-8 lg:px-12">
          {children}
        </div>
        <WhatsAppWidget/>
        <Footer/>
      </body>
    </html>
  );
}