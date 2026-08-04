import {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from "react";

const API_URL = import.meta.env.VITE_API_URL;

// Matches your backend's getUser response shape
interface User {
  username: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  hasCheckedAuth: boolean; // has the initial /me check run yet
  login: (email: string, password: string) => Promise<{ success: boolean; message?: string }>;
  register: (
    email: string,
    password: string,
    username: string
  ) => Promise<{ success: boolean; message?: string }>;
  logout: () => Promise<void>;
  checkAuth: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasCheckedAuth, setHasCheckedAuth] = useState(false);

  // Fetch-on-first-need: call this once when the app needs to know
  // auth state (e.g. on app mount, in App.tsx)
  const checkAuth = useCallback(async () => {
    if (hasCheckedAuth) return; // already checked, don't refetch every time

    setIsLoading(true);
    try {
      const res = await fetch(`${API_URL}/api/auth/me`, {
        credentials: "include",
      });

      if (res.ok) {
        const data = await res.json();
        setUser(data.user);
      } else {
        setUser(null);
      }
    } catch (err) {
      console.error("Auth check failed:", err);
      setUser(null);
    } finally {
      setIsLoading(false);
      setHasCheckedAuth(true);
    }
  }, [hasCheckedAuth]);

  const login = useCallback(async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const res = await fetch(`${API_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        return { success: false, message: data.message || "Login failed" };
      }

      // Cookie is set by the backend automatically.
      // We still need user details for UI, so fetch them.
      const meRes = await fetch(`${API_URL}/api/auth/me`, {
        credentials: "include",
      });
      const meData = await meRes.json();
      setUser(meData.user);
      setHasCheckedAuth(true);

      return { success: true };
    } catch (err) {
      console.error("Login error:", err);
      return { success: false, message: "Something went wrong" };
    } finally {
      setIsLoading(false);
    }
  }, []);

  const register = useCallback(
    async (email: string, password: string, username: string) => {
      setIsLoading(true);
      try {
        const res = await fetch(`${API_URL}/api/auth/register`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify({ email, password, username }),
        });

        const data = await res.json();

        if (!res.ok) {
          return { success: false, message: data.message || "Registration failed" };
        }

        const meRes = await fetch(`${API_URL}/api/auth/me`, {
          credentials: "include",
        });
        const meData = await meRes.json();
        setUser(meData.user);
        setHasCheckedAuth(true);

        return { success: true };
      } catch (err) {
        console.error("Register error:", err);
        return { success: false, message: "Something went wrong" };
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  const logout = useCallback(async () => {
    setIsLoading(true);
    try {
      await fetch(`${API_URL}/api/auth/logout`, {
        method: "POST",
        credentials: "include",
      });
    } catch (err) {
      console.error("Logout error:", err);
    } finally {
      setUser(null);
      setIsLoading(false);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        hasCheckedAuth,
        login,
        register,
        logout,
        checkAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};