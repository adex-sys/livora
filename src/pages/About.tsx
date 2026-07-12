import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const storyItems = [
  {
    title: 'Founded in a small atelier',
    year: '2018',
    description: 'A team of designers, artisans, and dreamers opened LIVORA with a simple goal: furniture that feels sculptural, soft, and beautifully made.',
  },
  {
    title: 'First signature collection',
    year: '2019',
    description: 'The inaugural drop introduced lounge seating, tables, and storage that married clean proportions with tactile natural surfaces.',
  },
  {
    title: 'Design workshops',
    year: '2020',
    description: 'We began collaborating with interior designers and makers to refine each detail—from frame geometry to upholstery finish.',
  },
  {
    title: 'Global roundtable',
    year: '2021',
    description: 'LIVORA expanded with a focus on sustainable sourcing, thoughtful production, and bolder material pairings for modern homes.',
  },
  {
    title: 'Showroom debut',
    year: '2023',
    description: 'The first LIVORA showroom opened, bringing our furniture into a tactile space for customers to experience comfort and craftsmanship in person.',
  },
  {
    title: 'LIVORA today',
    year: '2024',
    description: 'We continue to make furniture that feels at once luxurious, lived-in, and utterly welcoming for everyday interiors.',
  },
];

const reviews = [
  {
    name: 'Maya Chen',
    role: 'San Francisco designer',
    quote: 'LIVORA transformed my studio with rich materials and calm silhouettes. Every piece feels thoughtful and effortless.',
    rating: 5,
  },
  {
    name: 'Ethan Morris',
    role: 'Interior consultant',
    quote: 'The craftsmanship is obvious at every touchpoint. The sofa and sideboard are the highlights of my latest project.',
    rating: 4.8,
  },
  {
    name: 'Noelle Grant',
    role: 'Boutique hotel owner',
    quote: 'The collection brings the kind of luxury that feels warm and lived-in—perfect for guest rooms and lounges.',
    rating: 4.9,
  },
];

