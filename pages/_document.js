import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
      <Html className="bg-slate-900">
        <Head>
          <link rel="stylesheet" href="https://gitcdn.link/cdn/PrismJS/prism-themes/master/themes/prism-one-dark.css"/>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/katex.min.css"/>
        </Head>
        <body>
          <div>
            <Main />
            <NextScript />
          </div>
        </body>
      </Html>
  )
}
