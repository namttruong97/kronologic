import { AntdRegistry } from '@ant-design/nextjs-registry';
import 'styles/globals.css';
import 'styles/override.css';

import { ConfigProvider } from 'antd';
import { Metadata } from 'next';
import { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';

export const metadata: Metadata = {
  title: 'Kronologic Paris 1920',
  description: 'The app support checking result for Kronologic Paris 1920.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
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
  );
}

export default MyApp;
