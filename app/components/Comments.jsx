import { StarIcon } from '@heroicons/react/20/solid'

const reviews = [
  {
    id: 1,
    title: 'İşini dürüst ve kaliteli yapan bir işletme',
    rating: 5,
    content: `
      <p>Mahmut Bey ve oğlu Hasan Bey çok kibar ve işinin ehli insanlar.</p>
    `,
    author: 'ESAT EMRAH SİLSÜPÜR',
    avatarSrc:
      'https://ui-avatars.com/api/?name=ESAT+EMRAH+SİLSÜPÜR',
  },
  {
    id: 2,
    title: 'Kalitenin bir numaralı adresi',
    rating: 5,
    content: `
      <p>Kalitenin bir numaralı adresi</p>
    `,
    author: 'Craftsman Lora',
    avatarSrc:
      'https://ui-avatars.com/api/?name=Craftsman+Lora',
  },
  {
    id: 3,
    title: 'İlgili ve güven veren bir işletme',
    rating: 5,
    content: `
      <p>Çok ilgili ve hayvanlar içinde veteriner gibi hizmetleri olan, önce insan anlayışı ile güven dolu bir işletmedir.</p>
    `,
    author: 'Tuncay Aydoğan',
    avatarSrc:
      'https://ui-avatars.com/api/?name=Tuncay+Aydoğan',
  },
  {
    id: 4,
    title: 'Dürüst ve kaliteli bir işletme',
    rating: 5,
    content: `
      <p>Mahmut amca işinin ehli. Sağ olsunlar.</p>
    `,
    author: 'Batuhan YAVAŞ',
    avatarSrc:
      'https://ui-avatars.com/api/?name=Batuhan+YAVAŞ',
  },
  {
    id: 5,
    title: 'Güven veren kaliteli iş',
    rating: 5,
    content: `
      <p>Güven veren kaliteli iş yapan bir işletme, tavsiye ederim.</p>
    `,
    author: 'cemil çağrı gülmez',
    avatarSrc:
      'https://ui-avatars.com/api/?name=cemil+çağrı+gülmez',
  },
  {
    id: 6,
    title: 'Kurbanlık için her yıl aynı yer',
    rating: 5,
    content: `
      <p>Kurbanlık için her yıl başka yere gitmem...</p>
    `,
    author: 'Ömer Özden KESKİN',
    avatarSrc:
      'https://ui-avatars.com/api/?name=Ömer+Özden+KESKİN',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Comments() {
  return (
    <div className="bg-white py-10 px-6 sm:px-10">
      <h2 id="reviews-heading" className="text-2xl font-bold tracking-tight text-gray-900">
        Müşteri Yorumları
      </h2>

      <div className="mt-10 space-y-10">
        {reviews.map((review) => (
          <div key={review.id} className="flex flex-col sm:flex-row border-b pb-8">
            <div className="order-2 mt-6 sm:ml-8 sm:mt-0">
              <h3 className="text-sm font-semibold text-gray-900">{review.title}</h3>
              <p className="sr-only">{review.rating} out of 5 stars</p>

              <div
                dangerouslySetInnerHTML={{ __html: review.content }}
                className="mt-3 space-y-3 text-sm text-gray-700"
              />
            </div>

            <div className="order-1 flex items-center sm:flex-col sm:items-start">
              <img
                alt={review.author}
                src={review.avatarSrc}
                className="size-12 rounded-full object-cover"
              />

              <div className="ml-4 sm:ml-0 sm:mt-4">
                <p className="text-sm font-medium text-gray-900">{review.author}</p>
                <div className="mt-2 flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      aria-hidden="true"
                      className={classNames(
                        review.rating > rating ? 'text-yellow-500' : 'text-gray-200',
                        'size-5 shrink-0'
                      )}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
