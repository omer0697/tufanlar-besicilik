import Image from "next/image";
import HeroSection from "./components/HeroSection";
import KurbanlikHizmetlerimiz from "./components/KurbanlikHizmetlerimiz";
import HisseliKurbanlik from "./components/HisseliKurbanlik";

export const metadata = {
  title: "Ankara Dana Kurban Satışı - Tufanlar Besi",
  description: "Ankara'da veteriner kontrolünde, islami usullere uygun yetiştirilen kaliteli dana kurbanlıklar ve hijyenik kesim hizmetleri. Güvenilir ve profesyonel hizmet.",
};

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col ">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <HeroSection/>
        <KurbanlikHizmetlerimiz/>
        <HisseliKurbanlik/>
      </main>
    </div>
  );
}
