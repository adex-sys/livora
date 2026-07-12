import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export default function Checkout() {
  return (
    <div>
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="font-display text-3xl font-semibold text-purple-950">Checkout</h1>
        <div className="mt-8 rounded-[1.8rem] border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold-600">Secure and seamless</p>
          <p className="mt-3 max-w-2xl text-slate-600">From shipping details to payment, every step is designed for a calm and premium experience.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
