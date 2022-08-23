import { Main, NextScript, Html, Head } from "next/document";

const MyDocument = () => {
    return (
        <Html lang="en">
            <Head></Head>
            <body className="bg-layer-0">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
};

export default MyDocument;
