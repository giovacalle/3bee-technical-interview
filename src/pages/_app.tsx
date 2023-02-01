import { BoardContextProvider } from "@/stores/BoardContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";

const reactQueryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={reactQueryClient}>
      <BoardContextProvider>
        <Component {...pageProps} />
      </BoardContextProvider>
    </QueryClientProvider>
  );
}

