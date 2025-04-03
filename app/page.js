import Image from "next/image";
import HeroSection from "./components/HeroSection";
import KurbanlikHizmetlerimiz from "./components/KurbanlikHizmetlerimiz";
import HisseliKurbanlik from "./components/HisseliKurbanlik";
import Footer from "./components/Footer";

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
