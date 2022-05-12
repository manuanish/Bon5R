export default function ResponsiveDesign() {
  return (
    <div className="p-20 bg-transparent bg-gradient-to-t from-slate-900 via-slate-900 to-transparent">
      <h2 className="mt-40 font-semibold text-indigo-400">Mobile-first</h2>
      <p className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-50 ">
        Responsive Design.
      </p>
      <p className="mt-4 max-w-3xl space-y-6 text-slate-500">
        Instead of implementing complex media queries, Bon5R provide you with
        inherent responsive design automatically making the webpages you design
        accessible on multiple screen sizes.
      </p>
      <a
        className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-700 text-slate-100 hover:bg-slate-600 hover:text-white focus:ring-slate-500 mt-8"
        href="/docs/utility-first"
      >
        Learn more<span className="sr-only">, utility-first fundamentals</span>
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
    </div>
  );
}
