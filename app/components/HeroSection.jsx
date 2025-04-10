import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="w-full flex flex-col-reverse lg:flex-row bg-white">
      {/* Sol içerik (Metin) */}
      <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center">
        <div className="mb-6">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
            Ankara Kurbanlık Dana ve Hisseli Kurbanlık Satışı
          </h1>
        </div>
        <p className="text-lg text-gray-600 mb-8">
          Ankara’da, özenle seçilmiş ve en kaliteli kurbanlık hayvanları, samimi hizmet anlayışımızla,
          uygun fiyatlar ve hızlı teslimat garantisiyle sizlere sunuyoruz. Sizin memnuniyetiniz bizim önceliğimiz!
        </p>
        <div className="flex gap-4">
          <a
            href="tel:+905469787808"
            className="inline-block bg-indigo-600 text-white p-3 lg:px-5 lg:py-3 rounded-md font-medium hover:bg-indigo-500"
          >
            Şimdi Ara
          </a>
          <a
            href="https://wa.me/905469787808"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-indigo-600 border border-indigo-600 px-5 py-3 rounded-md font-medium hover:bg-indigo-50"
          >
            Whatsapp ile iletişime geç
          </a>
        </div>
      </div>

      {/* Sağ içerik (Görsel) */}
      <div className="flex-2 relative min-h-[400px] lg:min-h-[840px]">
        <Image
          src="/7.jpeg"
          alt="Kurbanlık Hayvanlar"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover rounded-none"
        />
      </div>
    </div>
  );
}
