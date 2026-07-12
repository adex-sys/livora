import { motion } from 'framer-motion';
import { ArrowRight, Gem, Play, ShieldCheck, Sofa, Sparkles, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ProductCard from '../components/products/ProductCard';
import { useStore } from '../context/StoreContext';

const benefits = [
  { icon: ShieldCheck, title: 'Premium Materials', text: 'Hand-finished wood, velvet, and brushed metal.' },
  { icon: Truck, title: 'Fast Delivery', text: 'White-glove setup available across key regions.' },
  { icon: Sparkles, title: 'Tailored Design', text: 'Made-to-order pieces that feel truly personal.' },
];

const moments = [
  { icon: Sofa, title: 'Iconic silhouettes', text: 'Sculptural form with plush comfort at the core.' },
  { icon: Gem, title: 'Rich details', text: 'Fine upholstery, brushed brass, and artful finishes.' },
  { icon: Play, title: 'Instant delight', text: 'A seamless experience from browse to delivery.' },
];

export default function Home() {
  const { products } = useStore();
  const featuredProducts = products.slice(0, 3);

  return (
    <div>
      <Navbar />
      <main>
        <section className="relative overflow-hidden px-3 pb-16 pt-8 sm:px-6 sm:pb-20 sm:pt-10 lg:px-8 lg:pt-16">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(91,42,134,0.15),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(200,169,107,0.22),_transparent_28%)]" />
          <motion.div animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.03, 1] }} transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }} className="aurora-orb absolute left-[-8%] top-[-10%] h-56 w-56 rounded-full bg-fuchsia-200/50 blur-3xl" />
          <motion.div animate={{ y: [0, -16, 0], x: [0, 10, 0] }} transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }} className="aurora-orb absolute bottom-[-8%] right-[-4%] h-64 w-64 rounded-full bg-amber-200/40 blur-3xl" />

          <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <motion.span initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="inline-flex items-center rounded-full border border-purple-200 bg-white/80 px-3 py-2 text-sm font-medium text-purple-700 shadow-sm sm:px-4">
                <Sparkles className="mr-2 h-4 w-4" /> Curated luxury furniture for elevated interiors
              </motion.span>
              <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08, duration: 0.7 }} className="mt-5 text-3xl font-semibold leading-tight text-purple-950 sm:mt-6 sm:text-4xl sm:text-5xl lg:text-6xl">
                A cinematic home experience built for bold living.
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12, duration: 0.7 }} className="mt-4 max-w-xl text-base leading-7 text-slate-600 sm:mt-6 sm:text-lg sm:leading-8">
                Discover sculptural silhouettes, rich textures, and timeless craftsmanship from LIVORA’s signature collection.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.16, duration: 0.7 }} className="mt-6 flex flex-wrap gap-3 sm:mt-8 sm:gap-4">
                <Link to="/shop" className="inline-flex items-center justify-center gap-2 rounded-full bg-purple-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-purple-800 sm:px-6 sm:py-3.5">
                  Shop now <ArrowRight size={16} />
                </Link>
                <Link to="/register" className="inline-flex items-center justify-center rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-purple-300 hover:text-purple-700 sm:px-6 sm:py-3.5">
                  Join LIVORA
                </Link>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }} className="mt-8 flex flex-wrap gap-3 text-sm text-slate-600 sm:mt-10 sm:gap-4">
                <span className="rounded-full bg-white/80 px-3 py-2 shadow-sm sm:px-4">Premium finishes</span>
                <span className="rounded-full bg-white/80 px-3 py-2 shadow-sm sm:px-4">Made-to-order</span>
                <span className="rounded-full bg-white/80 px-3 py-2 shadow-sm sm:px-4">Global delivery</span>
              </motion.div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }} className="relative mt-2 sm:mt-0">
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-purple-300/40 to-gold-200/40 blur-3xl" />
              <motion.div whileHover={{ y: -8, scale: 1.01 }} className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white p-3 shadow-glow sm:p-4">
                <div className="h-[22rem] rounded-[1.5rem] bg-[linear-gradient(135deg,_#f4e8d5_0%,_#e8d7c1_50%,_#d8c0a2_100%)] p-4 sm:h-[28rem] sm:p-8">
                  <div className="flex h-full flex-col justify-between rounded-[1.2rem] border border-white/60 bg-white/40 p-4 backdrop-blur sm:p-6">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <span className="w-fit rounded-full bg-purple-900/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white">Signature Collection</span>
                      <span className="text-sm font-medium text-purple-900">2026 Edit</span>
                    </div>
                    <motion.div animate={{ y: [0, -8, 0], rotate: [0, 2, -1, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }} className="rounded-[1.3rem] border border-white/70 bg-white/75 p-4 shadow-xl backdrop-blur">
                      <p className="text-sm uppercase tracking-[0.4em] text-slate-600">Lounge</p>
                      <h2 className="mt-2 font-display text-2xl font-semibold text-purple-950 sm:text-3xl">The Monarch Sofa</h2>
                      <p className="mt-3 max-w-sm text-sm leading-7 text-slate-700">Deep cushions, walnut framing, and a sculptural profile designed for slow evenings.</p>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.22, duration: 0.6 }} className="floating-card rounded-[1.1rem] border border-purple-200 bg-white/80 px-4 py-3 shadow-sm">
                      <div className="flex items-center justify-between text-sm font-medium text-purple-900">
                        <span>White-glove delivery</span>
                        <span className="rounded-full bg-purple-700 px-2 py-1 text-xs text-white">New</span>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="px-3 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold-600">Featured pieces</p>
                <h2 className="mt-2 font-display text-2xl font-semibold text-purple-950 sm:text-3xl">Designed for modern dwellings</h2>
              </div>
              <Link to="/shop" className="text-sm font-semibold text-purple-700 transition hover:text-purple-900">View all</Link>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {featuredProducts.map((product, index) => (
                <motion.div key={product.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: index * 0.1 }} whileHover={{ y: -8, scale: 1.01 }}>
                  <ProductCard product={product} compact />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-3 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 rounded-[2rem] bg-[#2b1a45] p-6 text-white sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10 lg:p-12">
            <motion.div initial={{ opacity: 0, x: -18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }}>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold-300">Why LIVORA</p>
              <h2 className="mt-3 font-display text-2xl font-semibold sm:text-3xl">A softer kind of luxury.</h2>
              <p className="mt-4 max-w-lg text-sm leading-7 text-purple-100/80">We bring together sculptural form, rich textiles, and thoughtful craftsmanship to make every collection feel quietly indulgent.</p>
            </motion.div>
            <div className="grid gap-5 md:grid-cols-3">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <motion.div key={benefit.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: index * 0.08 }} whileHover={{ y: -6, scale: 1.02 }} className="rounded-[1.25rem] border border-white/10 bg-white/10 p-5 backdrop-blur transition sm:p-6">
                    <Icon size={20} className="text-gold-300" />
                    <h3 className="mt-3 font-semibold">{benefit.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-purple-100/80">{benefit.text}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="px-3 pb-16 sm:px-6 sm:pb-20 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[2rem] border border-purple-100 bg-white/70 p-6 shadow-sm backdrop-blur sm:p-8 lg:p-10">
            <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-8">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold-600">From first glance to first night</p>
                <h2 className="mt-3 font-display text-2xl font-semibold text-purple-950 sm:text-3xl">Your dream room arrives in motion.</h2>
                <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600">Every piece is selected to feel elevated, comfortable, and instantly right in your space.</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {moments.map((moment, index) => {
                  const Icon = moment.icon;
                  return (
                    <motion.div key={moment.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: index * 0.08 }} className="rounded-[1.2rem] border border-slate-200 bg-[#fcfaf8] p-4 shadow-sm">
                      <Icon size={20} className="text-purple-700" />
                      <h3 className="mt-3 font-semibold text-slate-800">{moment.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600">{moment.text}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
