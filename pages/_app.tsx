import Head from "next/head";
import type { AppProps } from "next/app";
import { Global } from "@emotion/react";
import globalStyles from "@styles/shared/global";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Hardik Shimpi | Portfolio</title>
      </Head>
      <Global styles={globalStyles} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
