import { useMemo, useState } from 'react';
import { Star, ShoppingBag, Heart } from 'lucide-react';

const sampleProducts = [
  {
    id: 'p1',
    name: 'Vibrant Kottan Basket',
    price: 24.0,
    rating: 4.9,
    image:
      'https://images.unsplash.com/photo-1542996966-2e31c00bae26?q=80&w=1200&auto=format&fit=crop',
    tags: ['basket', 'storage', 'eco'],
  },
  {
    id: 'p2',
    name: 'Handwoven Table Mat (Set of 4)',
    price: 18.5,
    rating: 4.8,
    image:
      'https://images.unsplash.com/photo-1505685296765-3a2736de412f?q=80&w=1200&auto=format&fit=crop',
    tags: ['table', 'kitchen'],
  },
  {
    id: 'p3',
    name: 'Palm Leaf Gift Box',
    price: 16.0,
    rating: 4.7,
    image:
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop',
    tags: ['gift', 'festive'],
  },
  {
    id: 'p4',
    name: 'Wicker Wall Plate',
    price: 29.0,
    rating: 4.8,
    image:
      'https://images.unsplash.com/photo-1582582621959-48d63a7a72fd?q=80&w=1200&auto=format&fit=crop',
    tags: ['decor', 'wall'],
  },
  {
    id: 'p5',
    name: 'Boho Storage Hamper',
    price: 34.0,
    rating: 4.9,
    image:
      'https://images.unsplash.com/photo-1520978859190-2f6b6dfc57c7?q=80&w=1200&auto=format&fit=crop',
    tags: ['storage', 'home'],
  },
  {
    id: 'p6',
    name: 'Artisan Planter Sleeve',
    price: 14.0,
    rating: 4.6,
    image:
      'https://images.unsplash.com/photo-1523419409543-a5e549c1f8d1?q=80&w=1200&auto=format&fit=crop',
    tags: ['garden', 'planter'],
  },
];

export default function ProductsGrid({ onAddToCart, filterQuery }) {
  const [activeTag, setActiveTag] = useState('all');

  const tags = useMemo(() => {
    const all = new Set(['all']);
    sampleProducts.forEach((p) => p.tags.forEach((t) => all.add(t)));
    return Array.from(all);
  }, []);

  const filtered = useMemo(() => {
    return sampleProducts.filter((p) => {
      const matchesTag = activeTag === 'all' || p.tags.includes(activeTag);
      const matchesQuery = !filterQuery || p.name.toLowerCase().includes(filterQuery.toLowerCase());
      return matchesTag && matchesQuery;
    });
  }, [activeTag, filterQuery]);

  return (
    <section id="collections" className="relative py-16">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Featured Handmade</h2>
            <p className="mt-1 text-gray-600">Thoughtfully crafted pieces from our artisan community</p>
          </div>
          <div className="flex items-center gap-2 overflow-x-auto">
            {tags.map((t) => (
              <button
                key={t}
                onClick={() => setActiveTag(t)}
                className={`rounded-full border px-4 py-2 text-sm transition ${
                  activeTag === t
                    ? 'border-rose-600 bg-rose-600 text-white'
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <article
              key={p.id}
              className="group relative overflow-hidden rounded-3xl bg-white ring-1 ring-gray-200 shadow-sm"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <button
                  className="absolute right-3 top-3 inline-flex items-center justify-center rounded-full bg-white/90 p-2 text-gray-700 shadow ring-1 ring-gray-200 hover:bg-white"
                  aria-label="Wishlist"
                >
                  <Heart className="h-4 w-4" />
                </button>
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 leading-tight">{p.name}</h3>
                    <div className="mt-1 flex items-center gap-1 text-amber-500">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className={`h-4 w-4 ${i < Math.round(p.rating) ? 'fill-amber-400' : ''}`} />
                      ))}
                      <span className="ml-2 text-xs text-gray-600">{p.rating}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">Price</p>
                    <p className="text-lg font-bold">${p.price.toFixed(2)}</p>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {p.tags.map((t) => (
                      <span key={t} className="rounded-full bg-gray-100 px-2 py-0.5 text-[10px] font-medium text-gray-700">
                        {t}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => onAddToCart?.(p)}
                    className="inline-flex items-center rounded-full bg-gray-900 px-4 py-2 text-white text-sm font-semibold hover:bg-gray-800"
                  >
                    <ShoppingBag className="mr-2 h-4 w-4" /> Add
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#"
            className="inline-flex items-center rounded-full bg-white px-5 py-3 font-semibold ring-1 ring-gray-200 hover:bg-gray-50"
          >
            Explore full catalog
          </a>
        </div>
      </div>
    </section>
  );
}
