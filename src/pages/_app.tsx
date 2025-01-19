import { AntdRegistry } from '@ant-design/nextjs-registry';
import 'styles/globals.css';
import 'styles/override.css';

import { ConfigProvider } from 'antd';
import { Metadata } from 'next';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { QueryClient, QueryClientProvider } from 'react-query';

export const metadata: Metadata = {
  title: 'Kronologic Paris 1920',
  description: 'The app support checking result for Kronologic Paris 1920.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <>
      <Head>
        <title>Kronologic Paris 1920</title>
        <meta name="title" content="Kronologic Paris 1920" />
        <meta
          name="description"
          content="The app support checking result for Kronologic Paris 1920"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io/" />
        <meta property="og:title" content="Kronologic Paris 1920" />
        <meta
          property="og:description"
          content="The app support checking result for Kronologic Paris 1920"
        />
        <meta property="og:image" content="https://metatags.io/images/meta-tags.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta property="twitter:title" content="Kronologic Paris 1920" />
        <meta
          property="twitter:description"
          content="The app support checking result for Kronologic Paris 1920"
        />
        <meta property="twitter:image" content="https://metatags.io/images/meta-tags.png" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Head>
      <AntdRegistry>
        <QueryClientProvider client={queryClient}>
          <ConfigProvider
            theme={{
              components: {},
            }}
          >
            <Component {...pageProps} />
          </ConfigProvider>
        </QueryClientProvider>
      </AntdRegistry>
    </>
  );
}

export default MyApp;
