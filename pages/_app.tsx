import { SessionProvider } from "next-auth/react";
import { AppProps } from "next/app";
import "../styles/nprogress.css";
import NProgress from "../components/Nprogress";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
      <NProgress />
    </SessionProvider>
  );
};

export default App;
