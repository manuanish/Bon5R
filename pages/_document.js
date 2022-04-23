import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
      <Html className="bg-slate-900">
        <Head>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/5.1.0/github-markdown-light.css"/>
          <link rel="stylesheet" href="https://gitcdn.link/cdn/PrismJS/prism-themes/master/themes/prism-one-dark.css"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
