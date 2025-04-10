'use client'

import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const navigation = [
  { name: 'İletişim', href: '/iletisim' },
  { name: 'Hakkımızda', href: '/hakkimizda' },
  { name: 'Hizmetlerimiz', href: '/hizmetlerimiz' },
  { name: 'Satılık Hayvanlarımız', href: '/satilik-hayvanlar' },
  { name: 'Tesisimizden Görüntüler', href: '/galeri' },
  { name: 'Kurban Hakkında Bilgiler', href: '/kurban-bilgileri' },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open, close }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between items-center">
              {/* Logo */}
              <Link href="/" className="flex items-center space-x-3">
                <Image
                  src="/1.jpeg"
                  alt="Tufanlar Besi Logo"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <span className="text-xl font-bold text-gray-900">Tufanlar Besicilik</span>
              </Link>

              {/* Masaüstü Menü */}
              <div className="hidden lg:flex lg:space-x-6">
                {navigation.map((item) => {
                  const isActive = pathname === item.href
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        isActive
                          ? 'text-black font-semibold'
                          : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-100'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )
                })}
              </div>

              {/* Mobil Menü Butonu */}
              <div className="flex lg:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Menüyü aç</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          {/* Mobil Menü Paneli */}
          {open && (
            <div className="lg:hidden">
              <div className="space-y-1 px-4 pb-4 pt-2">
                {navigation.map((item) => {
                  const isActive = pathname === item.href
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => close()}
                      className={`block rounded-md px-3 py-2 text-base font-medium transition-colors ${
                        isActive
                          ? 'text-black font-semibold'
                          : 'text-gray-700 hover:bg-gray-100 hover:text-indigo-600'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )
                })}
              </div>
            </div>
          )}
        </>
      )}
    </Disclosure>
  )
}
