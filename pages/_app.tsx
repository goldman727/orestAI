import '../styles/globals.css';
import '../styles/custom.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { AppProps } from 'next/app';
import Rollbar from 'rollbar';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp