import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        {/* NOTE: refs. https://bugs.chromium.org/p/chromium/issues/detail?id=1161137 */}
        <body style={{ minWidth: '800px', minHeight: '601px' }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
