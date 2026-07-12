import { useParams } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { useStore } from '../context/StoreContext';

export default function ProductDetails() {
  const { id } = useParams();
  const { products, addToCart, addToWishlist, removeFromWishlist, wishlist } = useStore();
  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return <div className="px-6 py-20 text-center text-slate-600">Product not found.</div>;
  }

  const isSaved = wishlist.some((item) => item.id === product.id);
  const wishlistLabel = isSaved ? 'Remove from wishlist' : 'Add to wishlist';

  const handleWishlistToggle = () => {
    if (isSaved) {
      removeFromWishlist(product.id);
      return;
    }

    addToWishlist(product);
  };

  return (
    <div>
      <Navbar />
      <main className="mx-auto max-w-7xl px-3 py-10 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
            <div className="h-[20rem] rounded-[1.5rem] sm:h-[24rem]" style={{ background: product.accent }} />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold-600">{product.tag}</p>
            <h1 className="mt-3 font-display text-2xl font-semibold text-purple-950 sm:text-3xl">{product.name}</h1>
            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">{product.description}</p>
            <div className="mt-8 flex flex-col gap-4 rounded-[1.25rem] border border-slate-200 bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-5">
              <div>
                <p className="text-sm text-slate-500">Starting at</p>
                <p className="text-2xl font-semibold text-purple-900">${product.price}</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={handleWishlistToggle}
                  className={`rounded-full border px-4 py-3 text-sm font-semibold transition ${isSaved ? 'border-purple-700 bg-purple-50 text-purple-700 hover:bg-purple-100' : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-50'}`}
                >
                  {wishlistLabel}
                </button>
                <button
                  type="button"
                  onClick={() => addToCart(product)}
                  className="rounded-full bg-purple-700 px-5 py-3 text-sm font-semibold text-white shadow-sm shadow-purple-200 transition hover:bg-purple-800"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
