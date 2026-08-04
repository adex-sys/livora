import { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { useTheme } from '../context/ThemeContext';

export default function Settings() {
  const { theme, setTheme, toggleTheme } = useTheme();
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [currency, setCurrency] = useState('USD');

  return (
    <div>
      <Navbar />
      <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-950/95">
          <h1 className="font-display text-3xl font-semibold text-purple-950 dark:text-purple-100">Settings</h1>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-300">
            Manage your preferred theme, notifications, and account preferences from one place.
          </p>

          <section className="mt-10 space-y-8">
            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-900">
              <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Appearance</h2>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Choose the appearance and theme settings that suit your browsing experience.</p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={() => setTheme('light')}
                  className={`rounded-2xl border px-4 py-3 text-left transition ${theme === 'light' ? 'border-purple-700 bg-purple-50 text-purple-900' : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:hover:bg-slate-800'}`}
                >
                  <p className="font-semibold">Light mode</p>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Bright, airy layout for daytime browsing.</p>
                </button>
                <button
                  type="button"
                  onClick={() => setTheme('dark')}
                  className={`rounded-2xl border px-4 py-3 text-left transition ${theme === 'dark' ? 'border-purple-700 bg-purple-50 text-purple-900' : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:hover:bg-slate-800'}`}
                >
                  <p className="font-semibold">Dark mode</p>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">A low-light palette to reduce eye strain and look elegant.</p>
                </button>
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-900">
              <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Preferences</h2>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Set your notifications and currency preferences.</p>
              <div className="mt-6 space-y-4">
                <button
                  type="button"
                  onClick={() => toggleTheme()}
                  className="w-full rounded-2xl border border-purple-700 bg-purple-700 px-4 py-3 text-sm font-semibold text-white transition hover:bg-purple-800"
                >
                  Toggle theme now
                </button>
                <div className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-950">
                  <label className="flex items-center justify-between text-sm text-slate-700 dark:text-slate-200">
                    <span>Notifications</span>
                    <button
                      type="button"
                      onClick={() => setNotificationsEnabled((prev) => !prev)}
                      className={`rounded-full px-4 py-2 text-sm font-semibold transition ${notificationsEnabled ? 'bg-purple-700 text-white' : 'bg-slate-200 text-slate-700 dark:bg-slate-800 dark:text-slate-200'}`}
                    >
                      {notificationsEnabled ? 'Enabled' : 'Disabled'}
                    </button>
                  </label>
                  <label className="text-sm text-slate-700 dark:text-slate-200">
                    Currency
                    <select
                      value={currency}
                      onChange={(event) => setCurrency(event.target.value)}
                      className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
                    >
                      <option value="USD">USD</option>
                      <option value="EUR">EUR</option>
                      <option value="GBP">GBP</option>
                    </select>
                  </label>
                </div>
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-900">
              <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Account</h2>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Quick access to your account settings and preferences.</p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <button type="button" className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-left text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:hover:bg-slate-800">
                  Profile settings
                </button>
                <button type="button" className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-left text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:hover:bg-slate-800">
                  Security preferences
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
