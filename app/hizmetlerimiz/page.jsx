import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

export default function Hizmetlerimiz() {
  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
        {/* Sağdaki Görsel */}
        <div className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
          <div className="relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
            <img
              alt="Kurbanlık Hizmetlerimiz"
              src="2.jpeg"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Soldaki Metin İçeriği */}
        <div className="px-6 lg:contents">
          <div className="mx-auto max-w-2xl pb-24 pt-16 sm:pb-32 sm:pt-20 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-lg lg:flex-none lg:pt-32 xl:w-1/2">
            <p className="text-base font-semibold text-indigo-600">Hizmetlerimiz</p>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Kurbanlık Satış ve Kesim Hizmetleri
            </h1>
            <p className="mt-6 text-xl text-gray-700">
              Tufanlar Besi olarak, veteriner hekim kontrolünde yetiştirilen kaliteli kurbanlık hayvanlarımızı, modern kesimhanemiz ve profesyonel dağıtım ekibimizle sizlere en güvenilir ve hijyenik şekilde sunuyoruz.
            </p>
            <div className="mt-10 max-w-xl text-base text-gray-700">
              <p>
                Hizmetlerimiz, kurbanlık hayvan satışında yenilikçi ve müşteri odaklı bir yaklaşım benimsemektedir. Gelen siparişler anında işleme alınır, ödemeler güvenli altyapı üzerinden gerçekleştirilir ve kesim işlemleri, islami kurallara uygun olarak profesyonel ekipler tarafından yapılır.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-700">
                <li className="flex gap-x-3">
                  <CloudArrowUpIcon aria-hidden="true" className="mt-1 h-6 w-6 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Hızlı ve Güvenilir Satış.</strong> Siparişleriniz anında işleme alınır ve hızlı teslimat garantisi verilir.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <LockClosedIcon aria-hidden="true" className="mt-1 h-6 w-6 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Güvenli İşlemler.</strong> Tüm satışlarınız ve ödemeleriniz, güvenli altyapı üzerinden gerçekleştirilir.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ServerIcon aria-hidden="true" className="mt-1 h-6 w-6 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Profesyonel Kesim ve Dağıtım.</strong> Modern kesimhanemiz, hijyenik koşullarda ve islami kurallara uygun olarak hizmet verir.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
                Tüm bu hizmetlerimizle, müşteri memnuniyetini en üst seviyede tutmayı ve sizlere en kaliteli kurbanlık deneyimini sunmayı amaçlıyoruz.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
