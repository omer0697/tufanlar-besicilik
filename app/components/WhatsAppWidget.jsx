import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

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
    </div>
  );
}
