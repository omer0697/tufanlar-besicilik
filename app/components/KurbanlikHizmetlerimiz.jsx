import { CameraIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'

export default function KurbanlikHizmetlerimiz() {
  return (
    <div className="w-full overflow-hidden bg-white">
      <div className="relative w-full px-6 py-16 lg:px-8">
        {/* Başlık */}
        <div className="text-base lg:grid lg:grid-cols-2 lg:gap-8">
          <div>
            <h2 className="text-lg font-semibold text-indigo-600">
              Kurbanlık Hizmetlerimiz
            </h2>
          </div>
        </div>

        {/* İçerik */}
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          {/* Sol taraf: Metin */}
          <div className="mt-8 lg:mt-0 text-base text-gray-500">
            <p className="text-lg">
              Tufanlar Besi olarak Ankara’da kurbanlık dana ve hisseli kurban satışında 20 yıllık tecrübe ile hizmet vermekteyiz.
            </p>
            <p className="mt-5">
              Veteriner hekim kontrolünde yetiştirdiğimiz, 2 yaşını geçmiş Ardahan yöresine ait hayvanlarımız satışa sunulmuştur.
            </p>
            <ul role="list" className="mt-5 list-disc space-y-2 pl-6 marker:text-gray-300">
              <li>Satışlarımız baskül ve pazarlık usulü yapılmaktadır.</li>
              <li>Hisseli satışlarımız mevcuttur.</li>
              <li>Kesim, parçalama, pay etme firmamız tarafından yapılmaktadır.</li>
            </ul>
            <p className="mt-5">
              Kesimhanemiz kendi bünyemizde bulunup, 200 m<sup>2</sup> kapalı alan içerisinde modern ve raylı sistemde kurulmuştur. Müşterilerimize verdiğimiz randevu saatinde, hijyenik ve islami kurallara uygun şekilde kesim yapılmaktadır.
            </p>
            <p className="mt-5">
              Kurbanlık pazarlarında çadır gezip kurbanlık aramaya, kesecek yer bulmakla uğraşmadan; tecrübeli, veteriner kontrollü ve işinin ehli kişilerce yetiştirilen kurbanlıklarımızdan dilediğinizi seçebilirsiniz. Verilen saatte profesyonel kasap ekiplerince paylarınız size özel hisse kutularinda teslim edilir.
            </p>
          </div>

          {/* Sağ taraf: Görsel */}
          <div className="relative lg:col-start-2 lg:row-start-1 mt-8 lg:mt-0 aspect-[12/7] w-full rounded-lg shadow-lg overflow-hidden">
            <Image
              src="/3.jpeg"
              alt="Kurbanlık Hizmetlerimiz"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
