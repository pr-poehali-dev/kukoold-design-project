import { useState } from 'react';
import { Card } from '@/components/ui/card';

const galleryItems = [
  {
    id: 1,
    title: 'Рассвет',
    color: 'bg-[#F2FCE2]',
    description: 'Первые лучи нового дня'
  },
  {
    id: 2,
    title: 'Тепло',
    color: 'bg-[#FEF7CD]',
    description: 'Солнечный свет в капле росы'
  },
  {
    id: 3,
    title: 'Закат',
    color: 'bg-[#FEC6A1]',
    description: 'Мягкое прощание дня'
  },
  {
    id: 4,
    title: 'Сумерки',
    color: 'bg-[#E5DEFF]',
    description: 'Переход в ночь'
  },
  {
    id: 5,
    title: 'Нежность',
    color: 'bg-[#FFDEE2]',
    description: 'Легкое касание'
  },
  {
    id: 6,
    title: 'Персик',
    color: 'bg-[#FDE1D3]',
    description: 'Мягкость бархата'
  }
];

const Index = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background px-6 py-16 md:px-12 lg:px-24">
      <header className="mb-20 text-center animate-fade-in">
        <h1 className="text-6xl md:text-8xl font-light text-foreground mb-6 tracking-tight">
          Галерея
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl mx-auto">
          Органические формы и естественные цвета
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {galleryItems.map((item, index) => (
          <Card
            key={item.id}
            className="overflow-hidden border-none shadow-none cursor-pointer group animate-scale-in"
            style={{ animationDelay: `${index * 100}ms` }}
            onMouseEnter={() => setHoveredId(item.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
              <div
                className={`${item.color} w-full h-full transition-all duration-700 ease-out ${
                  hoveredId === item.id ? 'scale-110' : 'scale-100'
                }`}
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent transition-opacity duration-500 ${
                  hoveredId === item.id ? 'opacity-100' : 'opacity-0'
                }`}
              />
              <div
                className={`absolute bottom-0 left-0 right-0 p-8 text-white transition-all duration-500 transform ${
                  hoveredId === item.id ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
              >
                <h3 className="text-3xl font-medium mb-2">{item.title}</h3>
                <p className="text-sm font-light opacity-90">{item.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <footer className="mt-32 text-center animate-fade-in" style={{ animationDelay: '800ms' }}>
        <p className="text-muted-foreground text-lg font-light">
          Место для самовыражения и творчества
        </p>
      </footer>
    </div>
  );
};

export default Index;
