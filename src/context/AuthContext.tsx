import AuthLayout from "@/components/layouts/authLayout";
import UserLayout from "@/components/layouts/userLayout";
import { useRouter } from "next/router";
import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

type AuthContextProviderProps = {
  children: ReactNode;
};

function delay(time: number) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

export const AuthContext = createContext({
  token: "",
  setToken: (x: string) => {},
  login: (username: string, password: string) => {},
  signup: (username: string, password: string) => {},
  logout: () => {},
});

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [token, setToken] = useState("");
  const [authChecking, setAuthChecking] = useState(true);

  const router = useRouter();

  const login = useCallback(
    async (username: string, password: string) => {
      try {
        const res = await fetch("http://localhost:3001/auth/signin", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            password,
          }),
        });
        const authData = await res.json();
        if (authData.accessToken) {
          localStorage.setItem("accessToken", authData.accessToken);
          localStorage.setItem("username", username);
          router.replace("/");
        }
      } catch (error) {
        console.error(error);
      }
    },
    [router]
  );

  const signup = useCallback(
    async (username: string, password: string) => {
      try {
        const res = await fetch("http://localhost:3001/auth/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            password,
          }),
        });
        const authData = await res.json();
        if (authData.accessToken) {
          localStorage.setItem("accessToken", authData.accessToken);
          localStorage.setItem("username", username);
          router.replace("/");
        }
      } catch (error) {
        console.error(error);
      }
    },
    [router]
  );

  const logout = useCallback(() => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("username");
    router.replace("/auth/login");
  }, [router]);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      setAuthChecking(true);
      setToken(accessToken);
      if (router.asPath.includes("auth")) router.replace("/");
    } else {
      setToken("");
      if (!router.asPath.includes("signup")) router.replace("/auth/login");
    }
    delay(1000).then(() => setAuthChecking(false));
  }, [router.asPath]);

  if (authChecking) return null;

  return (
    <AuthContext.Provider value={{ token, setToken, login, signup, logout }}>
      {!token ? (
        <AuthLayout>{children}</AuthLayout>
      ) : (
        <UserLayout>{children}</UserLayout>
      )}
    </AuthContext.Provider>
  );
};
