import { FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function WhatsAppWidget() {
  return (
    <div className="fixed bottom-4 right-4 flex flex-col gap-3 z-50">
      <a
        href="https://wa.me/905469787808"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors"
        aria-label="WhatsApp ile İletişime Geç"
      >
        <FaWhatsapp size={24} />
      </a>

      <a
        href="tel:+905469787808"
        className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-colors"
        aria-label="Hemen Ara"
      >
        <FaPhoneAlt size={24} />
      </a>

      <a
        href="https://www.google.com/maps/dir//G%C3%B6k%C3%A7eyurt,+06635+Mamak%2FAnkara/@39.9717913,32.9411578,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x14d354c6a794c3c1:0x1fbb95a9de20710c!2m2!1d33.0235587!2d39.9718205?entry=ttu"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-red-500 text-white p-3 rounded-full shadow-lg hover:bg-red-600 transition-colors"
        aria-label="Konum Bilgisi"
      >
        <FaMapMarkerAlt size={24} />
      </a>
    </div>
  );
}
