import Twemoji from "@components/Twemoji";
import Link from "next/link";

export default function HeaderPlayground() {
  return (
    <div className="relative pt-6 lg:pt-8 flex items-center justify-between text-slate-700 font-semibold text-sm leading-6 text-slate-100">
      <div className="pl-8 font-bold text-lg whitespace-nowrap shadow-lg mr-10 relative">
        <span className="flex">
          <svg
            className="fill-orange-500"
            strokeWidth="0"
            viewBox="0 0 384 512"
            height="24px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M216 23.86c0-23.8-30.65-32.77-44.15-13.04C48 191.85 224 200 224 288c0 35.63-29.11 64.46-64.85 63.99-35.17-.45-63.15-29.77-63.15-64.94v-85.51c0-21.7-26.47-32.23-41.43-16.5C27.8 213.16 0 261.33 0 320c0 105.87 86.13 192 192 192s192-86.13 192-192c0-170.29-168-193-168-296.14z"></path>
          </svg>
          &nbsp;
          <span className="hover:text-slate-200 text-white">
            <Link href="/" passHref>
              Bon5R
            </Link>
          </span>
          &nbsp;<span className="text-orange-500 font-normal">Playground</span>
        </span>
      </div>
      <div
        className="flex items-center text-white"
        style={{ overflowX: "scroll" }}
      >
        <div className="flex items-center">
          <nav>
            <ul className="flex items-center space-x-8">
              <li className="hover:text-orange-400">
                <Link href="/docs/getting-started/" passHref={false}>
                  Docs
                </Link>
              </li>
              <li className="hover:text-orange-400">
                <Link href="#" passHref={false}>
                  Contact
                </Link>
              </li>
              <li className="pr-8 border-l border-slate-800">
                <div className="ml-8 block text-slate-400 hover:text-slate-300">
                  <Link
                    href="https://github.com/manuanish/bon5r"
                    className=""
                    passHref={true}
                  >
                    <div>
                      <span className="sr-only">Bon5R on GitHub</span>
                      <svg
                        viewBox="0 0 16 16"
                        className="w-5 h-5"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                      </svg>
                    </div>
                  </Link>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
