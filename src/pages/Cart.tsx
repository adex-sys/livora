import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { useStore } from '../context/StoreContext';

export default function Cart() {
  const { cart, removeFromCart } = useStore();
  const subtotal = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="font-display text-3xl font-semibold text-purple-950">Your cart</h1>
        <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-4">
            {cart.length === 0 ? (
              <div className="rounded-[1.5rem] border border-slate-200 bg-white p-8 text-slate-600 shadow-sm">
                <p>Your cart is empty. Add a few pieces from the shop to begin.</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link to="/" className="rounded-full bg-purple-700 px-4 py-2 text-sm font-semibold text-white">Back home</Link>
                  <Link to="/shop" className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700">View collection</Link>
                </div>
              </div>
            ) : (
              cart.map((item) => (
                <div key={item.id} className="flex items-center justify-between rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm">
                  <div>
                    <h3 className="font-semibold text-slate-800">{item.name}</h3>
                    <p className="mt-1 text-sm text-slate-500">{item.category}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <p className="font-semibold text-purple-900">${item.price}</p>
                    <button onClick={() => removeFromCart(item.id)} className="text-sm font-semibold text-slate-500 hover:text-purple-700">Remove</button>
                  </div>
                </div>
              ))
            )}
          </div>
          <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="font-display text-2xl font-semibold text-purple-950">Order summary</h2>
            <div className="mt-6 space-y-3 text-sm text-slate-600">
              <div className="flex justify-between"><span>Subtotal</span><span>${subtotal}</span></div>
              <div className="flex justify-between"><span>Delivery</span><span>Complimentary</span></div>
            </div>
            <button className="mt-6 w-full rounded-full bg-purple-700 px-4 py-3 font-semibold text-white">Proceed to checkout</button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
