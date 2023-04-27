import Meta from "@/components/meta"

import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { useRouter } from "next/router"
import { ChakraProvider } from "@chakra-ui/react"
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { ThemeProvider } from "next-themes"

const App = ({ Component, pageProps }: AppProps) => {
  const url = useRouter()
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  })

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        disableTransitionOnChange
      >
        <ChakraProvider>
          <Meta />
          <Component {...pageProps} />
        </ChakraProvider>
        <ReactQueryDevtools />
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App
