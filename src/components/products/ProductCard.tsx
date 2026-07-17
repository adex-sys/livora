import { Link } from 'react-router-dom';
import type { Product } from '../../data/products';

type ProductCardProps = {
  product: Product;
  onSave?: (product: Product) => void;
  onAddToCart?: (product: Product) => void;
  isSaved?: boolean;
  showSave?: boolean;
  compact?: boolean;
};

export default function ProductCard({
  product,
  onSave,
  onAddToCart, 
  isSaved = false,
  showSave = false,
  compact = false,
}: ProductCardProps) {
return (
    <div className={`rounded-[1.75rem] border border-slate-200 bg-white p-4 shadow-sm sm:p-5 ${compact ? 'p-4' : ''}`}>
      {product.images?.[0] ? (
        <img
          src={product.images[0]}
          alt={product.name}
          className={`rounded-[1.2rem] w-full object-cover ${compact ? 'h-40 sm:h-44' : 'h-40 sm:h-48'}`}
        />
      ) : (
        <div className={`rounded-[1.2rem] ${compact ? 'h-40 sm:h-44' : 'h-40 sm:h-48'}`} style={{ background: product.accent }} />
      )}
      <div className="mt-4 sm:mt-5">
        <div className="flex items-center justify-between gap-3">
          <p className="text-sm font-semibold text-gold-700">{product.tag}</p>
          {showSave && onSave ? (
            <button
              type="button"
              onClick={(event) => {
                event.preventDefault();
                onSave(product);
              }}
              className={`text-sm font-semibold ${isSaved ? 'text-purple-700' : 'text-slate-500'}`}
            >
              {isSaved ? 'Remove from wishlist' : 'Add to wishlist'}
            </button>
          ) : null}
        </div>
        <Link to={`/product/${product.id}`} className="mt-1 block font-display text-xl font-semibold text-slate-800 hover:text-purple-700">
          {product.name}
        </Link>
        <p className="mt-2 text-sm text-slate-600">{product.description}</p>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-lg font-semibold text-purple-900">${product.price}</span>
          {onAddToCart ? (
            <button
              type="button"
              onClick={(event) => {
                event.preventDefault();
                onAddToCart(product);
              }}
              className="rounded-full bg-purple-700 px-4 py-2 text-sm font-semibold text-white"
            >
              Add to cart
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}