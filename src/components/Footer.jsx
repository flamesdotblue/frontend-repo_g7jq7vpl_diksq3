import { Instagram, Facebook, Youtube, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-black/5 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-xl font-extrabold">Kottanz Handmade</h3>
            <p className="mt-3 text-sm text-gray-600">
              Ethically sourced, lovingly crafted. Your purchase supports artisan livelihoods.
            </p>
            <div className="mt-4 flex items-center gap-3 text-gray-700">
              <a className="p-2 rounded-full hover:bg-gray-100" href="#" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a className="p-2 rounded-full hover:bg-gray-100" href="#" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a className="p-2 rounded-full hover:bg-gray-100" href="#" aria-label="Youtube">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold">Shop</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><a className="hover:text-rose-600" href="#">Bestsellers</a></li>
              <li><a className="hover:text-rose-600" href="#">New Arrivals</a></li>
              <li><a className="hover:text-rose-600" href="#">Gifts under $25</a></li>
              <li><a className="hover:text-rose-600" href="#">Wholesale</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold">Company</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><a className="hover:text-rose-600" href="#">About</a></li>
              <li><a className="hover:text-rose-600" href="#">Sustainability</a></li>
              <li><a className="hover:text-rose-600" href="#">Careers</a></li>
              <li><a className="hover:text-rose-600" href="#">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold">Newsletter</h4>
            <p className="mt-3 text-sm text-gray-600">Join for exclusive drops and artisan stories.</p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-3 flex items-center gap-2"
            >
              <input
                type="email"
                required
                placeholder="you@example.com"
                className="w-full rounded-full border border-gray-200 bg-white px-4 py-2 text-sm outline-none ring-rose-500/20 focus:ring-4"
              />
              <button className="rounded-full bg-rose-600 px-4 py-2 text-white text-sm font-semibold hover:bg-rose-700">
                <Mail className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-600">
          <p>© {new Date().getFullYear()} Kottanz Handmade. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Returns</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
