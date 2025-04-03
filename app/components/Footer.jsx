export default function Footer() {
    return (
      <footer className="w-full bg-white border-t border-gray-200 py-12">
        <div className="w-full px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start">
            {/* Logo */}
            <div className="mb-8 md:mb-0">
              <img
                src="1.jpeg"
                alt="Tufanlar Besi"
                className="h-40 rounded-full"
              />
            </div>
  
            {/* Link Grupları */}
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {/* Hizmetlerimiz */}
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-4">
                  Hizmetlerimiz
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a href="/kurbanlik-hizmetlerimiz" className="text-sm text-gray-600 hover:text-gray-900">
                      Kurbanlık Satışı
                    </a>
                  </li>
                  <li>
                    <a href="/hisseli-kurbanlik" className="text-sm text-gray-600 hover:text-gray-900">
                      Hisseli Kurbanlık
                    </a>
                  </li>
                  <li>
                    <a href="/kesim" className="text-sm text-gray-600 hover:text-gray-900">
                      Kesim Hizmetleri
                    </a>
                  </li>
                </ul>
              </div>
  
              {/* Kurumsal */}
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-4">
                  Kurumsal
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a href="/hakkimizda" className="text-sm text-gray-600 hover:text-gray-900">
                      Hakkımızda
                    </a>
                  </li>
                  <li>
                    <a href="/referanslar" className="text-sm text-gray-600 hover:text-gray-900">
                      Referanslar
                    </a>
                  </li>
                  <li>
                    <a href="/basinda-biz" className="text-sm text-gray-600 hover:text-gray-900">
                      Basında Biz
                    </a>
                  </li>
                </ul>
              </div>
  
              {/* İletişim */}
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-4">
                  İletişim
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a href="tel:+905469787808" className="text-sm text-gray-600 hover:text-gray-900">
                      +90 546 978 7808
                    </a>
                  </li>
                  <li>
                    <a href="mailto:info@tufanlarbesi.com" className="text-sm text-gray-600 hover:text-gray-900">
                      info@tufanlarbesi.com
                    </a>
                  </li>
                  <li>
                    <a href="/iletisim" className="text-sm text-gray-600 hover:text-gray-900">
                      İletişim Formu
                    </a>
                  </li>
                </ul>
              </div>
  
              {/* Sosyal Medya */}
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-4">
                  Sosyal Medya
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                      Twitter
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
  
          {/* Alt Bilgi */}
          <div className="mt-12 border-t border-gray-200 pt-8 text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Tufanlar Besi. Tüm hakları saklıdır.
          </div>
        </div>
      </footer>
    );
  }
  