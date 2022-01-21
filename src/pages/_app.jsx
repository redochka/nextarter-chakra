/* eslint-disable react/jsx-props-no-spreading */
import { ChakraProvider } from "@chakra-ui/react";
import { CacheProvider } from "@emotion/react";
import { DefaultSeo } from "next-seo";
import Head from "next/head";
import "@fontsource/lexend/latin.css";

import defaultSEOConfig from "../../next-seo.config";
import Layout from "components/layout";
import createEmotionCache from "styles/createEmotionCache";
import customTheme from "styles/customTheme";
import "styles/globals.css";

const clientSideEmotionCache = createEmotionCache();

const MyApp = ({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}) => {
  return (
    <CacheProvider value={emotionCache}>
      <ChakraProvider theme={customTheme}>
        <Head>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
          />
        </Head>
        <DefaultSeo {...defaultSEOConfig} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </CacheProvider>
  );
};

MyApp.defaultProps = {
  emotionCache: clientSideEmotionCache,
};

export default MyApp;
