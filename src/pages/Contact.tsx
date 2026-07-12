import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Sparkles } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const contactPoints = [
  {
    title: 'Showroom visits',
    description: 'Schedule a tour of our flagship showroom and experience the collection in person.',
    icon: MapPin,
  },
  {
    title: 'Customer support',
    description: 'Ask about delivery, material choices, custom orders, or product care.',
    icon: Mail,
  },
  {
    title: 'Concierge line',
    description: 'Connect directly with our design concierges for tailored furniture planning.',
    icon: Phone,
  },
];

export default function Contact() {
  return (
    <div>
      <Navbar />
      <main className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="grid w-full gap-10 2xl:grid-cols-2 2xl:items-start 2xl:gap-12"
        >
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold-600">Get in touch</p>
            <h1 className="mt-3 font-display text-3xl font-semibold text-purple-950 sm:text-4xl">
              Design support and concierge assistance.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
              Whether you need sourcing advice, styling guidance, or a custom furniture quote, our team is ready to help you create a home that feels both luxurious and relaxed.
            </p>
            <div className="mt-8 grid gap-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
              {contactPoints.map((point) => {
                const Icon = point.icon;
                return (
                  <div key={point.title} className="min-w-0 rounded-[1.75rem] border border-slate-200 bg-slate-50 p-5 sm:p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-950 text-white shadow-sm">
                      <Icon size={20} />
                    </div>
                    <h2 className="mt-4 text-lg font-semibold text-purple-950">{point.title}</h2>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{point.description}</p>
                  </div>
                );
              })}
            </div>
            <div className="mt-10 rounded-[1.75rem] border border-purple-100 bg-purple-950/5 p-6 sm:p-8">
              <div className="flex items-center gap-4 text-purple-950">
                <Sparkles size={22} className="text-gold-500" />
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-gold-600">Fast response</p>
                  <p className="mt-1 text-base font-semibold">We reply within one business day.</p>
                </div>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <div className="rounded-[1.5rem] bg-white p-4 shadow-sm">
                  <p className="text-sm text-slate-500">Email</p>
                  <p className="mt-2 font-semibold text-purple-950">hello@livora.design</p>
                </div>
                <div className="rounded-[1.5rem] bg-white p-4 shadow-sm">
                  <p className="text-sm text-slate-500">Phone</p>
                  <p className="mt-2 font-semibold text-purple-950">+1 (555) 012-8492</p>
                </div>
                <div className="rounded-[1.5rem] bg-white p-4 shadow-sm">
                  <p className="text-sm text-slate-500">Hours</p>
                  <p className="mt-2 font-semibold text-purple-950">Mon–Fri, 9am–6pm</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold-600">Contact form</p>
            <h2 className="mt-3 text-3xl font-semibold text-purple-950 sm:text-4xl">Start your next project.</h2>
            <p className="mt-4 text-slate-600">
              Share a few details below and our team will respond with tailored design ideas and available timelines.
            </p>
            <form className="mt-8 space-y-5">
              <div className="grid gap-5 grid-cols-1 sm:grid-cols-2">
                <label className="flex min-w-0 flex-col gap-2 text-sm text-slate-700">
                  Name
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-purple-700"
                  />
                </label>
                <label className="flex min-w-0 flex-col gap-2 text-sm text-slate-700">
                  Email
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-purple-700"
                  />
                </label>
              </div>

              <label className="flex flex-col gap-2 text-sm text-slate-700">
                Project details
                <textarea
                  rows={5}
                  placeholder="Tell us what you’re planning and how we can help."
                  className="rounded-[1.75rem] border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-900 outline-none transition focus:border-purple-700"
                />
              </label>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="flex flex-col gap-2 text-sm text-slate-700">
                  Budget range
                  <select className="w-full rounded-4xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-purple-700">
                    <option>Choose a range</option>
                    <option>$5k–$10k</option>
                    <option>$10k–$20k</option>
                    <option>$20k+</option>
                  </select>
                </label>
                <label className="flex flex-col gap-2 text-sm text-slate-700">
                  Preferred contact
                  <select className="w-full rounded-4xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-purple-700">
                    <option>Email</option>
                    <option>Phone</option>
                    <option>Video consultation</option>
                  </select>
                </label>
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-full bg-purple-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-purple-800"
              >
                Send request
              </button>
            </form>
          </div>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
}
