import { useState } from 'react';
import { Card } from '@/components/ui/card';

const galleryItems = [
  {
    id: 1,
    title: 'Я КУКОЛД',
    image: 'https://cdn.poehali.dev/projects/c4900e02-459f-42c7-820a-a8fecce81328/files/bf035e32-2535-439b-a38a-ad4f0219400d.jpg',
    description: 'Я КУКОЛД'
  },
  {
    id: 2,
    title: 'Я КУКОЛД',
    image: 'https://cdn.poehali.dev/projects/c4900e02-459f-42c7-820a-a8fecce81328/files/6e46a2aa-0650-492d-8442-a96a611d22b8.jpg',
    description: 'Я КУКОЛД'
  },
  {
    id: 3,
    title: 'Я КУКОЛД',
    image: 'https://cdn.poehali.dev/projects/c4900e02-459f-42c7-820a-a8fecce81328/files/616ae9dc-808d-46f5-9d4d-568db8968a08.jpg',
    description: 'Я КУКОЛД'
  },
  {
    id: 4,
    title: 'Я КУКОЛД',
    image: 'https://cdn.poehali.dev/projects/c4900e02-459f-42c7-820a-a8fecce81328/files/842c0e47-87b6-46bb-80fc-36bc403d56e1.jpg',
    description: 'Я КУКОЛД'
  },
  {
    id: 5,
    title: 'Я КУКОЛД',
    image: 'https://cdn.poehali.dev/projects/c4900e02-459f-42c7-820a-a8fecce81328/files/ff65f1fd-1212-41de-aa2e-1591a8f16029.jpg',
    description: 'Я КУКОЛД'
  },
  {
    id: 6,
    title: 'Я КУКОЛД',
    image: 'https://cdn.poehali.dev/projects/c4900e02-459f-42c7-820a-a8fecce81328/files/b3ef297d-1c08-4711-97dc-be444cbda6f4.jpg',
    description: 'Я КУКОЛД'
  }
];

const Index = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background px-6 py-16 md:px-12 lg:px-24">
      <header className="mb-20 text-center animate-fade-in">
        <h1 className="text-6xl md:text-8xl font-light text-foreground mb-6 tracking-tight">
          Я КУКОЛД
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl mx-auto">
          Я КУКОЛД
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
              <img
                src={item.image}
                alt={item.title}
                className={`w-full h-full object-cover transition-all duration-700 ease-out ${
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
          Я КУКОЛД
        </p>
      </footer>
    </div>
  );
};

export default Index;