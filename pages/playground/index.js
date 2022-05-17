import Head from "next/head";
import Twemoji from "@components/Twemoji";
import * as React from "react";
import HeaderPlayground from "@components/home/HeaderPlayground";

export default function Home() {
  return (
    <div className="bg-slate-900 text-white">
      <Head>
        <title>Bon5R - Playground</title>
      </Head>
      <div
        className="bg-transparent bg-gradient-to-b from-slate-900 via-[rgba(15,23,42,0.75)] to-transparent"
        style={{ overflow: "scroll" }}
      >
        <HeaderPlayground />
      </div>
      <div className="flex justify-center h-[600px] mt-8">
        <iframe
          src="https://codesandbox.io/embed/angry-cdn-2bp3w6?fontsize=14&hidenavigation=1?codemirror=1&theme=dark"
          style={{
            width: "100%",
            height: "calc(100vh - 92px)",
            border: 0,
            overflow: "hidden",
            outline: "none",
          }}
          title="bon5r-playground"
          allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
          sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        ></iframe>
      </div>
    </div>
  );
}
