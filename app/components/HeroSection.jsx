export default function HeroSection() {
    return (
      <div className="w-full flex flex-col-reverse lg:flex-row bg-white">
        {/* Sol içerik (Metin) */}
        <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center">
          {/* Logo ve Başlık */}
          <div className="mb-6">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
              Ankara’nın En Güvenilir Kurbanlık Hayvan Satış Noktası
            </h1>
          </div>
          {/* Açıklama */}
          <p className="text-lg text-gray-600 mb-8">
            En kaliteli hayvanları, uygun fiyatlarla ve hızlı teslimat garantisiyle 
            bulabileceğiniz, Ankara’nın lider kurbanlık hayvan satış platformu.
          </p>
          {/* Butonlar (CTA) */}
          <div className="flex gap-4">
            <a
              href="tel:+905469787808"
              className="inline-block bg-indigo-600 text-white px-5 py-3 rounded-md font-medium hover:bg-indigo-500"
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
          <img
            src="2.jpeg"
            alt="Kurbanlık Hayvanlar"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    );
  }
  