const features = [
    { name: 'Mensei', description: 'Ankara ve çevresinde, doğal yöntemlerle yetiştirilen hayvanlar.' },
    { name: 'Yaş', description: 'Genellikle 2-3 yaş arası, ideal kesim zamanı.' },
    { name: 'Ağırlık', description: '250-300 kg arası, beslenmeye uygun yapıda.' },
    { name: 'Beslenme', description: 'Özel yem programıyla desteklenir, doğal beslenme esas alınır.' },
    { name: 'Veteriner Kontrolü', description: 'Düzenli veteriner muayenesinden geçer, sağlık garantili.' },
    { name: 'Kesim Yöntemi', description: 'Hijyenik, islami kurallara uygun modern kesim işlemi.' },
  ]
  
  export default function KurbanBilgileri() {
    return (
      <div className="bg-white">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Kurban Hakkında Bilgiler
            </h2>
            <p className="mt-4 text-gray-500">
              Tufanlar Besi olarak, kurbanlık hayvanlarımızı doğal ve sağlıklı koşullarda yetiştiriyoruz. İşte hayvanlarımızın temel özellikleri:
            </p>
            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              {features.map((feature) => (
                <div key={feature.name} className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-gray-900">{feature.name}</dt>
                  <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
            <img
              alt="Doğal yetiştirme alanı"
              src="16.jpeg"
              className="rounded-lg bg-gray-100"
            />
            <img
              alt="Hayvan beslenmesi"
              src="17.jpeg"
              className="rounded-lg bg-gray-100"
            />
            <img
              alt="Kesim işlemi"
              src="18.jpeg"
              className="rounded-lg bg-gray-100"
            />
            <img
              alt="Veteriner kontrolü"
              src="19.jpeg"
              className="rounded-lg bg-gray-100"
            />
          </div>
        </div>
      </div>
    )
  }
  