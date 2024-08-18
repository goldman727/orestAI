import '../styles/globals.css'
import '@radix-ui/themes/styles.css';
import { AppProps } from 'next/app';
import { Theme } from '@radix-ui/themes';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Theme>
      <Component {...pageProps} />
    </Theme>
  );
}

export default MyApp