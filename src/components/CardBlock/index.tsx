import scenario1Image from 'assets/scenario1.png';
import scenario2Image from 'assets/scenario2.png';
import scenario3Image from 'assets/scenario3.png';

import React from 'react';

import { Card } from 'antd';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/router';

const { Meta } = Card;
interface CardBlockProp {
  delay: number;
  index: 1 | 2 | 3;
}
const mappedImage = {
  1: scenario1Image,
  2: scenario2Image,
  3: scenario3Image,
};
const CardBlock: React.FC<CardBlockProp> = ({ delay, index }) => {
  const router = useRouter();
  return (
    <motion.div
      initial={{ y: 25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.75,
        delay: delay,
      }}
      className="card-block"
    >
      <Card
        hoverable
        onClick={() => router.push(`/scenario/${index}`)}
        cover={
          <Image
            className="w-[120px] h-[200px]"
            objectFit="cover"
            src={mappedImage[index]}
            alt="scenario1Image image"
          />
        }
      >
        <Meta title={`Scenario ${index}`} />
      </Card>
    </motion.div>
  );
};
export async function getStaticPaths() {
  // When this is true (in preview environments) don't
  // prerender any static pages
  // (faster builds, but slower initial page load)
  if (process.env.SKIP_BUILD_STATIC_GENERATION) {
    return {
      paths: [],
      fallback: 'blocking',
    };
  }

  // Call an external API endpoint to get posts

  // Get the paths we want to prerender based on posts
  // In production environments, prerender all pages
  // (slower builds, but faster initial page load)

  // { fallback: false } means other routes should 404
  return { fallback: false };
}

export default CardBlock;
