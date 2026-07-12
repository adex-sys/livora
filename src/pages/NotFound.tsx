import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#fcfaf8] px-4">
      <div className="max-w-md rounded-[2rem] border border-slate-200 bg-white p-10 text-center shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold-600">404</p>
        <h1 className="mt-3 font-display text-3xl font-semibold text-purple-950">Page not found</h1>
        <p className="mt-4 text-slate-600">The page you were looking for doesn't exist or has moved.</p>
        <Link to="/" className="mt-6 inline-flex rounded-full bg-purple-700 px-5 py-3 font-semibold text-white">Back home</Link>
      </div>
    </main>
  );
}
