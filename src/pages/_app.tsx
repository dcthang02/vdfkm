import "@/styles/globals.css";
import "remixicon/fonts/remixicon.css";
import NextNProgress from "nextjs-progressbar";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useMemo } from "react";
import AuthLayout from "@/components/layouts/authLayout";
import { AuthContextProvider } from "@/context/AuthContext";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
      <AuthContextProvider>
        <NextNProgress
          color="#588af5"
          stopDelayMs={300}
          showOnShallow={false}
          options={{ showSpinner: false, easing: "ease", speed: 500 }}
        />

        <Component {...pageProps} />
      </AuthContextProvider>
    </>
  );
}
