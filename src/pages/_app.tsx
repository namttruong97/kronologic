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
            components: {
              // Button: {
              //   colorPrimary: '#2E2466',
              // },
              // Input: {
              //   controlItemBgActiveHover: '#2E2466',
              //   hoverBorderColor: '#2E2466',
              //   colorPrimary: '#2E2466',
              //   colorInfoHover: '#2E2466',
              //   colorIconHover: '#2E2466',
              //   colorInfoTextHover: '#2E2466',
              //   colorInfoBorderHover: '#2E2466',
              //   colorPrimaryBorderHover: '#2E2466',
              // },
            },
          }}
        >
          <Component {...pageProps} />
        </ConfigProvider>
      </QueryClientProvider>
    </AntdRegistry>
  );
}

export default MyApp;
