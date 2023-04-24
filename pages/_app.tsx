import type { AppProps } from "next/app";
import Layout from "@/components/Layout";
import Context from "@/components/context/Context";
import { Montserrat } from "next/font/google";
import { ParallaxProvider } from "react-scroll-parallax";
import "@/styles/globals.scss";

import localFont from "next/font/local";

const myFont = localFont({
  src: [
    { path: "../public/fonts/Pretendard-Black.woff", weight: "900", style: "normal" },
    { path: "../public/fonts/Pretendard-ExtraBold.woff", weight: "800", style: "normal" },
    { path: "../public/fonts/Pretendard-Bold.woff", weight: "700", style: "normal" },
    { path: "../public/fonts/Pretendard-SemiBold.woff", weight: "600", style: "normal" },
    { path: "../public/fonts/Pretendard-Medium.woff", weight: "500", style: "normal" },
    { path: "../public/fonts/Pretendard-Regular.woff", weight: "400", style: "normal" },
    { path: "../public/fonts/Pretendard-Light.woff", weight: "300", style: "normal" },
    { path: "../public/fonts/Pretendard-ExtraLight.woff", weight: "200", style: "normal" },
    { path: "../public/fonts/Pretendard-Thin.woff", weight: "100", style: "normal" },
  ],
});

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Context>
      <div className={montserrat.className}>
        <ParallaxProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ParallaxProvider>
      </div>
    </Context>
  );
}
