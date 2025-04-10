import Image from "next/image";
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

export const metadata = {
  title: "Hizmetlerimiz | Ankara Dana Kurban Satışı - Tufanlar Besi",
  description:
    "Ankara'da veteriner kontrolünde yetiştirilen kaliteli dana kurbanlıklar ve İslami kurallara uygun hijyenik kesim hizmetleri ile Tufanlar Besi'den güvenilir çözümler.",
};

export default function Hizmetlerimiz() {
  return (
    <section className="relative bg-white" aria-labelledby="hizmetlerimiz-heading">
      <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
        {/* Sağdaki Görsel */}
        <div className="lg:flex lg:w-1/2 lg:shrink-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
          <div className="relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
            <Image
              src="/2.jpeg"
              alt="Hijyenik Kurbanlık Kesim Tesisimiz"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* Soldaki İçerik */}
        <div className="px-6 lg:contents">
          <div className="mx-auto max-w-2xl pb-24 pt-16 sm:pb-32 sm:pt-20 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-lg lg:flex-none lg:pt-32 xl:w-1/2">
            <p className="text-base font-semibold text-indigo-600">Hizmetlerimiz</p>
            <h1
              id="hizmetlerimiz-heading"
              className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl"
            >
              Kurbanlık Satış ve Kesim Hizmetleri
            </h1>

            <p className="mt-6 text-xl text-gray-700">
              Tufanlar Besi olarak, veteriner hekim kontrolünde yetiştirilen kaliteli kurbanlık
              hayvanlarımızı, modern kesimhanemiz ve profesyonel dağıtım ekibimizle sizlere en
              güvenilir ve hijyenik şekilde sunuyoruz.
            </p>

            <div className="mt-10 max-w-xl text-base text-gray-700 space-y-6">
              <p>
                Hizmetlerimiz, kurbanlık hayvan satışında yenilikçi ve müşteri odaklı bir yaklaşım
                benimsemektedir. Gelen siparişler anında işleme alınır, ödemeler güvenli altyapı
                üzerinden gerçekleştirilir ve kesim işlemleri, İslami kurallara uygun olarak profesyonel
                ekipler tarafından yapılır.
              </p>

              <ul className="space-y-8">
                <li className="flex gap-x-3">
                  <CloudArrowUpIcon
                    className="mt-1 h-6 w-6 flex-none text-indigo-600"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">Hızlı ve Güvenilir Satış.</strong>{" "}
                    Siparişleriniz anında işleme alınır ve hızlı teslimat garantisi verilir.
                  </span>
                </li>

                <li className="flex gap-x-3">
                  <LockClosedIcon
                    className="mt-1 h-6 w-6 flex-none text-indigo-600"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">Güvenli İşlemler.</strong>{" "}
                    Tüm satışlarınız ve ödemeleriniz, güvenli altyapı üzerinden gerçekleştirilir.
                  </span>
                </li>

                <li className="flex gap-x-3">
                  <ServerIcon
                    className="mt-1 h-6 w-6 flex-none text-indigo-600"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">Profesyonel Kesim ve Dağıtım.</strong>{" "}
                    Modern kesimhanemiz, hijyenik koşullarda ve İslami kurallara uygun olarak hizmet verir.
                  </span>
                </li>
              </ul>

              <p className="mt-8">
                Tüm bu hizmetlerimizle, müşteri memnuniyetini en üst seviyede tutmayı ve sizlere en
                kaliteli kurbanlık deneyimini sunmayı amaçlıyoruz.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
