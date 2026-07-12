import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import AppRoutes from './routes/route';

function App() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const offTimer = window.setTimeout(() => setIsLoading(false), 240);

    return () => window.clearTimeout(offTimer);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-[#fcfaf8] text-slate-800 relative dark:bg-slate-950 dark:text-slate-100">
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="page-loader"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 py-2"
          >
            <div className="flex h-3 w-full max-w-3xl overflow-hidden rounded-full bg-slate-200 shadow-sm">
              <motion.div
                className="h-full w-2/5 rounded-full bg-gradient-to-r from-purple-900 via-purple-700 to-gold-500"
                initial={{ x: '-100%' }}
                animate={{ x: ['-100%', '100%'] }}
                transition={{ repeat: Infinity, duration: 0.9, ease: 'easeInOut' }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
        >
          <AppRoutes location={location} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default App;
