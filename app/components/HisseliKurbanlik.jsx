import React from 'react'

const packages = [
  {
    name: 'Kurbanlık Paket 1',
    hisseFiyati: '25.500 TL',
    hayvanPay: '5-6-8',
    netWeight: '210 Kg net',
    netHisse: '1/7 hisse 30 kg net',
    image: '4.jpg',
  },
  {
    name: 'Kurbanlık Paket 2',
    hisseFiyati: '27.500 TL',
    hayvanPay: '5-6-8',
    netWeight: '220 Kg net',
    netHisse: '1/7 hisse 31.4 kg net',
    image: '5.jpg',
  },
  {
    name: 'Kurbanlık Paket 3',
    hisseFiyati: '29.500 TL',
    hayvanPay: '5-6-8',
    netWeight: '240 Kg net',
    netHisse: '1/7 hisse 34.2 kg net',
    image: '6.jpeg',
  },
]

export default function HisseliKurbanlik() {
  return (
    <div className="bg-white w-full py-24 sm:py-32">
      <div className=" px-6 lg:px-8">
        {/* Üst Bilgilendirme Kısmı */}
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold text-indigo-600">Hizmetlerimiz</h2>
          <p className="mt-2 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            Hisseli Kurbanlık Satışı
          </p>
          <p className="mt-6 text-lg text-gray-600">
            Çiftliğimizde vekalet usulü 7’li olacak şekilde hisse satışımız mevcuttur.
          </p>
          <p className="mt-2 text-lg text-gray-600">Hisseli hayvanlarımız aşağıdaki gibidir:</p>
        </div>

        {/* Paketler (Ürün Kartları) */}
        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-10 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
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
                  <strong>Hisse Fiyatı:</strong> {item.hisseFiyati}
                </p>
                <p className="mt-1 text-sm text-gray-700">
                  <strong>Hayvan Pay:</strong> {item.hayvanPay}
                </p>
                <p className="mt-1 text-sm text-gray-700">
                  <strong>Kilo:</strong> {item.netWeight}
                </p>
                <p className="mt-1 text-sm text-gray-700">
                  <strong>Net Hisse:</strong> {item.netHisse}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
