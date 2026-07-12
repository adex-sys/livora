import { FormEvent, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Eye, EyeOff, Lock, Mail, Sparkles, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    window.setTimeout(() => setIsSubmitting(false), 900);
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(91,42,134,0.18),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(200,169,107,0.24),_transparent_28%)]">
      <Navbar />
      <main className="mx-auto flex min-h-[calc(100vh-8rem)] max-w-7xl items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid w-full max-w-6xl gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div initial={{ opacity: 0, x: -18 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="rounded-[2rem] border border-white/70 bg-white/70 p-8 shadow-xl backdrop-blur-xl sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold-600">Join LIVORA</p>
            <h1 className="mt-3 font-display text-3xl font-semibold text-purple-950 sm:text-4xl">Craft your signature space.</h1>
            <p className="mt-4 max-w-lg text-sm leading-7 text-slate-600">Create an account to save favorites, receive exclusive drops, and personalize every corner of your home.</p>
            <div className="mt-8 space-y-3">
              {['Private wishlist', 'Early access to launches', 'Design concierge support'].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-full border border-purple-100 bg-purple-50/70 px-4 py-3 text-sm font-medium text-purple-800">
                  <Sparkles size={16} />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.form initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} onSubmit={handleSubmit} className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/85 p-7 shadow-2xl backdrop-blur-xl sm:p-8">
            <div className="auth-ambient absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(91,42,134,0.12),_transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(200,169,107,0.18),_transparent_40%)]" />
            <div className="relative">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold-600">Create account</p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-purple-950">Let’s make it personal</h2>
              <div className="mt-6 space-y-4">
                <label className="block text-sm font-medium text-slate-700">
                  Full name
                  <div className="mt-2 flex items-center rounded-full border border-slate-200 bg-white px-4 py-3 shadow-sm">
                    <User size={16} className="mr-3 text-slate-400" />
                    <input className="w-full bg-transparent outline-none" placeholder="Ava Morgan" />
                  </div>
                </label>
                <label className="block text-sm font-medium text-slate-700">
                  Email
                  <div className="mt-2 flex items-center rounded-full border border-slate-200 bg-white px-4 py-3 shadow-sm">
                    <Mail size={16} className="mr-3 text-slate-400" />
                    <input className="w-full bg-transparent outline-none" placeholder="you@example.com" />
                  </div>
                </label>
                <label className="block text-sm font-medium text-slate-700">
                  Password
                  <div className="mt-2 flex items-center rounded-full border border-slate-200 bg-white px-4 py-3 shadow-sm">
                    <Lock size={16} className="mr-3 text-slate-400" />
                    <input className="w-full bg-transparent outline-none" placeholder="Create a secure password" type={showPassword ? 'text' : 'password'} />
                    <button type="button" onClick={() => setShowPassword((value) => !value)} className="ml-2 text-slate-500">
                      {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                </label>
                <motion.button whileTap={{ scale: 0.97 }} type="submit" className="flex w-full items-center justify-center gap-2 rounded-full bg-purple-700 px-4 py-3 font-semibold text-white shadow-lg shadow-purple-200">
                  {isSubmitting ? 'Creating your account…' : 'Create account'}
                  <ArrowRight size={16} />
                </motion.button>
              </div>
              <p className="mt-5 text-sm text-slate-600">
                Already have an account? <Link to="/login" className="font-semibold text-purple-700">Sign in</Link>
              </p>
            </div>
          </motion.form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
