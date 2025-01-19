import { FC, HTMLAttributes, useEffect, useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import { Metadata } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { classMapping } from 'utils/helper';

import { BlockLoading } from 'components/BlockLoading';
import Header from 'components/Header/Header';

export type ILayoutProps = HTMLAttributes<HTMLDivElement>;

export const metadata: Metadata = {
  title: 'Kronologic Paris 1920',
  description: 'The app support checking result for Kronologic Paris 1920.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export const Layout: FC<ILayoutProps> = ({ children, className, title }) => {
  const [isLoading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  }, [isLoading]);

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <AnimatePresence>
        <motion.div
          className="h-[100vh] sm:px-[30vw] 2xl:px-[35vw] m-auto overflow-hidden"
          key={router.route}
          initial="initialState"
          animate="animateState"
          exit="exitState"
          transition={{
            duration: 0.75,
          }}
          variants={{
            initialState: {
              opacity: 0,
              clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
            },
            animateState: {
              opacity: 1,
              clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
            },
            exitState: {
              clipPath: 'polygon(50% 0, 50% 0, 50% 100%, 50% 100%)',
            },
          }}
        >
          <Header />
          <div
            className={classMapping(
              'flex flex-col px-4 h-full w-full relative overflow-hidden border',
              className
            )}
          >
            <div className="my-5">{children}</div>
            <BlockLoading isOpen={isLoading} />
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};
