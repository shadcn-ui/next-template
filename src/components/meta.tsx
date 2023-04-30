import Head from "next/head"

const Meta = () => (
  <Head>
    <title>Project</title>
    <meta charSet="utf-8" />
    <meta name="mobile-web-app-capable" content="yes" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, user-scalable=no, shrink-to-fit=no"
    ></meta>
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="#fff" />
    <meta name="apple-mobile-web-app-title" content="Project" />
    <meta name="msapplication-starturl" content="/"></meta>
    <meta name="application-name" content="Project" />
    <meta name="description" content="" />
    <meta
      name="theme-color"
      content="#f4f4f5"
      media="(prefers-color-scheme: light)"
    />
    <meta
      name="theme-color"
      content="#18181b"
      media="(prefers-color-scheme: dark)"
    />
    {/* <meta
			name='viewport'
			content='width=device-width, initial-scale=1, user-scalable=0, viewport-fit=cover'
		/> */}
    <link rel="apple-touch-icon" href="/images/favIcon-apple180x180.webp" />
    <link rel="icon" type="image/png" href="/images/favicon-192x192.webp" />
  </Head>
)

export default Meta
