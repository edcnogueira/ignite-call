import { globalStyles } from '@/styles/global'
import { Roboto } from '@next/font/google'
import type { AppProps } from 'next/app'

globalStyles()
const roboto = Roboto({ weight: ['400', '500', '700'], subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={roboto.className}>
      <Component {...pageProps} />
    </main>
  )
}
