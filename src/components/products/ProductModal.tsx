import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import type { Product } from '../../data/products';

type ProductModalProps = {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart?: (product: Product) => void;
};

export default function ProductModal({ product, isOpen, onClose, onAddToCart }: ProductModalProps) {
  if (!product) return null;

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/70 px-4 py-6 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative w-full max-w-4xl overflow-hidden rounded-[2rem] bg-white shadow-2xl"
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ duration: 0.2 }}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 z-10 rounded-full bg-white/90 p-2 text-slate-600 shadow-sm transition hover:text-purple-700"
              aria-label="Close product preview"
            >
              <X size={18} />
            </button>

            <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="bg-slate-50 p-4 sm:p-6 lg:p-8">
                {product.images?.[0] ? (
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="h-[280px] w-full rounded-[1.4rem] object-cover sm:h-[360px]"
                  />
                ) : (
                  <div
                    className="h-[280px] w-full rounded-[1.4rem] sm:h-[360px]"
                    style={{ background: product.accent }}
                  />
                )}
              </div>

              <div className="flex flex-col justify-between p-5 sm:p-7 lg:p-8">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold-600">{product.tag}</p>
                  <h2 className="mt-3 font-display text-2xl font-semibold text-slate-900">{product.name}</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{product.description}</p>

                  <div className="mt-5 rounded-[1.2rem] border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-900">
                    <div className="flex items-center justify-between text-sm text-slate-600 dark:text-slate-300">
                      <span>Category</span>
                      <span className="font-semibold text-slate-800 dark:text-slate-100">{product.category}</span>
                    </div>
                    <div className="mt-3 flex items-center justify-between text-sm text-slate-600 dark:text-slate-300">
                      <span>Price</span>
                      <span className="text-xl font-semibold text-purple-900 dark:text-purple-200">${product.price}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      onAddToCart?.(product);
                      onClose();
                    }}
                    className="rounded-full bg-purple-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-purple-800"
                  >
                    Add to cart
                  </button>
                  <button
                    type="button"
                    onClick={onClose}
                    className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-purple-300 hover:text-purple-700"
                  >
                    Keep browsing
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
