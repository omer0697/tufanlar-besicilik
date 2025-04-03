export default function Iletisim() {
    return (
      <div className="bg-white py-8 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl divide-y divide-gray-100 lg:mx-0 lg:max-w-none">
            {/* Üst Bilgi: Başlık, Açıklama, İletişim Kartları */}
            <div className="grid grid-cols-1 gap-10 py-16 lg:grid-cols-2">
              <div>
                <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900">
                  İletişim
                </h2>
                <p className="mt-4 text-base text-gray-600">
                  Bize ulaşmak için aşağıdaki iletişim bilgilerinden yararlanabilirsiniz. Konumumuzu Google Haritalar üzerinden de görüntüleyebilirsiniz.
                </p>
  
                {/* İletişim Kartları */}
                <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
                  {/* Veteriner Salih Dündar */}
                  <div className="rounded-2xl bg-gray-50 p-6 shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Veteriner Salih Dündar
                    </h3>
                    <dl className="mt-3 space-y-1 text-sm text-gray-600">
                      <div>
                        <dt className="sr-only">Telefon</dt>
                        <dd>0546 978 78 08</dd>
                      </div>
                    </dl>
                  </div>
                  {/* Mahmut Tufan */}
                  <div className="rounded-2xl bg-gray-50 p-6 shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Mahmut Tufan
                    </h3>
                    <dl className="mt-3 space-y-1 text-sm text-gray-600">
                      <div>
                        <dt className="sr-only">Telefon</dt>
                        <dd>0532 373 68 75</dd>
                      </div>
                    </dl>
                  </div>
                </div>
  
                {/* Adres, Saat ve Google Değerlendirmeleri */}
                <div className="mt-8">
                  <h4 className="text-lg font-semibold text-gray-900">Adres</h4>
                  <p className="mt-2 text-sm text-gray-600">
                    Gökçeyurt, 06635 Mamak/Ankara
                  </p>
                  <p className="mt-1 text-sm text-gray-600">
                    Çalışma Saatleri: 24 Saat Açık
                  </p>
                </div>
                <div className="mt-8">
                  <h4 className="text-lg font-semibold text-gray-900">
                    Google Değerlendirmeleri
                  </h4>
                  <p className="mt-2 text-sm text-gray-600">
                    5.0 (6 Yorum)
                  </p>
                  <p className="mt-2">
                    <a
                      href="https://www.google.com/maps/dir//G%C3%B6k%C3%A7eyurt,+06635+Mamak%2FAnkara/@39.9717913,32.9411578,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x14d354c6a794c3c1:0x1fbb95a9de20710c!2m2!1d33.0235587!2d39.9718205?entry=ttu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 hover:underline"
                    >
                      Google Haritalarda Görüntüle
                    </a>
                  </p>
                </div>
              </div>
  
              {/* Sağ Taraf: Google Maps Embed */}
              <div>
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
      </div>
    );
  }
  