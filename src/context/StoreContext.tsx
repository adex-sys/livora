import { createContext, useContext, useMemo, useState, useCallback, useRef, type ReactNode } from 'react';
import { products as initialProducts, type Product } from '../data/products';

type StoreContextType = {
  products: Product[];
  productsLoading: boolean;
  productsError: string | null;
  fetchProducts: () => void;
  cart: Product[];
  wishlist: Product[];
  addToCart: (product: Product) => void;
  addToWishlist: (product: Product) => void;
  toggleWishlist: (product: Product) => void;
  removeFromWishlist: (id: Product['id']) => void;
  removeFromCart: (id: Product['id']) => void;
  cartCount: number;
  wishlistCount: number;
};

const StoreContext = createContext<StoreContextType | null>(null);

const API_URL = import.meta.env.VITE_API_URL;

export function StoreProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [productsLoading, setProductsLoading] = useState(false);
  const [productsError, setProductsError] = useState<string | null>(null);
  const [cart, setCart] = useState<Product[]>([]);
  const [wishlist, setWishlist] = useState<Product[]>([]);

  const hasFetchedRef = useRef(false);

  const fetchProducts = useCallback(() => {
    if (hasFetchedRef.current) return;
    hasFetchedRef.current = true;

    setProductsLoading(true);
    setProductsError(null);

    fetch(`${API_URL}/api/products`)
      .then((res) => {
        if (!res.ok) throw new Error(`Request failed: ${res.status}`);
        return res.json();
      })
      .then((data: Product[]) => {
        setProducts(data);
      })
      .catch((err: unknown) => {
        console.error('Failed to fetch products:', err);
        setProductsError(err instanceof Error ? err.message : 'Failed to load products');
        hasFetchedRef.current = false;
      })
      .finally(() => {
        setProductsLoading(false);
      });
  }, []);

  const addToCart = useCallback((product: Product) => {
    setCart((current) => [...current, product]);
  }, []);

  const addToWishlist = useCallback((product: Product) => {
    setWishlist((current) => {
      const exists = current.some((item) => item.id === product.id);
      return exists ? current : [...current, product];
    });
  }, []);

  const removeFromWishlist = useCallback((id: Product['id']) => {
    setWishlist((current) => current.filter((item) => item.id !== id));
  }, []);

  const toggleWishlist = useCallback((product: Product) => {
    setWishlist((current) => {
      const exists = current.some((item) => item.id === product.id);
      return exists ? current.filter((item) => item.id !== product.id) : [...current, product];
    });
  }, []);

  const removeFromCart = useCallback((id: Product['id']) => {
    setCart((current) => current.filter((item) => item.id !== id));
  }, []);

  const value = useMemo(() => ({
    products,
    productsLoading,
    productsError,
    fetchProducts,
    cart,
    wishlist,
    addToCart,
    addToWishlist,
    toggleWishlist,
    removeFromWishlist,
    removeFromCart,
    cartCount: cart.length,
    wishlistCount: wishlist.length,
  }), [products, productsLoading, productsError, fetchProducts, addToCart, addToWishlist, cart, removeFromCart, removeFromWishlist, toggleWishlist, wishlist]);

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore() {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within StoreProvider');
  }
  return context;
}