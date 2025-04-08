import React from 'react'

const packages = [
  {
    name: 'Kurbanlık Paket 1',
    weightRange: '30-35 kg',
    price: '28,500 TL',
    image: '4.jpg',
  },
  {
    name: 'Kurbanlık Paket 2',
    weightRange: '35-40 kg',
    price: '32,500 TL',
    image: '5.jpg',
  },
  {
    name: 'Kurbanlık Paket 3',
    weightRange: '40-45 kg',
    price: '35,500 TL',
    image: '6.jpeg',
  },
  {
    name: 'Kurbanlık Paket 4',
    weightRange: '45-50 kg',
    price: '37,500 TL',
    image: '8.jpeg', // Yeni paket için uygun görsel yolu; değiştirebilirsiniz.
  },
]

export default function HisseliKurbanlik() {
  return (
    <div className="bg-white w-full py-24 sm:py-32">
      <div className="px-6 lg:px-8">
        {/* Üst Bilgilendirme Kısmı */}
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold text-indigo-600">Hizmetlerimiz</h2>
          <p className="mt-2 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            Hisseli Kurbanlık Satışı
          </p>
          <p className="mt-6 text-lg text-gray-600">
            Çiftliğimizde vekalet usulü 7’li olacak şekilde hisse satışımız mevcuttur.
          </p>
          <p className="mt-2 text-lg text-gray-600">
            Hisseli hayvanlarımız aşağıdaki gibidir:
          </p>
        </div>

        {/* Paketler (Ürün Kartları) */}
        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-10 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 xl:grid-cols-4 lg:gap-x-8">
          {packages.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col overflow-hidden rounded-3xl bg-white p-6 shadow ring-1 ring-gray-200"
            >
              {/* Görsel */}
              <img
                src={item.image}
                alt={item.name}
                className="h-52 lg:h-80 w-full object-cover rounded-md"
              />

              {/* Paket Bilgileri */}
              <div className="mt-4 flex flex-col">
                <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                <p className="mt-2 text-sm text-gray-700">
                  <strong>Fiyat:</strong> {item.price}
                </p>
                <p className="mt-1 text-sm text-gray-700">
                  <strong>Ağırlık:</strong> {item.weightRange}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
