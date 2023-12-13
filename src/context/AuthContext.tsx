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
});

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [token, setToken] = useState("");
  const [authChecking, setAuthChecking] = useState(true);

  const router = useRouter();

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");

    if (accessToken) {
      router.replace("/");
    } else {
      router.replace("/auth/login");
    }
  }, [token]);

  const login = useCallback(async (username: string, password: string) => {
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
      localStorage.setItem("accessToken", authData.accessToken);
      setToken(authData.accessToken);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const isAuthPage = useMemo(
    () => router.asPath.includes("/auth"),
    [router.asPath]
  );

  useEffect(() => {
    setAuthChecking(true);
  }, [router.asPath]);

  useEffect(() => {
    delay(1000).then(() => setAuthChecking(false));
  }, [isAuthPage]);

  if (authChecking) return null;

  return (
    <AuthContext.Provider value={{ token, setToken, login }}>
      {isAuthPage ? (
        <AuthLayout>{children}</AuthLayout>
      ) : (
        <UserLayout>{children}</UserLayout>
      )}
    </AuthContext.Provider>
  );
};
