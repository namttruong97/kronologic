import { FC, HTMLAttributes, useEffect, useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { classMapping } from 'utils/helper';

import { BlockLoading } from 'components/BlockLoading';
import Header from 'components/Header/Header';

export type ILayoutProps = HTMLAttributes<HTMLDivElement>;

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
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Head>

      <AnimatePresence>
        <motion.div
          className="h-[100vh]"
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
              'flex flex-col px-4 h-full w-full relative overflow-hidden ',
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
