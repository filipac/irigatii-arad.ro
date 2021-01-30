import 'tailwindcss/tailwind.css';
import styles from '@/styles/globals.css';
import GlobalStyles from '@/components/GlobalStyles';
import { ParallaxProvider } from 'react-scroll-parallax';
import { RecoilRoot } from 'recoil';

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <ParallaxProvider>
        <Component {...pageProps} />
      </ParallaxProvider>
    </RecoilRoot>
  );
}

export default MyApp;
