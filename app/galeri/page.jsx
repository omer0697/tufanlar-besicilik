import Image from "next/image";

const galleryItems = [
  {
    id: 1,
    name: "Kesim Tesisimiz",
    href: "#",
    description: "Modern ve hijyenik kesim alanımız.",
    imageSrc: "/13.jpg",
    imageAlt: "Modern kesim alanı görüntüsü.",
  },
  {
    id: 2,
    name: "Depo Alanımız",
    href: "#",
    description: "Geniş depo ve saklama alanlarımız.",
    imageSrc: "/14.jpg",
    imageAlt: "Depo alanı görüntüsü.",
  },
  {
    id: 3,
    name: "Satış ve Danışma Alanı",
    href: "#",
    description: "Müşterilerimize sunulan satış ve danışma alanımız.",
    imageSrc: "/15.jpeg",
    imageAlt: "Satış ve danışma alanı görüntüsü.",
  },
  {
    id: 4,
    name: "Ekibimiz",
    href: "#",
    description: "Profesyonel ekibimizin çalışmalarından görüntüler.",
    imageSrc: "/7.jpeg",
    imageAlt: "Ekibimizin çalışırken görüntüsü.",
  },
];

export const metadata = {
  title: "Tesisimizden Görüntüler | Ankara Dana Kurban Satışı",
  description:
    "Tufanlar Besi'nin Ankara'daki hijyenik kesim tesisleri, depo alanları ve profesyonel ekibimizden görüntüler. Kaliteli ve güvenilir hizmet anlayışımızı keşfedin.",
};

export default function TesisimizdenGoruntuler() {
  return (
    <section className="bg-white" aria-labelledby="gallery-heading">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <h1
          id="gallery-heading"
          className="text-3xl font-bold tracking-tight text-gray-900"
        >
          Tesisimizden Görüntüler
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Modern tesisimiz, hijyenik kesim ve satış alanlarımızı aşağıdaki
          görsellerden inceleyebilirsiniz.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {galleryItems.map((item) => (
            <figure key={item.id} className="group">
              <div className="relative aspect-square w-full overflow-hidden rounded-lg shadow-md">
                <Image
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  title={item.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:opacity-75"
                />
              </div>
              <figcaption className="mt-4">
                <h2 className="text-base font-medium text-gray-900">{item.name}</h2>
                <p className="mt-1 text-sm italic text-gray-500">
                  {item.description}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
