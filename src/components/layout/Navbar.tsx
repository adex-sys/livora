import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Heart, ShoppingBag, Menu, Search, X, Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import { useStore } from '../../context/StoreContext';
import { useTheme } from '../../context/ThemeContext';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/shop', label: 'Shop' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const { cartCount, wishlistCount } = useStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-0 z-50 border-b border-purple-100/70 bg-white/80 backdrop-blur-xl dark:border-slate-700 dark:bg-slate-950/90"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-10">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-purple-700 to-gold-500 text-lg font-semibold text-white shadow-glow">
              L
            </div>
            <div>
              <p className="font-display text-xl font-semibold text-purple-900 dark:text-purple-200">LIVORA</p>
              <p className="text-xs uppercase tracking-[0.35em] text-slate-500 dark:text-slate-300">Luxury Living</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `text-sm font-medium transition ${
                    isActive ? 'text-purple-700 dark:text-purple-300' : 'text-slate-600 hover:text-purple-700 dark:text-slate-300 dark:hover:text-purple-300'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <button className="hidden rounded-full border border-slate-200 bg-white/80 p-2.5 text-slate-600 transition hover:border-purple-200 hover:text-purple-700 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-200 sm:inline-flex">
            <Search size={18} />
          </button>
          <button
            type="button"
            onClick={toggleTheme}
            className="rounded-full border border-slate-200 bg-white/80 p-2.5 text-slate-600 transition hover:border-purple-200 hover:text-purple-700 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-200"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <Link
            to="/wishlist"
            className="relative rounded-full border border-slate-200 p-2.5 text-slate-600 transition hover:border-purple-200 hover:text-purple-700 dark:border-slate-700 dark:text-slate-200"
          >
            <Heart size={18} />
            {wishlistCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-purple-700 text-[10px] font-semibold text-white">
                {wishlistCount}
              </span>
            )}
          </Link>
          <Link
            to="/cart"
            className="relative rounded-full border border-slate-200 p-2.5 text-slate-600 transition hover:border-purple-200 hover:text-purple-700 dark:border-slate-700 dark:text-slate-200"
          >
            <ShoppingBag size={18} />
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-gold-500 text-[10px] font-semibold text-purple-950">
                {cartCount}
              </span>
            )}
          </Link>
          <button
            onClick={() => setIsMenuOpen((open) => !open)}
            className="rounded-full border border-slate-200 p-2.5 text-slate-600 transition hover:border-purple-200 hover:text-purple-700 dark:border-slate-700 dark:text-slate-200 lg:hidden"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-t border-slate-200 bg-white px-4 py-4 shadow-sm dark:border-slate-700 dark:bg-slate-950/95 lg:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-3">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `rounded-full px-3 py-2 text-sm font-medium transition ${
                    isActive
                      ? 'bg-purple-700 text-white'
                      : 'text-slate-700 hover:bg-purple-50 hover:text-purple-700 dark:text-slate-300 dark:hover:bg-slate-900/70 dark:hover:text-purple-300'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/wishlist"
              onClick={() => setIsMenuOpen(false)}
              className="rounded-full px-3 py-2 text-sm font-medium text-slate-700 hover:bg-purple-50 hover:text-purple-700 dark:text-slate-300 dark:hover:bg-slate-900/70 dark:hover:text-purple-300"
            >
              Wishlist
            </Link>
            <Link
              to="/cart"
              onClick={() => setIsMenuOpen(false)}
              className="rounded-full px-3 py-2 text-sm font-medium text-slate-700 hover:bg-purple-50 hover:text-purple-700 dark:text-slate-300 dark:hover:bg-slate-900/70 dark:hover:text-purple-300"
            >
              Cart
            </Link>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
