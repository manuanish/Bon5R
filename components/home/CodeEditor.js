import Twemoji from "@components/Twemoji";

export default function CodeEditor() {
  return (
    <div className="p-4 sm:m-4 m-0 border border-slate-600 rounded-xl bg-slate-900 basis-1/2 shadow-2xl shadow-slate-900 lg:max-w-[700px] sm:overflow-hidden overflow-y-auto overflow-x-hidden lg:max-w-[700px] max-h-[300px] sm:max-h-full">
      <div className="text-slate-500">pages/index.mdx</div>
      <pre
        className="pt-4 language-js bottom-0"
        style={{ height: "calc(100% - 32px)", overflowX: "scroll" }}
      >
        <code className="language-js">
          <span className="token keyword">import</span>{" "}
          <span className="token tag">Header</span>{" "}
          <span className="token keyword">from</span>{" "}
          <span className="token string">&quot;@/components/Header&quot;</span>
          ;
          <br />
          <span className="token keyword">import</span>{" "}
          <span className="token tag">BlogTitle</span>{" "}
          <span className="token keyword">from</span>{" "}
          <span className="token string">
            &quot;@/components/BlogTitle&quot;
          </span>
          ;
          <br />
          <span className="token keyword">import</span>{" "}
          <span className="token tag">Footer</span>{" "}
          <span className="token keyword">from</span>{" "}
          <span className="token string">&quot;@/components/Footer&quot;</span>
          ;
          <br />
          <br />
          <span className="token keyword">{"<"}</span>
          <span className="token tag">{"Header"}</span>
          <span className="token class-name">{" title"}</span>
          <span className="token keyword">{"="}</span>
          <span className="token string">
            &quot;
            <Twemoji emoji="📖" /> My Blog Title&quot;
          </span>
          <span className="token keyword">{" />"}</span>
          <br />
          <br />
          <span className="token tag">
            {"## Hello World!"} <Twemoji emoji="👋" />
          </span>
          <br />
          This is my first post! In this page, we will prove the
          <br />
          [Riemann Hypothesis](
          <a
            className="token function hover:underline"
            href="https://en.wikipedia.org/wiki/Riemann_hypothesis"
          >
            Riemann Hypothesis
          </a>
          ).
          <br />
          Begin by noting that the Riemann zeta function
          <br />
          is defined as the following:
          <br />
          <br />
          $$
          <br />
          \zeta(s) = \sum_&#123;n=1&#125;^\infty =
          \frac&#123;1&#125;&#123;n^s&#125;
          <br />
          $$
          <br />
          <br />
          <span className="token keyword">{"<"}</span>
          <span className="token tag">{"Footer"}</span>
          <span className="token class-name">{" content"}</span>
          <span className="token keyword">{"="}</span>
          <span className="token string">
            &quot;Code with <Twemoji emoji="❤️" /> by @manuanish&quot;
          </span>
          <span className="token keyword">{" />"}</span>
        </code>
      </pre>
    </div>
  );
}
