import Twemoji from "@components/Twemoji";

export default function RenderedOutput() {
  return (
    <div className="p-4 m-4 border border-slate-600 rounded-xl bg-slate-900 basis-1/2 shadow-2xl shadow-slate-900 lg:max-w-[700px]">
      <div className="text-slate-500 pb-2">http://localhost:3000</div>
      <div className="bg-slate-800 rounded-lg">
        <div
          className="flex flex-row p-4 border-slate-600 bg-slate-700"
          style={{ borderRadius: "8px 8px 0px 0px" }}
        >
          <div className="font-bold flex-grow-1">
            <span>
              <Twemoji emoji="📖" />
              &nbsp;&nbsp;My Blog Title
            </span>
          </div>
        </div>
        <div className="p-10">
          <div className="text-2xl font-bold pb-1">
            Hello World! <Twemoji emoji="👋" />
          </div>
          This is my first post! In this page, we will prove the{" "}
          <a
            className="text-orange-400 hover:underline"
            href="https://en.wikipedia.org/wiki/Riemann_zeta_function"
          >
            Riemann Hypothesis
          </a>
          . <br />
          <br />
          Begin by noting that the Riemann zeta function is defined as the
          following:
        </div>
        <div className="math math-display">
          <span className="katex-display">
            <span className="katex">
              <span className="katex-mathml">
                <math
                  xmlns="http://www.w3.org/1998/Math/MathML"
                  display="block"
                >
                  <semantics>
                    <mrow>
                      <mi>ζ</mi>
                      <mo stretchy="false">(</mo>
                      <mi>s</mi>
                      <mo stretchy="false">)</mo>
                      <mo>=</mo>
                      <munderover>
                        <mo>∑</mo>
                        <mrow>
                          <mi>n</mi>
                          <mo>=</mo>
                          <mn>1</mn>
                        </mrow>
                        <mi mathvariant="normal">∞</mi>
                      </munderover>
                      <mfrac>
                        <mn>1</mn>
                        <msup>
                          <mi>n</mi>
                          <mi>s</mi>
                        </msup>
                      </mfrac>
                    </mrow>
                    <annotation encoding="application/x-tex">
                      {"zeta(s) = sum_{n=1}^{infty} \frac{1}{n^s}"}
                    </annotation>
                  </semantics>
                </math>
              </span>
              <span className="katex-html" aria-hidden="true">
                <span className="base">
                  <span
                    className="strut"
                    style={{ height: 1 + "em", verticalAlign: 0.25 + "em" }}
                  ></span>
                  <span
                    className="mord mathnormal"
                    style={{ marginRight: 0.07378 + "em" }}
                  >
                    ζ
                  </span>
                  <span className="mopen">(</span>
                  <span className="mord mathnormal">s</span>
                  <span className="mclose">)</span>
                  <span
                    className="mspace"
                    style={{ marginRight: 0.2778 + "em" }}
                  ></span>
                  <span className="mrel">=</span>
                  <span
                    className="mspace"
                    style={{ marginRight: 0.2778 + "em" }}
                  ></span>
                </span>
                <span className="base">
                  <span
                    className="strut"
                    style={{
                      height: 2.9185 + "em",
                      verticalAlign: -1.2671 + "em",
                    }}
                  ></span>
                  <span className="mop op-limits">
                    <span className="vlist-t vlist-t2">
                      <span className="vlist-r">
                        <span
                          className="vlist"
                          style={{ height: 1.6514 + "em" }}
                        >
                          <span
                            style={{
                              top: -1.8829 + "em",
                              marginLeft: 0 + "em",
                            }}
                          >
                            <span
                              className="pstrut"
                              style={{ height: 3.05 + "em" }}
                            ></span>
                            <span className="sizing reset-size6 size3 mtight">
                              <span className="mord mtight">
                                <span className="mord mathnormal mtight">
                                  n
                                </span>
                                <span className="mrel mtight">=</span>
                                <span className="mord mtight">1</span>
                              </span>
                            </span>
                          </span>
                          <span style={{ top: -3.05 + "em" }}>
                            <span
                              className="pstrut"
                              style={{ height: 3.05 + "em" }}
                            ></span>
                            <span>
                              <span className="mop op-symbol large-op">∑</span>
                            </span>
                          </span>
                          <span
                            style={{ top: -4.3 + "em", marginLeft: 0 + "em" }}
                          >
                            <span
                              className="pstrut"
                              style={{ height: 3.05 + "em" }}
                            ></span>
                            <span className="sizing reset-size6 size3 mtight">
                              <span className="mord mtight">
                                <span className="mord mtight">∞</span>
                              </span>
                            </span>
                          </span>
                        </span>
                        <span className="vlist-s">​</span>
                      </span>
                      <span className="vlist-r">
                        <span
                          className="vlist"
                          style={{ height: 1.2671 + "em" }}
                        >
                          <span></span>
                        </span>
                      </span>
                    </span>
                  </span>
                  <span
                    className="mspace"
                    style={{ marginRight: 0.1667 + "em" }}
                  ></span>
                  <span className="mord">
                    <span className="mopen nulldelimiter"></span>
                    <span className="mfrac">
                      <span className="vlist-t vlist-t2">
                        <span className="vlist-r">
                          <span
                            className="vlist"
                            style={{ height: 1.3214 + "em" }}
                          >
                            <span style={{ top: -2.314 + "em" }}>
                              <span
                                className="pstrut"
                                style={{ height: 3 + "em" }}
                              ></span>
                              <span className="mord">
                                <span className="mord">
                                  <span className="mord mathnormal">n</span>
                                  <span className="msupsub">
                                    <span className="vlist-t">
                                      <span className="vlist-r">
                                        <span
                                          className="vlist"
                                          style={{ height: 0.5904 + "em" }}
                                        >
                                          <span
                                            style={{
                                              top: -2.989 + "em",
                                              marginRight: 0.05 + "em",
                                            }}
                                          >
                                            <span
                                              className="pstrut"
                                              style={{ height: 2.7 + "em" }}
                                            ></span>
                                            <span className="sizing reset-size6 size3 mtight">
                                              <span className="mord mathnormal mtight">
                                                s
                                              </span>
                                            </span>
                                          </span>
                                        </span>
                                      </span>
                                    </span>
                                  </span>
                                </span>
                              </span>
                            </span>
                            <span style={{ top: -3.23 + "em" }}>
                              <span
                                className="pstrut"
                                style={{ height: 3 + "em" }}
                              ></span>
                              <span
                                className="frac-line"
                                style={{ borderBottomWidth: 0.04 + "em" }}
                              ></span>
                            </span>
                            <span style={{ top: -3.677 + "em" }}>
                              <span
                                className="pstrut"
                                style={{ height: 3 + "em" }}
                              ></span>
                              <span className="mord">
                                <span className="mord">1</span>
                              </span>
                            </span>
                          </span>
                          <span className="vlist-s">​</span>
                        </span>
                        <span className="vlist-r">
                          <span
                            className="vlist"
                            style={{ height: 0.686 + "em" }}
                          >
                            <span></span>
                          </span>
                        </span>
                      </span>
                    </span>
                    <span className="mclose nulldelimiter"></span>
                  </span>
                </span>
              </span>
            </span>
          </span>
        </div>
        <div className="bottom-0 mt-20 text-center pb-5 text-slate-500 text-xs">
          Code with <Twemoji emoji="❤️" /> by @manuanish
        </div>
      </div>
    </div>
  );
}
