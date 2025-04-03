'use client'

import { useState } from 'react'
import { CheckIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const animals = [
  {
    name: 'Dana Model A',
    id: 'animal-model-a',
    href: 'https://wa.me/905469787808',
    price: '32,000 TL',
    description: 'Veteriner kontrolünde sağlıklı ve besleyici dana.',
    features: ['Yaklaşık 250 kg', '2 yaşında', 'Yüksek et verimliliği'],
    mostPopular: false,
  },
  {
    name: 'Dana Model B',
    id: 'animal-model-b',
    href: 'https://wa.me/905469787808',
    price: '35,000 TL',
    description: 'Kaliteli yetiştirilmiş, ideal kesim zamanı gelmiş dana.',
    features: ['Yaklaşık 260 kg', '2.5 yaşında', 'Düşük yağ oranı'],
    mostPopular: true,
  },
  {
    name: 'Dana Model C',
    id: 'animal-model-c',
    href: 'https://wa.me/905469787808',
    price: '38,000 TL',
    description: 'Premium sınıf dana, en iyi beslenme ile yetiştirilmiştir.',
    features: ['Yaklaşık 270 kg', '3 yaşında', 'Üstün et kalitesi'],
    mostPopular: false,
  },
  {
    name: 'Dana Model D',
    id: 'animal-model-d',
    href: 'https://wa.me/905469787808',
    price: '30,000 TL',
    description: 'Ekonomik seçim, yüksek verimli dana.',
    features: ['Yaklaşık 240 kg', '1.8 yaşında', 'Uygun fiyatlı'],
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
            Kaliteli Dana Modelleri
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-gray-600">
          En iyi kalite, en uygun fiyatlarla sunulan dana modellerimizden dilediğinizi seçin.
        </p>
        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 md:max-w-2xl md:grid-cols-2 lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-4">
          {animals.map((animal) => (
            <div
              key={animal.id}
              className={classNames(
                animal.mostPopular ? 'ring-2 ring-indigo-600' : 'ring-1 ring-gray-200',
                'rounded-3xl p-8'
              )}
            >
              <h3
                id={animal.id}
                className={classNames(
                  animal.mostPopular ? 'text-indigo-600' : 'text-gray-900',
                  'text-lg font-semibold'
                )}
              >
                {animal.name}
              </h3>
              <p className="mt-4 text-sm text-gray-600">{animal.description}</p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-semibold tracking-tight text-gray-900">
                  {animal.price}
                </span>
              </p>
              <a
                href={animal.href}
                aria-describedby={animal.id}
                className={classNames(
                  animal.mostPopular
                    ? 'bg-indigo-600 text-white shadow-sm hover:bg-indigo-500'
                    : 'text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300',
                  'mt-6 block rounded-md px-3 py-2 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                )}
              >
                WhatsApp ile iletişime geç
              </a>
              <ul role="list" className="mt-8 space-y-3 text-sm text-gray-600">
                {animal.features.map((feature) => (
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
