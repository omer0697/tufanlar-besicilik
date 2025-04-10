import Image from "next/image";

export const metadata = {
  title: "Hakkımızda | Ankara Dana Kurban Satışı - Tufanlar Besi",
  description:
    "Ankara'da 20 yılı aşkın süredir veteriner kontrollü, hijyenik ve İslami kesim şartlarına uygun dana kurban satışı hizmetleri sunan Tufanlar Besi'yi keşfedin.",
};

export default function AboutUs() {
  return (
    <div className="bg-white">
      {/* Üst Banner */}
      <div className="relative w-full h-64 lg:h-96">
        <Image
          src="/2.jpeg"
          alt="Tufanlar Besi Ekibi"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white">Hakkımızda</h1>
        </div>
      </div>

      {/* İçerik Alanı */}
      <main className="max-w-4xl mx-auto py-16 px-6">
        {/* Tarihçe */}
        <section className="mb-12" aria-labelledby="hakkimizda-tarihce">
          <h2 id="hakkimizda-tarihce" className="text-2xl font-bold text-gray-900 mb-4">
            Tufanlar Besi: 20 Yıllık Tecrübe
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Tufanlar Besi olarak Ankara’da kurbanlık dana ve hisseli kurban satışında 20 yıllık tecrübe ile hizmet vermekteyiz. Müşterilerimize veteriner hekim kontrolünde yetiştirilen, sağlıklı ve kaliteli hayvanlar sunuyoruz. Amacımız, hijyenik ve islami kurallara uygun kesim hizmetleriyle en güvenilir deneyimi yaşatmaktır.
          </p>
        </section>

        {/* Misyon */}
        <section className="mb-12" aria-labelledby="hakkimizda-misyon">
          <h2 id="hakkimizda-misyon" className="text-2xl font-bold text-gray-900 mb-4">Misyonumuz</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Amacımız, her aşamada kaliteyi ve güveni ön planda tutarak, müşterilerimize en iyi hizmeti sunmak; kurbanlık hayvanların sağlığını ve hijyenini garanti altına alarak, islami değerlere uygun kesim ve dağıtım süreçlerini uygulamaktır.
          </p>
        </section>

        {/* Vizyon */}
        <section className="mb-12" aria-labelledby="hakkimizda-vizyon">
          <h2 id="hakkimizda-vizyon" className="text-2xl font-bold text-gray-900 mb-4">Vizyonumuz</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Gelecekte, kurbanlık hayvan satışında lider, yenilikçi ve sürdürülebilir çözümler sunarak, sektörde örnek bir kuruluş olmak ve müşteri memnuniyetinde standartları belirlemek.
          </p>
        </section>

        {/* Değerler */}
        <section className="mb-12" aria-labelledby="hakkimizda-degerler">
          <h2 id="hakkimizda-degerler" className="text-2xl font-bold text-gray-900 mb-4">Değerlerimiz</h2>
          <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed">
            <li>Güven ve Şeffaflık</li>
            <li>Hijyen ve Kalite</li>
            <li>İslami Değerlere Uygunluk</li>
            <li>Müşteri Memnuniyeti</li>
            <li>Sürdürülebilirlik</li>
          </ul>
        </section>

        {/* Ekibimiz */}
        <section aria-labelledby="hakkimizda-ekip">
          <h2 id="hakkimizda-ekip" className="text-2xl font-bold text-gray-900 mb-4">Ekibimiz</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Deneyimli ve işinin ehli profesyonellerden oluşan ekibimiz, her adımda kalite ve müşteri memnuniyetini ön planda tutmaktadır. Ekibimiz, siz değerli müşterilerimize en doğru ve güvenilir hizmeti sunmak için sürekli olarak kendini geliştirmektedir.
          </p>
        </section>
      </main>
    </div>
  );
}
