import Link from "next/link";
import CopyCode from "@components/home/CopyCode";
import styles from "@styles/mainTitle.module.css";

export default function MainTitle() {
  return (
    <div className="relative max-w-5xl mx-auto pt-20 sm:pt-24 lg:pt-32 bg-transparent pb-20">
      <h1
        className="font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 to-orange-500 pb-5 pl-2 pr-2"
        style={{ textShadow: "rgba(249, 115, 22, 0.25) 0px 0px 100px" }}
      >
        Create static, blog-aware websites with pure MDX.
      </h1>
      <p
        className="mt-6 font-light text-lg text-slate-400 text-center max-w-3xl mx-auto pl-2 pr-2"
        style={{ textShadow: "#64748B 0px 0px 100px" }}
      >
        A scalable framework allowing you to create beautiful, responsive
        websites without ever touching{" "}
        <code className="font-mono font-medium text-orange-500 ">HTML</code>,{" "}
        <code className="font-mono font-medium text-orange-500 ">CSS</code> or{" "}
        <code className="font-mono font-medium text-orange-500 ">JS</code>.
      </p>
      <div
        className={`${styles.buttonHolder} mt-6 sm:mt-10 text-sm p-5 gap-5 flex justify-center`}
      >
        <Link href="/docs/getting-started/installation" passHref>
          <button className="bg-slate-900 hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto   bg-orange-500  highlight-white/20">
            Get Started
          </button>
        </Link>
        <div>
          <CopyCode />
        </div>
      </div>
    </div>
  );
}
