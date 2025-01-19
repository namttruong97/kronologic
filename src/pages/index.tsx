import { Metadata } from 'next';

import CardGroup from 'components/CardGroup';
import { Layout } from 'components/Layout';

export const metadata: Metadata = {
  title: 'Kronologic Paris 1920',
  description: 'The app support checking result for Kronologic Paris 1920.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function Homepage() {
  return (
    <Layout title="Kronologic Paris 1920">
      <CardGroup />
    </Layout>
  );
}
