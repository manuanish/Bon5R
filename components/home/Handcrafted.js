import { PackageIcon, RocketIcon } from "@primer/octicons-react";
import Twemoji from "@components/Twemoji";

export default function Handcrafted() {
  const tempFunction = (event) => {
    console.log("ok");
  };
  return (
    <div className="z-50">
      <div className="flex flex-row sm:p-20 p-5 bg-transparent bg-gradient-to-t from-slate-900 via-slate-900 to-transparent w-full shadow-2xl">
        <div className="grow mt-[100px] overflow-auto invisible md:visible w-[0px] md:w-full lg:w-fit z-50">
          <div className="flex gap-5">
            <div className="group hover:bg-white duration-150 p-4 min-w-[350px] w-[350px] min-h-[340px] bg-slate-800 rounded-lg markdown-body text-slate-500 shadow-2xl z-50">
              <p className="group-hover:text-black duration-150 font-bold text-2xl">
                My post title
              </p>
              <p className="text-slate-700 group-hover:text-gray-300 duration-150">
                Posted at 3/14/15
              </p>
              <p className="text-slate-600 group-hover:text-gray-500 duration-150">
                This is a short description of what my post is about. Ideally,
                it should be concisely written to convey the main idea in a few
                bite-size sentences.
              </p>
              <br />
              <button className="float-right duration-150 group-hover:bg-orange-400 group-hover:text-white p-4 bg-slate-700 rounded-md hover:bg-slate-600 text-slate-500">
                {" "}
                Read More!{" "}
              </button>
            </div>
            <div className="flex flex-col gap-5">
              <div className="group hover:bg-white duration-150 p-4 w-[310px] h-fit bg-slate-800 rounded-lg text-slate-500 shadow-2xl">
                <h3 className="font-extrabold text-xl duration-150 group-hover:text-black">
                  <span className="grayscale group-hover:grayscale-0 duration-150">
                    <span className="text-slate-600 duration-15 ">🔥</span>
                  </span>{" "}
                  &nbsp;Page Header
                </h3>
              </div>
              <div className="shadow-2xl group">
                <div className="p-4 w-[310px] h-[100px] bg-slate-800 duration-150 rounded-lg text-slate-500 hover:bg-[#282C34]">
                  <pre style={{ overflow: "hidden" }}>
                    <code className="text-slate-600 group-hover:text-[#C678DD] duration-150">
                      function
                    </code>
                    <code className="text-slate-500 group-hover:text-[#61AFEF] duration-150">
                      &nbsp;syntaxHighlight
                    </code>
                    <code className="text-slate-600 group-hover:text-[#ABB2BF] duration-150">
                      &#40;&#41;
                    </code>
                    <code className="text-slate-600 group-hover:text-[#ABB2BF] duration-150">
                      &nbsp;&#123;
                    </code>
                    <br />
                    <code className="text-slate-600 group-hover:text-[#E06C75] duration-150">
                      &nbsp;&nbsp;&nbsp;console
                    </code>
                    <code className="text-slate-600 group-hover:text-[#ABB2BF] duration-150">
                      .
                    </code>
                    <code className="text-slate-500 group-hover:text-[#61AFEF] duration-150">
                      log
                    </code>
                    <code className="text-slate-500 group-hover:text-[#ABB2BF] duration-150">
                      &#40;
                    </code>
                    <code className="text-slate-600 group-hover:text-[#98C379] duration-150">
                      &#34;Hello!&#34;
                    </code>
                    <code className="text-slate-500 group-hover:text-[#ABB2BF] duration-150">
                      &#41;&#59;
                    </code>
                    <br />
                    <code className="text-slate-600 group-hover:text-[#ABB2BF] duration-150">
                      &#125;
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center text-slate-700 mt-20">
            Hover/Click to preview
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
              Don&apos;t waste your time re-creating the same components. Bon5R
              comes with handcrafted components so you can focus on what matters
              most.
            </div>
          </div>
          <a
            className="float-right group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-700 text-slate-100 hover:bg-slate-600 hover:text-white focus:ring-slate-500 mt-8"
            href="/docs/component-docs"
          >
            Learn more<span className="sr-only"></span>
            <svg
              className="overflow-auto ml-3 text-slate-500 group-hover:text-slate-400"
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
          <div className="md:p-20 pt-10 md:flex md:justify-evenly w-full mt-10 overflow-auto"></div>
        </div>
      </div>
      <div className="border-b border-slate-700 opacity-50"></div>
    </div>
  );
}
