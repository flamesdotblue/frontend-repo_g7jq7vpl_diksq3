import { useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductsGrid from './components/ProductsGrid';
import Footer from './components/Footer';

export default function App() {
  const [cart, setCart] = useState([]);
  const [query, setQuery] = useState('');

  const cartCount = useMemo(() => cart.reduce((sum, item) => sum + (item.qty || 1), 0), [cart]);

  const addToCart = (product) => {
    setCart((prev) => {
      const found = prev.find((p) => p.id === product.id);
      if (found) {
        return prev.map((p) => (p.id === product.id ? { ...p, qty: (p.qty || 1) + 1 } : p));
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = (id) => setCart((prev) => prev.filter((p) => p.id !== id));

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar cartCount={cartCount} onSearch={setQuery} />
      <main>
        <Hero onShop={() => {
          const el = document.getElementById('collections');
          el?.scrollIntoView({ behavior: 'smooth' });
        }} />
        <div id="new" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <section className="relative -mt-8 rounded-3xl border border-black/5 bg-white p-6 sm:p-8 shadow-xl shadow-rose-200/30">
            <div className="grid gap-6 sm:grid-cols-3">
              {[{
                title: 'Plastic-free packaging',
                desc: 'We ship sustainably using eco materials',
              }, {
                title: 'Crafted by artisans',
                desc: 'Every piece supports local craftsmanship',
              }, {
                title: 'Happiness guaranteed',
                desc: 'Easy exchanges within 14 days',
              }].map((b) => (
                <div key={b.title} className="rounded-2xl bg-rose-50 p-4 ring-1 ring-rose-100">
                  <h3 className="font-semibold">{b.title}</h3>
                  <p className="mt-1 text-sm text-rose-900/80">{b.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
        <ProductsGrid onAddToCart={addToCart} filterQuery={query} />

        <section id="cart" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="rounded-3xl border border-black/5 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-extrabold tracking-tight">Your Cart</h2>
            {cart.length === 0 ? (
              <p className="mt-2 text-gray-600">Your cart is empty. Start adding beautiful handmade pieces.</p>
            ) : (
              <div className="mt-6 grid grid-cols-1 gap-4">
                {cart.map((item) => (
                  <div key={item.id} className="flex items-center justify-between gap-4 rounded-2xl border p-4">
                    <div className="flex items-center gap-4">
                      <img src={item.image} alt={item.name} className="h-16 w-20 rounded-lg object-cover" />
                      <div>
                        <p className="font-semibold">{item.name}</p>
                        <p className="text-sm text-gray-600">Qty {item.qty} • ${(item.price * item.qty).toFixed(2)}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setCart((prev) => prev.map((p) => p.id === item.id ? { ...p, qty: Math.max(1, (p.qty || 1) - 1) } : p))}
                        className="rounded-full px-3 py-1 ring-1 ring-gray-200 hover:bg-gray-50"
                      >
                        -
                      </button>
                      <button
                        onClick={() => setCart((prev) => prev.map((p) => p.id === item.id ? { ...p, qty: (p.qty || 1) + 1 } : p))}
                        className="rounded-full px-3 py-1 ring-1 ring-gray-200 hover:bg-gray-50"
                      >
                        +
                      </button>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="rounded-full px-3 py-1 text-rose-600 ring-1 ring-rose-200 hover:bg-rose-50"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
            <div className="mt-6 flex items-center justify-between">
              <p className="text-lg font-bold">
                Total: ${cart.reduce((sum, p) => sum + p.price * (p.qty || 1), 0).toFixed(2)}
              </p>
              <button className="rounded-full bg-gray-900 px-6 py-3 text-white font-semibold hover:bg-gray-800">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
