// pages/_document.js

// eslint-disable-next-line @next/next/no-document-import-in-page
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

class Document extends NextDocument {
  static async getInitialProps(ctx) {
    return await NextDocument.getInitialProps(ctx);
  }

  render() {
    const { locale } = this.props.__NEXT_DATA__;
    // const dir = locale === "ar" ? "rtl" : "ltr"
    const dir = 'rtl';
    return (
      <Html dir={dir} lang={'ar'}>
        <Head>
          <meta name="robots" content="index, follow" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="language" content="Arabic"></meta>
          <meta
            name="description"
            content="نظرا للاحتيالات التجارية التي تحدث عبر مواقع الشبكة العنكبوتية بشكل متكرر وكبير وللقظاء عليها والحد منها قمنا بانشاء موقع اظمنلي الذي يظمن حدوث المبادلات التجارية دون الوقوع في فخ الاحتيال الالكتروني الذي يقوم به اشخاص بحسابات مزيفة"
          />
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/icon.png"></link>
          <meta name="theme-color" content="#fff" />
          <link rel="canonical" href="https://www.odmenli.com" />
          <meta property="og:url" content="https://www.odmenli.com" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="أضمنلي" />
          <meta
            property="og:description"
            content="نظرا للاحتيالات التجارية التي تحدث عبر مواقع الشبكة العنكبوتية بشكل متكرر وكبير وللقظاء عليها والحد منها قمنا بانشاء موقع اظمنلي الذي يظمن حدوث المبادلات التجارية دون الوقوع في فخ الاحتيال الالكتروني الذي يقوم به اشخاص بحسابات مزيفة"
          />
          <meta property="og:image" content="https://www.odmenli.com/main.png" />
          <meta property="fb:app_id" content="428029188262416" />

          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
