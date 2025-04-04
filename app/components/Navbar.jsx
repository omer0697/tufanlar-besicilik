import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const navigation = [
  { name: 'İletişim', href: '/iletisim', current: false },
  { name: 'Hakkımızda', href: '/hakkimizda', current: false },
  { name: 'Hizmetlerimiz', href: '/hizmetlerimiz', current: false },
  { name: 'Satılık Hayvanlarımız', href: '/satilik-hayvanlar', current: false },
  { name: 'Tesisimizden Görüntüler', href: '/galeri', current: false },
  { name: 'Kurban Hakkında Bilgiler', href: '/kurban-bilgileri', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <Disclosure as="header" className="bg-gray-50 shadow">
      <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:divide-y lg:divide-gray-200 lg:px-8">
        <div className="relative flex h-22 lg:h-16 justify-between">
          {/* Logo ve sol kısım */}
          <div className="relative z-10 flex px-2 lg:px-0">
            <div className="flex shrink-0 items-center">
            <Link href="/" className="flex items-center rounded-full ">
                <img
                    alt="Şirket Logosu"
                    src="1.jpeg"
                    className="h-22 lg:h-16 rounded-full"
                />

                <p className='text-xl font-bold animate-bounce'>Tufanlar Besicilik</p>
            </Link>
            </div>
          </div>

          {/* Mobil menü butonu */}
          <div className="relative z-10 flex items-center lg:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Menüyü aç</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>

          {/* Masaüstü navigasyon menüsü */}
          <nav aria-label="Global" className="hidden lg:flex lg:space-x-8 lg:py-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                aria-current={item.current ? 'page' : undefined}
                className={classNames(
                  item.current
                    ? 'bg-gray-100 text-gray-900'
                    : 'text-gray-900 hover:bg-gray-50 hover:text-gray-900',
                  'inline-flex items-center rounded-md px-3 py-2 text-sm font-medium'
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobil navigasyon menüsü */}
      <DisclosurePanel as="nav" aria-label="Global" className="lg:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as={Link}
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current
                  ? 'bg-gray-100 text-gray-900'
                  : 'text-gray-900 hover:bg-gray-50 hover:text-gray-900',
                'block rounded-md px-3 py-2 text-base font-medium'
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
