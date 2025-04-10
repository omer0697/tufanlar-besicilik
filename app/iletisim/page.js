export const metadata = {
  title: "İletişim | Ankara Dana Kurban Satışı - Tufanlar Besi",
  description:
    "Tufanlar Besi iletişim bilgileri ve konum bilgileri. Ankara'da dana kurbanlık alımı ve kesim hizmetleri için bize ulaşın: +90 546 978 78 08",
};

export default function Iletisim() {
  return (
    <section className="bg-white py-8 sm:py-16" aria-labelledby="iletisim-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl divide-y divide-gray-100 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-10 py-16 lg:grid-cols-2">
            {/* Sol Alan */}
            <div>
              <h1 id="iletisim-heading" className="text-4xl font-semibold tracking-tight text-gray-900">
                İletişim
              </h1>
              <p className="mt-4 text-base text-gray-600">
                Bize ulaşmak için aşağıdaki iletişim bilgilerinden yararlanabilirsiniz. Konumumuzu Google Haritalar üzerinden de görüntüleyebilirsiniz.
              </p>

              {/* İletişim Kartları */}
              <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
                <div className="rounded-2xl bg-gray-50 p-6 shadow-sm">
                  <h2 className="text-lg font-semibold text-gray-900">Veteriner Salih Dündar</h2>
                  <p className="mt-3 text-sm text-gray-600">
                    <a href="tel:+905469787808" aria-label="Telefon ara: 0546 978 78 08">0546 978 78 08</a>
                  </p>
                </div>
                <div className="rounded-2xl bg-gray-50 p-6 shadow-sm">
                  <h2 className="text-lg font-semibold text-gray-900">Mahmut Tufan</h2>
                  <p className="mt-3 text-sm text-gray-600">
                    <a href="tel:+905323736875" aria-label="Telefon ara: 0532 373 68 75">0532 373 68 75</a>
                  </p>
                </div>
              </div>

              {/* Adres ve Yorum */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-900">Adres</h3>
                <p className="mt-2 text-sm text-gray-600">Gökçeyurt, 06635 Mamak/Ankara</p>
                <p className="mt-1 text-sm text-gray-600">Çalışma Saatleri: 24 Saat Açık</p>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-900">Google Değerlendirmeleri</h3>
                <p className="mt-2 text-sm text-gray-600">5.0 (6 Yorum)</p>
                <p className="mt-2">
                  <a
                    href="https://www.google.com/maps/dir//G%C3%B6k%C3%A7eyurt,+06635+Mamak%2FAnkara/@39.9717913,32.9411578,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x14d354c6a794c3c1:0x1fbb95a9de20710c!2m2!1d33.0235587!2d39.9718205?entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:underline"
                    aria-label="Google Haritalarda konumumuzu görüntüle"
                  >
                    Google Haritalarda Görüntüle
                  </a>
                </p>
              </div>
            </div>

            {/* Sağ Taraf: Google Maps Embed + Link Overlay */}
            <div className="relative group cursor-pointer">
              <a
                href="https://www.google.com/maps/dir//G%C3%B6k%C3%A7eyurt,+06635+Mamak%2FAnkara"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Harita üzerinde konumu aç"
                className="absolute inset-0 z-10"
              />
              <iframe
                title="Gökçeyurt, 06635 Mamak/Ankara"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3060.5805800993036!2d33.0235587!3d39.9718205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d354c6a794c3c1%3A0x1fbb95a9de20710c!2sG%C3%B6k%C3%A7eyurt%2C%2006635%20Mamak%2FAnkara!5e0!3m2!1str!2str!4v1691145142668"
                width="100%"
                height="400"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg border-2 border-gray-200 shadow-sm"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
