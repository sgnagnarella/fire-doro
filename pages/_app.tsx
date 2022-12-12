import '../styles/globals.css'
import type { AppProps } from 'next/app'
import intializeFirebase from '../firebase/firebaseInit';

export default function App({ Component, pageProps }: AppProps) {
  intializeFirebase();
  
  return <Component {...pageProps} />
}
