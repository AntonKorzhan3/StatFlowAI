// _app.tsx
import "../styles/globals.css";
import '../styles/tailwind.css'
import { AppProps } from "next/app";
import { ModalProvider, ToastProvider } from '@apideck/components'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ToastProvider>
      <ModalProvider>
        <Component {...pageProps} />
      </ModalProvider>
    </ToastProvider>
  )
}

export default MyApp;
