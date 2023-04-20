import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";

import ErrorBoundary from "@/components/ErrorBoundary"; // Update the import path accordingly

const inter = Inter({ subsets: ["latin"] });

function App({ Component, pageProps }: AppProps<{}>) {
  return (
    <main className={inter.className}>
      <ErrorBoundary>
      <Component {...pageProps} />
      </ErrorBoundary>
    </main>
  );
}

export default App;