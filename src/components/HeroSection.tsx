import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const slides = [
  {
    src: 'https://cdn.poehali.dev/projects/c9c679da-3166-4690-a697-856fcf93feb9/files/5ede6e71-856b-482e-a544-6473c241a113.jpg',
    label: 'Свадебная съёмка',
  },
  {
    src: 'https://cdn.poehali.dev/projects/c9c679da-3166-4690-a697-856fcf93feb9/files/98a59a8e-7a59-4bfa-8f22-02263fb44bd8.jpg',
    label: 'Портреты & Fashion',
  },
  {
    src: 'https://cdn.poehali.dev/projects/c9c679da-3166-4690-a697-856fcf93feb9/files/9d05071b-1f6c-4516-856e-218c3d5f9aea.jpg',
    label: 'Пейзажи',
  },
  {
    src: 'https://cdn.poehali.dev/projects/c9c679da-3166-4690-a697-856fcf93feb9/files/ac19fe32-4af8-4316-b791-adf3fa6e0572.jpg',
    label: 'Фуд-фото',
  },
];

const services = [
  'Свадьбы', 'Портреты', 'Ляльки', 'Fashion',
  'Пейзажи', 'День рождения', 'Love Story', 'Интерьер', 'Фуд-фото', 'Предметная'
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        {slides.map(({ src }, index) => (
          <div
            key={src}
            className={cn(
              'absolute inset-0 transition-opacity duration-1000 ease-in-out',
              currentIndex === index ? 'opacity-100' : 'opacity-0'
            )}
          >
            <img
              src={src}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />

      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-8 md:px-16">
          <div className="flex max-w-2xl flex-col gap-10">

            <div
              className={cn(
                'transform transition-all duration-1000 ease-out',
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              )}
            >
              <div className="relative h-48 w-48 overflow-hidden rounded-full border-4 border-white/80 shadow-2xl md:h-64 md:w-64">
                <img
                  src="https://cdn.poehali.dev/projects/c9c679da-3166-4690-a697-856fcf93feb9/bucket/7116c274-3a8d-4909-a035-bb5f95c75032.jpg"
                  alt="Леонид Маньчжур"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div
              className={cn(
                'transform transition-all duration-1000 delay-300 ease-out',
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              )}
            >
              <div className="space-y-5">
                <div>
                  <p className="text-sm font-light uppercase tracking-widest text-white/50 mb-2">
                    Профессиональный фотограф
                  </p>
                  <p className="text-3xl font-light text-white md:text-4xl lg:text-5xl">
                    Леонид Маньчжур
                  </p>
                  <p className="mt-2 text-lg font-light text-white/70 md:text-xl">
                    Фотограф для медиамейкеров и брендов
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  {services.map((service) => (
                    <span
                      key={service}
                      className="rounded-full border border-white/20 px-3 py-1 text-xs text-white/60 backdrop-blur-sm"
                    >
                      {service}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-2">
                  <a
                    href="mailto:Manzhou25@gmail.com"
                    className="rounded-full border border-white/30 px-5 py-2 text-sm text-white/80 backdrop-blur-sm transition-all hover:border-white hover:text-white"
                  >
                    Написать мне
                  </a>
                  <a
                    href="tel:+79940025053"
                    className="text-white/70 text-sm font-light transition-colors hover:text-white"
                  >
                    +7 994 002 50 53
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-8 z-20">
        <p
          className={cn(
            'text-xs uppercase tracking-widest text-white/40 transition-all duration-500',
            isLoaded ? 'opacity-100' : 'opacity-0'
          )}
        >
          {slides[currentIndex].label}
        </p>
      </div>

      <div className="absolute bottom-8 right-8 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              'h-1 transition-all duration-300',
              currentIndex === index ? 'w-12 bg-white' : 'w-8 bg-white/30 hover:bg-white/50'
            )}
            aria-label={`Перейти к слайду ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}