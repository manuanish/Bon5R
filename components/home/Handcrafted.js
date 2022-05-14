import { PackageIcon, RocketIcon } from "@primer/octicons-react";

export default function Handcrafted() {
  return (
    <div className="z-50">
      <div className="flex flex-row p-20 bg-transparent bg-gradient-to-t from-slate-900 via-slate-900 to-transparent w-full shadow-2xl">
        <div className="grow mt-[100px] overflow-scroll invisible md:visible w-[0px] md:w-full lg:w-fit z-50">
          <div className="flex gap-5">
            <div className="p-4  min-w-[350px] w-[350px] min-h-[340px]  bg-slate-800 rounded-lg markdown-body text-slate-500 shadow-2xl z-50">
              <h3>My post title</h3>
              <p className="text-slate-700">Posted at 3/14/15</p>
              <p className="text-slate-600">
                This is a short description of what my post is about. Ideally,
                it should be concisely written to convey the main idea in a few
                short sentences.
              </p>
              <br />
              <button className="float-right p-4 bg-slate-700 rounded-md hover:bg-slate-600 text-slate-500">
                {" "}
                Read More!{" "}
              </button>
            </div>
            <div className="flex flex-col gap-5">
              <div className="p-4 w-[310px] h-fit bg-slate-800 rounded-lg text-slate-500 shadow-2xl">
                <h3 className="font-bold text-xl">
                  <RocketIcon size={24} className="text-slate-600" /> &nbsp;Page
                  Header
                </h3>
              </div>
              <div className="shadow-2xl">
                <div className="p-4 w-[310px] h-[100px] bg-slate-800 rounded-lg text-slate-500">
                  <pre>
                    <code className="text-slate-600">function</code>
                    <code className="text-slate-500">
                      &nbsp;syntaxHighlight
                    </code>
                    <code className="text-slate-600">&#40;&#41;</code>
                    <code className="text-slate-600">&nbsp;&#123;</code>
                    <br />
                    <code className="text-slate-600">
                      &nbsp;&nbsp;&nbsp;console
                    </code>
                    <code className="text-slate-600">.</code>
                    <code className="text-slate-500">log</code>
                    <code className="text-slate-500">&#40;</code>
                    <code className="text-slate-600">&#34;Hello!&#34;</code>
                    <code className="text-slate-500">&#41;&#59;</code>
                    <br />
                    <code className="text-slate-600">&#125;</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:max-w-[510px] lg:max-w-[510px] w-full">
          <div className="relative mt-10"></div>
          <div className="flex justify-end">
            <div className="p-8 rounded-full mt-20 text-indigo-700 bg-indigo-400 w-fit mb-10 border-4 border-indigo-600">
              <PackageIcon size={30} />
            </div>
          </div>
          <h2 className="font-semibold text-indigo-400 text-right w-full">
            Built-in Components&nbsp;
          </h2>
          <div className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-50 flex justify-end text-right w-full">
            <div className="max-w-[510px]">Built-in handcrafted components</div>
          </div>
          <div className="mt-4 space-y-6 text-slate-500 text-right flex justify-end text-right w-full">
            <div className="max-w-[510px]">
              Don't waste your time re-creating the same components. Bon5R comes
              with handcrafted components so you can focus on what matters most.
            </div>
          </div>
          <a
            className="float-right group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-700 text-slate-100 hover:bg-slate-600 hover:text-white focus:ring-slate-500 mt-8"
            href="/docs/component-docs/author"
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
          <div className="md:p-20 pt-10 md:flex md:justify-evenly w-full mt-10 overflow-scroll"></div>
        </div>
      </div>
      <div className="border-b border-slate-700 opacity-50"></div>
    </div>
  );
}
