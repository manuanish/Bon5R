import { TypographyIcon } from "@primer/octicons-react";

export default function ResponsiveDesign() {
  return (
    <div className="z-50">
      <div className="p-20 bg-transparent bg-gradient-to-t from-slate-900 via-slate-900 to-transparent w-full shadow-2xl">
        <div className="p-8 rounded-full mt-20 text-pink-700 bg-pink-400 w-fit mb-10 border-4 border-pink-600">
          <TypographyIcon size={30} />
        </div>
        <h2 className="font-semibold text-pink-400 text-left max-w-[510px]">
          &nbsp;Mobile-first
        </h2>
        <p className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-50 text-left max-w-[510px] z-50">
          Responsive Design
        </p>
        <p className="mt-4 space-y-6 text-slate-500 text-left max-w-[510px] z-50">
          Get your personal website up and running without learning any new
          code.
        </p>
        <a
          className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-700 text-slate-100 hover:bg-slate-600 hover:text-white focus:ring-slate-500 mt-8"
          href="/docs/getting-started/installation"
        >
          Learn more<span className="sr-only"></span>
          <svg
            className="overflow-visible ml-3 text-slate-500 group-hover:text-slate-400"
            width="3"
            height="6"
            viewBox="0 0 3 6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M0 0L3 3L0 6"></path>
          </svg>
        </a>
        <div className="md:p-20 pt-10 md:flex md:justify-evenly w-full mt-10 overflow-x-hidden">
        </div>
      </div>
      <div className="border-b border-slate-700 opacity-50"></div>
    </div>
  );
}
