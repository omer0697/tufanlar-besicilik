const galleryItems = [
    {
      id: 1,
      name: 'Kesim Tesisimiz',
      href: '#',
      description: 'Modern ve hijyenik kesim alanımız.',
      imageSrc:
        'https://images.unsplash.com/photo-1562059390-a761a0847684?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      imageAlt: 'Modern kesim alanı görüntüsü.',
    },
    {
      id: 2,
      name: 'Depo Alanımız',
      href: '#',
      description: 'Geniş depo ve saklama alanlarımız.',
      imageSrc:
        'https://images.unsplash.com/photo-1581091870627-3b47accc0e97?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      imageAlt: 'Depo alanı görüntüsü.',
    },
    {
      id: 3,
      name: 'Satış ve Danışma Alanı',
      href: '#',
      description: 'Müşterilerimize sunulan satış ve danışma alanımız.',
      imageSrc:
        'https://images.unsplash.com/photo-1573497491208-6b1acb260507?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      imageAlt: 'Satış ve danışma alanı görüntüsü.',
    },
    {
      id: 4,
      name: 'Ekibimiz',
      href: '#',
      description: 'Profesyonel ekibimizin çalışmalarından görüntüler.',
      imageSrc:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      imageAlt: 'Ekibimizin çalışırken görüntüsü.',
    },
  ]
  
  export default function TesisimizdenGoruntuler() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <h2 id="gallery-heading" className="text-3xl font-bold tracking-tight text-gray-900">
            Tesisimizden Görüntüler
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Modern tesisimiz, hijyenik kesim ve satış alanlarımızı aşağıdaki görsellerden inceleyebilirsiniz.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {galleryItems.map((item) => (
              <a key={item.id} href={item.href} className="group">
                <img
                  alt={item.imageAlt}
                  src={item.imageSrc}
                  className="aspect-square w-full overflow-hidden rounded-lg object-cover group-hover:opacity-75"
                />
                <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
                  <h3>{item.name}</h3>
                </div>
                <p className="mt-1 text-sm italic text-gray-500">{item.description}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    )
  }
  