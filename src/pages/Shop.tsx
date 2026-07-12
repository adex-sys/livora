import { useMemo, useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ProductCard from '../components/products/ProductCard';
import { useStore } from '../context/StoreContext';

const categories = ['All', 'Seating', 'Storage', 'Dining', 'Accent'];

export default function Shop() {
  const { products, addToCart, toggleWishlist, wishlist } = useStore();
  const [activeCategory, setActiveCategory] = useState('All');

  const visibleProducts = useMemo(() => {
    if (activeCategory === 'All') {
      return products;
    }
    return products.filter((product) => product.category === activeCategory);
  }, [activeCategory, products]);

  return (
    <div>
      <Navbar />
      <main className="mx-auto max-w-7xl px-3 py-10 sm:px-6 sm:py-16 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold-600">Collection</p>
            <h1 className="mt-2 font-display text-2xl font-semibold text-purple-950 sm:text-3xl">Shop the curated edit</h1>
          </div>
          <div className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 shadow-sm">
            {products.length} pieces • Sort by featured
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2 sm:mt-8 sm:gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${activeCategory === category ? 'bg-purple-700 text-white' : 'bg-white text-slate-600 hover:text-purple-700'}`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {visibleProducts.map((product) => {
            const isSaved = wishlist.some((item) => item.id === product.id);
            return (
              <ProductCard
                key={product.id}
                product={product}
                onSave={toggleWishlist}
                onAddToCart={addToCart}
                isSaved={isSaved}
                showSave
              />
            );
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
}
