import { StarIcon } from '@heroicons/react/20/solid'

const reviews = {
  average: 5,
  totalCount: 6,
  counts: [
    { rating: 5, count: 6 },
    { rating: 4, count: 0 },
    { rating: 3, count: 0 },
    { rating: 2, count: 0 },
    { rating: 1, count: 0 },
  ],
  featured: [
    {
      id: 1,
      rating: 5,
      content: `
        <p>Mahmut Bey ve oğlu Hasan Bey çok kibar ve işinin ehli insanlar.</p>
      `,
      author: 'ESAT EMRAH SİLSÜPÜR',
      avatarSrc: 'https://ui-avatars.com/api/?name=ESAT+EMRAH+SİLSÜPÜR',
    },
    {
      id: 2,
      rating: 5,
      content: `
        <p>Kalitenin bir numaralı adresi</p>
      `,
      author: 'Craftsman Lora',
      avatarSrc: 'https://ui-avatars.com/api/?name=Craftsman+Lora',
    },
    {
      id: 3,
      rating: 5,
      content: `
        <p>Çok ilgili ve hayvanlar içinde veteriner gibi hizmetleri olan, önce insan anlayışı ile güven dolu bir işletmedir.</p>
      `,
      author: 'Tuncay Aydoğan',
      avatarSrc: 'https://ui-avatars.com/api/?name=Tuncay+Aydoğan',
    },
    {
      id: 4,
      rating: 5,
      content: `
        <p>Mahmut amca işinin ehli. Sağ olsunlar.</p>
      `,
      author: 'Batuhan YAVAŞ',
      avatarSrc: 'https://ui-avatars.com/api/?name=Batuhan+YAVAŞ',
    },
    {
      id: 5,
      rating: 5,
      content: `
        <p>Güven veren kaliteli iş yapan bir işletme, tavsiye ederim.</p>
      `,
      author: 'cemil çağrı gülmez',
      avatarSrc: 'https://ui-avatars.com/api/?name=cemil+çağrı+gülmez',
    },
    {
      id: 6,
      rating: 5,
      content: `
        <p>Kurbanlık için her yıl başka yere gitmem...</p>
      `,
      author: 'Ömer Özden KESKİN',
      avatarSrc: 'https://ui-avatars.com/api/?name=Ömer+Özden+KESKİN',
    },
  ],
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-12 lg:gap-x-8 lg:px-8 lg:py-32">
        <div className="lg:col-span-4">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Müşteri Yorumları</h2>

          <div className="mt-3 flex items-center">
            <div>
              <div className="flex items-center">
                {[0, 1, 2, 3, 4].map((rating) => (
                  <StarIcon
                    key={rating}
                    aria-hidden="true"
                    className={classNames(
                      reviews.average > rating ? 'text-yellow-400' : 'text-gray-300',
                      'size-5 shrink-0'
                    )}
                  />
                ))}
              </div>
              <p className="sr-only">{reviews.average} out of 5 stars</p>
            </div>
            <p className="ml-2 text-sm text-gray-900">{reviews.totalCount} değerlendirme</p>
          </div>

          <div className="mt-6">
            <h3 className="sr-only">Yorum dağılımı</h3>

            <dl className="space-y-3">
              {reviews.counts.map((count) => (
                <div key={count.rating} className="flex items-center text-sm">
                  <dt className="flex flex-1 items-center">
                    <p className="w-3 font-medium text-gray-900">{count.rating}</p>
                    <div aria-hidden="true" className="ml-1 flex flex-1 items-center">
                      <StarIcon
                        aria-hidden="true"
                        className={classNames(count.count > 0 ? 'text-yellow-400' : 'text-gray-300', 'size-5 shrink-0')}
                      />
                      <div className="relative ml-3 flex-1">
                        <div className="h-3 rounded-full border border-gray-200 bg-gray-100" />
                        {count.count > 0 ? (
                          <div
                            style={{ width: `calc(${count.count} / ${reviews.totalCount} * 100%)` }}
                            className="absolute inset-y-0 rounded-full border border-yellow-400 bg-yellow-400"
                          />
                        ) : null}
                      </div>
                    </div>
                  </dt>
                  <dd className="ml-3 w-10 text-right text-sm tabular-nums text-gray-900">
                    {Math.round((count.count / reviews.totalCount) * 100)}%
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-10">
            <h3 className="text-lg font-medium text-gray-900">Sen de görüşünü paylaş</h3>
            <p className="mt-1 text-sm text-gray-600">
              Eğer bu işletmeden hizmet aldıysan, yorumlarını bizimle ve diğer kullanıcılarla paylaşabilirsin.
            </p>

            <a
              href="#"
              className="mt-6 inline-flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 sm:w-auto lg:w-full"
            >
              Yorum Yaz
            </a>
          </div>
        </div>

        <div className="mt-16 lg:col-span-7 lg:col-start-6 lg:mt-0">
          <h3 className="sr-only">Son yorumlar</h3>

          <div className="flow-root">
            <div className="-my-12 divide-y divide-gray-200">
              {reviews.featured.map((review) => (
                <div key={review.id} className="py-12">
                  <div className="flex items-center">
                    <img
                      alt={`${review.author}`}
                      src={review.avatarSrc}
                      className="size-12 rounded-full"
                    />
                    <div className="ml-4">
                      <h4 className="text-sm font-bold text-gray-900">{review.author}</h4>
                      <div className="mt-1 flex items-center">
                        {[0, 1, 2, 3, 4].map((rating) => (
                          <StarIcon
                            key={rating}
                            aria-hidden="true"
                            className={classNames(
                              review.rating > rating ? 'text-yellow-400' : 'text-gray-300',
                              'size-5 shrink-0'
                            )}
                          />
                        ))}
                      </div>
                      <p className="sr-only">{review.rating} yıldız</p>
                    </div>
                  </div>

                  <div
                    dangerouslySetInnerHTML={{ __html: review.content }}
                    className="mt-4 space-y-6 text-base italic text-gray-600"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
