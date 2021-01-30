import 'tailwindcss/tailwind.css';
import styles from '@/styles/globals.css';
import GlobalStyles from '@/components/GlobalStyles';
import { ParallaxProvider } from 'react-scroll-parallax';
import { RecoilRoot } from 'recoil';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import * as gtag from '../lib/gtag';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <RecoilRoot>
      <ParallaxProvider>
        <Component {...pageProps} />
      </ParallaxProvider>
    </RecoilRoot>
  );
}

export default MyApp;
