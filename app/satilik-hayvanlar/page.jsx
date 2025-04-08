
import { CheckIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const packages = [
  {
    name: 'Paket 1',
    id: 'package-1',
    href: 'https://wa.me/905469787808',
    price: '28,500 TL',
    description: '30-35 kg arası, ideal başlangıç paketi.',
    features: ['30-35 kg arası', 'Ekonomik fiyat', 'Kaliteli dana'],
    image: '12.jpeg',
    mostPopular: false,
  },
  {
    name: 'Paket 2',
    id: 'package-2',
    href: 'https://wa.me/905469787808',
    price: '32,500 TL',
    description: '35-40 kg arası, dengeli yapıda.',
    features: ['35-40 kg arası', 'Orta segment', 'Yüksek kalite'],
    image: '11.jpeg',
    mostPopular: true,
  },
  {
    name: 'Paket 3',
    id: 'package-3',
    href: 'https://wa.me/905469787808',
    price: '35,500 TL',
    description: '40-45 kg arası, premium sınıf seçim.',
    features: ['40-45 kg arası', 'Üstün et kalitesi', 'Özenle yetiştirilmiş'],
    image: '10.jpeg',
    mostPopular: false,
  },
  {
    name: 'Paket 4',
    id: 'package-4',
    href: 'https://wa.me/905469787808',
    price: '37,500 TL',
    description: '45-50 kg arası, en yüksek verimlilik.',
    features: ['45-50 kg arası', 'En kaliteli dana', 'Özel beslenme programı'],
    image: '9.jpeg',
    mostPopular: false,
  },
]

export default function SatilikHayvanlar() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold text-indigo-600">Satılık Hayvanlar</h2>
          <p className="mt-2 text-5xl font-semibold tracking-tight text-gray-900">
            Kaliteli Dana Paketleri
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-gray-600">
          En iyi kalite, en uygun fiyatlarla sunulan paketlerimizden dilediğinizi seçin.
        </p>
        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 md:max-w-2xl md:grid-cols-2 lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-4">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={classNames(
                pkg.mostPopular ? 'ring-2 ring-indigo-600' : 'ring-1 ring-gray-200',
                'rounded-3xl p-8'
              )}
            >
              <img 
                src={pkg.image} 
                alt={pkg.name} 
                className="mb-4 h-60 w-full object-cover rounded-lg" 
              />
              <h3
                id={pkg.id}
                className={classNames(
                  pkg.mostPopular ? 'text-indigo-600' : 'text-gray-900',
                  'text-lg font-semibold'
                )}
              >
                {pkg.name}
              </h3>
              <p className="mt-4 text-sm text-gray-600">{pkg.description}</p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-semibold tracking-tight text-gray-900">
                  {pkg.price}
                </span>
              </p>
              <a
                href={pkg.href}
                aria-describedby={pkg.id}
                className={classNames(
                  pkg.mostPopular
                    ? 'bg-indigo-600 text-white shadow-sm hover:bg-indigo-500'
                    : 'text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300',
                  'mt-6 block rounded-md px-3 py-2 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                )}
              >
                WhatsApp ile iletişime geç
              </a>
              <ul role="list" className="mt-8 space-y-3 text-sm text-gray-600">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon aria-hidden="true" className="h-6 w-5 flex-none text-indigo-600" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
