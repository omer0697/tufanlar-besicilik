import Image from "next/image";
import HeroSection from "./components/HeroSection";
import KurbanlikHizmetlerimiz from "./components/KurbanlikHizmetlerimiz";
import HisseliKurbanlik from "./components/HisseliKurbanlik";
import Comments from "./components/Comments";

export const metadata = {
  title: "Ankara Kurbanlık Dana | Hisseli Kurban Satışı | Tufanlar Besi",
  description: "Ankara’da islami şartlara uygun, veteriner kontrolünde hisseli ve tam dana kurbanlık satışı. Tufanlar Besi ile güvenli, hijyenik ve profesyonel kurban hizmeti.",
  keywords: [
    "ankara kurbanlık",
    "ankara dana kurban",
    "hisseli kurban ankara",
    "islami kurban kesimi",
    "kurbanlık fiyatları 2025",
    "ankara kurbanlık çiftlik"
  ],
  openGraph: {
    title: "Ankara Kurbanlık Dana | Hisseli Kurban | Tufanlar Besi",
    description: "Ankara'da doğal ortamda yetişen danalar ile hijyenik ve islami kurban kesimi. Güvenli ve hızlı teslimat.",
    url: "https://www.ankaradanakurban.com",
    siteName: "Tufanlar Besi",
    images: [
      {
        url: "https://www.ankaradanakurban.com/1.jpeg",
        width: 1200,
        height: 630,
        alt: "Ankara Dana Kurbanlık",
      },
    ],
    type: "website",
    locale: "tr_TR"
  },
  alternates: {
    canonical: "https://www.ankaradanakurban.com",
  }
};


export default function Home() {
  return (
    <div className="w-full h-full flex flex-col ">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <HeroSection/>
        <KurbanlikHizmetlerimiz/>
        <HisseliKurbanlik/>
        <Comments/>
      </main>
    </div>
  );
}
