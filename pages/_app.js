import 'tailwindcss/tailwind.css';
import styles from '@/styles/globals.css';
import GlobalStyles from '@/components/GlobalStyles';
import { RecoilRoot } from 'recoil';

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default MyApp;
