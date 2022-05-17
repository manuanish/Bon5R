import * as React from "react";
import Head from "next/head";

function PageTitle(props) {
  return (
    <Head>
      <title>{props.title}</title>
    </Head>
  );
}

export default PageTitle;
