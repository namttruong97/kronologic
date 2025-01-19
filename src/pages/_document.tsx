import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playwrite+IN:wght@100..400&family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
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
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
