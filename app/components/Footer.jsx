import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-200 py-12">
      <div className="w-full px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start">
          {/* Logo */}
          <div className="mb-8 md:mb-0">
            <Image
              src="/1.jpeg"
              alt="Tufanlar Besi Logo"
              width={160}
              height={160}
              className="rounded-full h-40 w-auto"
              priority
            />
          </div>

          {/* Link Grupları */}
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {/* Başlık erişilebilirlik için */}
            <h2 className="sr-only">Tufanlar Besi – Alt Bilgi Menüsü</h2>

            {/* Hizmetlerimiz */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-4">Hizmetlerimiz</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/satilik-hayvanlar" className="text-sm text-gray-600 hover:text-gray-900">
                    Satılık Hayvanlarımız
                  </a>
                </li>
                <li>
                  <a href="/galeri" className="text-sm text-gray-600 hover:text-gray-900">
                    Tesisimizden Görüntüler
                  </a>
                </li>
                <li>
                  <a href="/kurban-bilgileri" className="text-sm text-gray-600 hover:text-gray-900">
                    Kurban Hakkında Bilgiler
                  </a>
                </li>
              </ul>
            </div>

            {/* İletişim */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-4">İletişim</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="tel:+905469787808"
                    aria-label="Telefon numarası ara: +90 546 978 78 08"
                    className="text-sm text-gray-600 hover:text-gray-900"
                  >
                    +90 546 978 7808
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@tufanlarbesi.com"
                    aria-label="E-posta gönder: info@tufanlarbesi.com"
                    className="text-sm text-gray-600 hover:text-gray-900"
                  >
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
              <h3 className="text-sm font-semibold text-gray-900 mb-4">Sosyal Medya</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://www.instagram.com/tufanlar_besi_ciftligi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-600 hover:text-gray-900"
                    aria-label="Instagram sayfamızı ziyaret edin"
                  >
                    Instagram
                  </a>
                </li>
                {/* Diğer platformlar aktifse aşağıya eklenebilir */}
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
