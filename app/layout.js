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
        <meta name="google-site-verification" content="iOtqdeL_0xm1dL1d2VkN4s45YQrLGm1naO72QoEPV0M" />
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