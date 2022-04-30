import "../styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        src="//dapi.kakao.com/v2/maps/sdk.js?appkey=6887e18eea343d9ecb3cc5e964acd13b&libraries=services,clusterer&autoload=false"
        strategy="beforeInteractive"
      ></Script>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
