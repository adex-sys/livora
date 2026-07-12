import { createContext, useContext, useMemo, useState, useCallback, type ReactNode } from 'react';
import { products as initialProducts, type Product } from '../data/products';

type StoreContextType = {
  products: Product[];
  cart: Product[];
  wishlist: Product[];
  addToCart: (product: Product) => void;
  addToWishlist: (product: Product) => void;
  toggleWishlist: (product: Product) => void;
  removeFromWishlist: (id: number) => void;
  removeFromCart: (id: number) => void;
  cartCount: number;
  wishlistCount: number;
};

const StoreContext = createContext<StoreContextType | null>(null);

export function StoreProvider({ children }: { children: ReactNode }) {
  const [products] = useState(initialProducts);
  const [cart, setCart] = useState<Product[]>([]);
  const [wishlist, setWishlist] = useState<Product[]>([]);

  const addToCart = useCallback((product: Product) => {
    setCart((current) => [...current, product]);
  }, []);

  const addToWishlist = useCallback((product: Product) => {
    setWishlist((current) => {
      const exists = current.some((item) => item.id === product.id);
      return exists ? current : [...current, product];
    });
  }, []);

  const removeFromWishlist = useCallback((id: number) => {
    setWishlist((current) => current.filter((item) => item.id !== id));
  }, []);

  const toggleWishlist = useCallback((product: Product) => {
    setWishlist((current) => {
      const exists = current.some((item) => item.id === product.id);
      return exists ? current.filter((item) => item.id !== product.id) : [...current, product];
    });
  }, []);

  const removeFromCart = useCallback((id: number) => {
    setCart((current) => current.filter((item) => item.id !== id));
  }, []);

  const value = useMemo(() => ({
    products,
    cart,
    wishlist,
    addToCart,
    addToWishlist,
    toggleWishlist,
    removeFromWishlist,
    removeFromCart,
    cartCount: cart.length,
    wishlistCount: wishlist.length,
  }), [addToCart, addToWishlist, cart, products, removeFromCart, removeFromWishlist, toggleWishlist, wishlist]);

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore() {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within StoreProvider');
  }
  return context;
}
