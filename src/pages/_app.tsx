import { AntdRegistry } from '@ant-design/nextjs-registry';
import 'styles/globals.css';
import 'styles/override.css';

import { ConfigProvider } from 'antd';
import { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';

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
