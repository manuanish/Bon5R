import Link from "next/link";
import { XIcon } from "@primer/octicons-react";
import * as React from "react";

export default function HomeAd() {
  return (
    <div
      className={`relative bg-slate-800 p-4 justify-center flex duration-200 text-white flex-col lg:flex-row md:flex-row`}
    >
      <div className="text-center lg:text-left md:text-left">
        Try Bon5R in your browser! &nbsp;
      </div>
      <div className="text-center lg:text-left md:text-left">
        <Link href="/playground">{"Visit the playground ->"}</Link>
      </div>
    </div>
  );
}