export default function About() {
  return (
    <div>
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <motion.section initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
          <div className="grid gap-8 grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold-600">About LIVORA</p>
              <h1 className="mt-3 font-display text-3xl font-semibold text-purple-950 sm:text-4xl">A richer history of modern furniture and thoughtful craft.</h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                Born in a small atelier, LIVORA began with one simple belief: furniture should feel tactile, comfortable, and quietly luxurious. Today that ethos guides every silhouette, from lounge seating to welcoming dining pieces.
              </p>
              <div className="mt-6 flex flex-col gap-4 rounded-[1.75rem] bg-slate-50 p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:max-w-xl">
                <div className="min-w-0 flex-1">
                  <p className="text-sm uppercase tracking-[0.3em] text-gold-600">Our beginning</p>
                  <p className="text-base leading-7 text-slate-700">
                    The first collection was created around hand-drawn sketches and carefully selected materials. Early customers loved the way our pieces felt polished yet lived-in—so we kept building with that same sense of ease.
                  </p>
                </div>
                <Link
                  to="/"
                  className="inline-flex w-full justify-center rounded-full bg-purple-950 px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-purple-800 sm:w-auto sm:flex-none"
                >
                  Back to home
                </Link>
              </div>
              <div className="mt-6 grid gap-4 rounded-[1.75rem] bg-slate-50 p-6 shadow-sm sm:max-w-xl">
                <p className="text-sm uppercase tracking-[0.3em] text-gold-600">Our beginning</p>
                <p className="text-base leading-7 text-slate-700">
                  The first collection was created around hand-drawn sketches and carefully selected materials. Early customers loved the way our pieces felt polished yet lived-in—so we kept building with that same sense of ease.
                </p>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-[1.5rem] bg-white p-4 shadow-sm">
                    <p className="text-sm font-semibold text-purple-950">2018</p>
                    <p className="mt-2 text-sm text-slate-600">Handcrafted seating and storage launched from our first studio.</p>
                  </div>
                  <div className="rounded-[1.5rem] bg-white p-4 shadow-sm">
                    <p className="text-sm font-semibold text-purple-950">2020</p>
                    <p className="mt-2 text-sm text-slate-600">Design workshops helped us refine comfort, scale, and material pairing.</p>
                  </div>
                </div>
                <div className="rounded-[1.5rem] bg-white p-4 shadow-sm">
                  <p className="text-sm font-semibold text-purple-950">What we believe</p>
                  <ul className="mt-3 space-y-2 text-sm text-slate-600">
                    <li>Craft should feel warm, modern, and timeless.</li>
                    <li>Great furniture should be lived in, not just admired.</li>
                    <li>Every detail matters, from material to silhouette.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 sm:gap-4">
              <div className="relative overflow-hidden rounded-[1.75rem] bg-slate-100 hover:scale-105 transition-transform duration-300">
                <img
                  src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80"
                  alt="Wood furniture detail"
                  className="h-48 w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
              </div>
              <div className="relative overflow-hidden rounded-[1.75rem] bg-slate-100 hover:scale-105 transition-transform duration-300">
                <img
                  src="https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80"
                  alt="Luxurious living room"
                  className="h-48 w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </motion.section>

        <section className="mt-12 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="relative">
            <div className="absolute left-6 top-20 hidden h-[calc(100%-5rem)] w-1 rounded-full bg-gradient-to-b from-purple-200 via-purple-100 to-transparent xl:block" />
            <div className="space-y-6 md:space-y-8">
              {storyItems.map((item, index) => (
                <motion.article
                  key={item.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45, delay: index * 0.1 }}
                  className="relative rounded-[1.75rem] border border-slate-200 bg-white p-6 sm:p-8 sm:pl-20 shadow-sm"
                >
                  <div className="absolute left-4 top-10 flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-purple-700 text-white shadow-lg">
                    {index + 1}
                  </div>
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold-600">Our story</p>
                      <h2 className="mt-2 text-2xl font-semibold text-purple-950">{item.title}</h2>
                    </div>
                    <div className="rounded-full bg-purple-700 px-4 py-2 text-sm font-semibold text-white">{item.year}</div>
                  </div>
                  <p className="mt-5 text-base leading-7 text-slate-600">{item.description}</p>
                </motion.article>
              ))}
            </div>
          </div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5 }} className="space-y-6 rounded-[2rem] border border-slate-200 bg-[#f7f2ed] p-6 shadow-sm sm:p-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold-600">Our heritage</p>
              <h2 className="mt-3 text-3xl font-semibold text-purple-950">Design with a story.</h2>
            </div>
            <p className="text-base leading-7 text-slate-700">
              Each piece is born from a love for tactile surfaces, layered textures, and inviting silhouettes. Our craft blends contemporary ideas with traditional making, so every product feels as refined as it is relaxed.
            </p>

            <div className="grid gap-4 rounded-[1.75rem] bg-white p-5 shadow-sm">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-semibold text-purple-950">Hand-selected materials</p>
                  <p className="mt-2 text-sm text-slate-600">Sustainably sourced woods, soft upholstery, and artisanal finishes.</p>
                </div>
                <div className="text-lg font-semibold text-purple-700">98%</div>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-semibold text-purple-950">Thoughtful interiors</p>
                  <p className="mt-2 text-sm text-slate-600">Pieces designed to feel grounded and adaptable in real homes.</p>
                </div>
                <div className="text-lg font-semibold text-purple-700">4.9/5</div>
              </div>
            </div>

            <div className="rounded-[1.75rem] bg-white p-6 shadow-sm">
              <p className="text-sm uppercase tracking-[0.3em] text-gold-600">Customer love</p>
              <div className="mt-4 flex items-center gap-3">
                <div className="rounded-full bg-purple-700 px-3 py-2 text-sm font-semibold text-white">4.9</div>
                <div>
                  <p className="text-lg font-semibold text-purple-950">Average review score</p>
                  <p className="text-sm text-slate-600">Based on hundreds of delighted customers.</p>
                </div>
              </div>
              <div className="mt-6 flex gap-1 text-gold-500">
                {[...Array(5)].map((_, index) => (
                  <Star key={index} size={18} className="text-gold-500" />
                ))}
              </div>
            </div>
            <div className="space-y-4 rounded-[1.75rem] bg-white p-6 shadow-sm">
              <p className="text-sm uppercase tracking-[0.3em] text-gold-600">Client reviews</p>
              {reviews.map((review) => (
                <div key={review.name} className="rounded-[1.5rem] border border-slate-200 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="font-semibold text-purple-950">{review.name}</p>
                      <p className="text-sm text-slate-500">{review.role}</p>
                    </div>
                    <div className="rounded-full bg-purple-700 px-3 py-1 text-sm font-semibold text-white">{review.rating.toFixed(1)}</div>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-slate-600">“{review.quote}”</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
