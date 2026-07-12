import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { useStore } from '../context/StoreContext';

export default function Wishlist() {
  const { wishlist, removeFromWishlist, addToCart } = useStore();

  return (
    <div>
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="font-display text-3xl font-semibold text-purple-950">Wishlist</h1>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {wishlist.length === 0 ? (
            <div className="rounded-[1.5rem] border border-slate-200 bg-white p-8 text-slate-600 shadow-sm md:col-span-2">
              <p>No saved pieces yet. Save a few favorites from the collection.</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Link to="/" className="rounded-full bg-purple-700 px-4 py-2 text-sm font-semibold text-white">Back home</Link>
                <Link to="/shop" className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700">View collection</Link>
              </div>
            </div>
          ) : (
            wishlist.map((item) => (
              <div key={item.id} className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm">
                <div className="h-40 rounded-[1.2rem]" style={{ background: item.accent }} />
                <h3 className="mt-4 font-display text-xl font-semibold text-slate-800">{item.name}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-semibold text-purple-900">${item.price}</span>
                  <div className="flex gap-3">
                    <button onClick={() => removeFromWishlist(item.id)} className="text-sm font-semibold text-slate-500 hover:text-purple-700">Remove</button>
                    <button onClick={() => addToCart(item)} className="rounded-full bg-purple-700 px-4 py-2 text-sm font-semibold text-white">Add to cart</button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
