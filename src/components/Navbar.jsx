import { useState } from 'react';
import { ShoppingCart, Menu, X, Search, Heart, User } from 'lucide-react';

export default function Navbar({ cartCount = 0, onSearch }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');

  const submit = (e) => {
    e.preventDefault();
    onSearch?.(query);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/5 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100"
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
            <a href="#" className="font-extrabold tracking-tight text-2xl">
              Kottanz Handmade
            </a>
          </div>

          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
            <a href="#collections" className="hover:text-rose-600 transition-colors">Collections</a>
            <a href="#new" className="hover:text-rose-600 transition-colors">New Arrivals</a>
            <a href="#gifts" className="hover:text-rose-600 transition-colors">Gifts</a>
            <a href="#about" className="hover:text-rose-600 transition-colors">About</a>
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <form onSubmit={submit} className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search handmade treasures"
                className="w-72 rounded-full border border-gray-200 bg-white pl-10 pr-4 py-2 text-sm outline-none ring-rose-500/20 focus:ring-4"
              />
            </form>
            <button className="p-2 rounded-full hover:bg-gray-100" aria-label="Wishlist">
              <Heart className="h-5 w-5" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100" aria-label="Account">
              <User className="h-5 w-5" />
            </button>
            <a href="#cart" className="relative inline-flex items-center rounded-full bg-rose-600 px-4 py-2 text-white font-semibold hover:bg-rose-700 transition">
              <ShoppingCart className="mr-2 h-4 w-4" />
              Cart
              {cartCount > 0 && (
                <span className="ml-2 rounded-full bg-white/90 px-2 py-0.5 text-rose-600 text-xs font-bold">
                  {cartCount}
                </span>
              )}
            </a>
          </div>
        </div>

        {open && (
          <div className="lg:hidden border-t border-black/5 py-4">
            <nav className="grid gap-2 text-base font-medium">
              <a href="#collections" className="px-2 py-2 rounded-md hover:bg-gray-100">Collections</a>
              <a href="#new" className="px-2 py-2 rounded-md hover:bg-gray-100">New Arrivals</a>
              <a href="#gifts" className="px-2 py-2 rounded-md hover:bg-gray-100">Gifts</a>
              <a href="#about" className="px-2 py-2 rounded-md hover:bg-gray-100">About</a>
              <form onSubmit={submit} className="relative mt-2">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search handmade treasures"
                  className="w-full rounded-full border border-gray-200 bg-white pl-10 pr-4 py-2 text-sm outline-none ring-rose-500/20 focus:ring-4"
                />
              </form>
              <div className="flex items-center gap-3 pt-2">
                <button className="p-2 rounded-full hover:bg-gray-100" aria-label="Wishlist">
                  <Heart className="h-5 w-5" />
                </button>
                <button className="p-2 rounded-full hover:bg-gray-100" aria-label="Account">
                  <User className="h-5 w-5" />
                </button>
                <a href="#cart" className="relative inline-flex items-center rounded-full bg-rose-600 px-4 py-2 text-white font-semibold hover:bg-rose-700 transition">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Cart
                  {cartCount > 0 && (
                    <span className="ml-2 rounded-full bg-white/90 px-2 py-0.5 text-rose-600 text-xs font-bold">
                      {cartCount}
                    </span>
                  )}
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
