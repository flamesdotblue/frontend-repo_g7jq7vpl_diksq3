import { Star, Sparkles, ArrowRight } from 'lucide-react';

export default function Hero({ onShop }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-amber-50 to-white" />
      <div className="absolute left-1/2 top-[-10%] h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-rose-200/30 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-rose-700 ring-1 ring-rose-200 shadow-sm">
              <Sparkles className="h-4 w-4" /> New Collection — Summer Handcrafted
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
              Discover soulful handmade pieces crafted with love
            </h1>
            <p className="mt-5 text-lg text-gray-700 max-w-xl">
              From eco-friendly kottans to artisanal decor, every item is carefully curated from skilled artisans. Designed to elevate your home and gift moments that matter.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button onClick={onShop} className="inline-flex items-center rounded-full bg-rose-600 px-6 py-3 text-white font-semibold shadow-sm hover:bg-rose-700 transition">
                Shop Bestsellers
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
              <a href="#about" className="inline-flex items-center rounded-full bg-white px-6 py-3 font-semibold text-gray-900 ring-1 ring-gray-200 hover:bg-gray-50 transition">
                Our Story
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-gray-700">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1,2,3,4,5].map((i) => (
                    <img key={i} src={`https://i.pravatar.cc/40?img=${i}`} className="h-6 w-6 rounded-full ring-2 ring-white" />
                  ))}
                </div>
                <span>10k+ happy customers</span>
              </div>
              <div className="flex items-center gap-1 text-amber-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400" />
                ))}
                <span className="ml-2 text-gray-700">4.9/5 average rating</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative aspect-square rounded-3xl bg-white p-4 ring-1 ring-gray-200 shadow-sm overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1604335399105-a0c1bb7b2068?q=80&w=1200&auto=format&fit=crop"
                alt="Handmade baskets and decor"
                className="h-full w-full rounded-2xl object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-rose-500/10 via-transparent to-amber-500/10" />
            </div>
            <div className="absolute -bottom-6 -left-4 hidden sm:block rounded-2xl bg-white px-4 py-3 shadow-lg ring-1 ring-gray-200">
              <p className="text-sm font-semibold">Plastic-free packaging</p>
              <p className="text-xs text-gray-600">Sustainably shipped with care</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
