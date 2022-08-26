import { Main, NextScript, Html, Head } from 'next/document';

const MyDocument = () => {
    return (
        <Html lang="en">
            <Head>
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon-16x16.png"
                />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#ffffff" />
                <link rel="manifest" href="/site.webmanifest" />
            </Head>
            <body className="bg-layer-0">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
};

export default MyDocument;
