import dotenv from 'dotenv'
import '../styles/globals.css'
dotenv.config()

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
