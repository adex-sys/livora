import { useState, useRef, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Heart, ShoppingBag, Menu, Search, X, Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import { useStore } from '../../context/StoreContext';
import { useTheme } from '../../context/ThemeContext';
import livoraLogo from '../../assets/livora.png';

 

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/shop', label: 'Shop' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const { cartCount, wishlistCount, products } = useStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [query, setQuery] = useState('');
  const { theme, toggleTheme } = useTheme();
  const searchRef = useRef<HTMLDivElement>(null);

  const suggestions = query.trim()
    ? products
        .filter(
          (p) =>
            p.name.toLowerCase().includes(query.toLowerCase()) ||
            p.category.toLowerCase().includes(query.toLowerCase())
        )
        .slice(0, 5)
    : [];

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setIsSearchOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-0 z-50 border-b border-purple-100/70 bg-white/80 backdrop-blur-xl dark:border-slate-700 dark:bg-slate-950/90"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-10">
          <Link to="/" className="flex items-center gap-3">
          <img
  src={livoraLogo}
  alt="Livora logo"
  className="h-11 w-11 rounded-full object-cover shadow-glow"
/>
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
          <div className="relative hidden sm:block" ref={searchRef}>
            <button
              onClick={() => setIsSearchOpen((prev) => !prev)}
              className="inline-flex rounded-full border border-slate-200 bg-white/80 p-2.5 text-slate-600 transition hover:border-purple-200 hover:text-purple-700 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-200"
              aria-label="Search"
            >
              <Search size={18} />
            </button>

            {isSearchOpen && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute right-0 top-14 z-50 w-80 rounded-2xl border border-slate-200 bg-white p-3 shadow-xl dark:border-slate-700 dark:bg-slate-900"
              >
                <div className="flex items-center gap-2 rounded-full border border-slate-200 px-3 py-2 dark:border-slate-700">
                  <Search size={16} className="text-slate-400" />
                  <input
                    autoFocus
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search furniture..."
                    className="w-full bg-transparent text-sm outline-none dark:text-white"
                  />
                  {query && (
                    <X
                      size={16}
                      className="cursor-pointer text-slate-400"
                      onClick={() => setQuery('')}
                    />
                  )}
                </div>

                {query.trim() && (
                  <div className="mt-2 max-h-72 overflow-y-auto">
                    {suggestions.length > 0 ? (
                      suggestions.map((item) => (
                        <Link
                          key={item.id}
                          to={`/shop?search=${encodeURIComponent(item.name)}`}
                          onClick={() => {
                            setIsSearchOpen(false);
                            setQuery('');
                          }}
                          className="flex w-full items-center gap-3 rounded-lg px-2 py-2 text-left text-sm hover:bg-slate-100 dark:hover:bg-slate-800"
                        >
                          <img
                            src={item.images?.[0]}
                            alt={item.name}
                            className="h-10 w-10 flex-shrink-0 rounded-md object-cover"
                          />
                          <div className="min-w-0 flex-1">
                            <p className="truncate text-slate-700 dark:text-slate-200">{item.name}</p>
                            <p className="text-xs text-slate-400">{item.category}</p>
                          </div>
                          <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                            ${item.price}
                          </span>
                        </Link>
                      ))
                    ) : (
                      <p className="px-3 py-2 text-sm text-slate-400">No matches found</p>
                    )}
                  </div>
                )}
              </motion.div>
            )}
          </div>

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