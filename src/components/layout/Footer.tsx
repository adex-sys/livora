import { ArrowRight, Instagram, Facebook, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-purple-100 bg-[#26163b] px-3 py-12 text-white sm:px-6 sm:py-16 lg:px-8 dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto grid max-w-7xl gap-8 sm:gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
        <div>
          <p className="font-display text-2xl font-semibold">LIVORA</p>
          <p className="mt-4 max-w-sm text-sm leading-7 text-purple-100/80">
            Curated furniture pieces for modern living, reimagined with warmth, craftsmanship, and timeless elegance.
          </p>
          <div className="mt-6 flex gap-3">
            {[Instagram, Facebook, Twitter].map((Icon, index) => (
              <a key={index} href="#" className="rounded-full border border-white/15 p-2.5 transition hover:border-gold-400 hover:text-gold-400">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-gold-300">Shop</h3>
          <ul className="mt-4 space-y-3 text-sm text-purple-100/80">
            <li><Link to="/shop" className="transition hover:text-white">New In</Link></li>
            <li><Link to="/shop" className="transition hover:text-white">Best Sellers</Link></li>
            <li><Link to="/shop" className="transition hover:text-white">Collections</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-gold-300">Support</h3>
          <ul className="mt-4 space-y-3 text-sm text-purple-100/80">
            <li><Link to="/contact" className="transition hover:text-white">Contact</Link></li>
            <li><Link to="/about" className="transition hover:text-white">About</Link></li>
            <li><Link to="/login" className="transition hover:text-white">Account</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-gold-300">Stay in the loop</h3>
          <p className="mt-4 text-sm leading-7 text-purple-100/80">Receive soft launches, seasonal offers, and design inspiration.</p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <input className="rounded-full border border-white/15 bg-white/10 px-4 py-3 text-sm text-white outline-none placeholder:text-purple-100/50" placeholder="Email address" />
            <button className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-500 px-4 py-3 text-sm font-semibold text-purple-950 transition hover:bg-gold-400">
              Subscribe <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
