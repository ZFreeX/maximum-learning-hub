
import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
import '../src/index.css'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      <Component {...pageProps} />
    </div>
  )
}
