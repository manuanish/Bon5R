import { PlugIcon } from "@primer/octicons-react";

export default function Frameworks() {
  return (
    <div>
      <div className="p-20 bg-transparent bg-gradient-to-t from-slate-900 via-slate-900 to-transparent w-full shadow-2xl">
        <div className="p-8 rounded-full mt-20 text-green-700 bg-green-400 w-fit mb-10 border-4 border-green-600">
          <PlugIcon size={30} />
        </div>
        <h2 className="font-semibold text-green-400 text-left max-w-[510px]">
          &nbsp;Compatible
        </h2>
        <p className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-50 text-left max-w-[510px]">
          Built with frameworks you know & love.
        </p>
        <p className="mt-4 space-y-6 text-slate-500 text-left max-w-[510px]">
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
          <div className="flex justify-center mb-12">
            <svg
              stroke="text-slate-500"
              width="207px"
              height="124px"
              viewBox="0 0 207 124"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                id="Page-1"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
              >
                <g
                  id="Black-Next.js"
                  transform="translate(-247.000000, -138.000000)"
                  fill="#334155"
                  fillRule="nonzero"
                >
                  <g
                    id="next-black"
                    transform="translate(247.000000, 138.000000)"
                  >
                    <g id="EXT-+-Type-something">
                      <path
                        d="M48.9421964,32.6320058 L87.9011585,32.6320058 L87.9011585,35.7136421 L52.5134345,35.7136421 L52.5134345,58.9070103 L85.7908813,58.9070103 L85.7908813,61.9886466 L52.5134345,61.9886466 L52.5134345,87.4526941 L88.306981,87.4526941 L88.306981,90.5343303 L48.9421964,90.5343303 L48.9421964,32.6320058 Z M91.3912326,32.6320058 L95.5306221,32.6320058 L113.8738,58.0960534 L132.622801,32.6320058 L158.124498,0.286809811 L116.22757,60.7722112 L137.817329,90.5343303 L133.51561,90.5343303 L113.8738,63.4483691 L94.1508254,90.5343303 L89.9302715,90.5343303 L111.682358,60.7722112 L91.3912326,32.6320058 Z M139.359455,35.713642 L139.359455,32.6320058 L183.756439,32.6320058 L183.756439,35.7136421 L163.302983,35.7136421 L163.302983,90.5343303 L159.731745,90.5343303 L159.731745,35.7136421 L139.359455,35.713642 Z"
                        id="EXT"
                      />
                      <polygon
                        id="Type-something"
                        points="0.202923647 32.6320058 4.66697141 32.6320058 66.2235778 124.303087 40.785176 90.5343303 3.93649086 37.0111732 3.77416185 90.5343303 0.202923647 90.5343303"
                      />
                    </g>
                    <path
                      d="M183.396622,86.5227221 C184.134938,86.5227221 184.673474,85.9601075 184.673474,85.233037 C184.673474,84.5059658 184.134938,83.9433513 183.396622,83.9433513 C182.666993,83.9433513 182.11977,84.5059658 182.11977,85.233037 C182.11977,85.9601075 182.666993,86.5227221 183.396622,86.5227221 Z M186.905793,83.1297235 C186.905793,85.2763149 188.460599,86.678523 190.727662,86.678523 C193.142388,86.678523 194.601647,85.233037 194.601647,82.7229099 L194.601647,73.8855335 L192.655968,73.8855335 L192.655968,82.7142542 C192.655968,84.1078073 191.952397,84.8521899 190.710289,84.8521899 C189.598473,84.8521899 188.842785,84.1597409 188.816727,83.1297235 L186.905793,83.1297235 Z M197.146664,83.0172011 C197.285642,85.2503478 199.153145,86.678523 201.932686,86.678523 C204.903321,86.678523 206.762139,85.1811034 206.762139,82.792155 C206.762139,80.9138876 205.702439,79.8752151 203.131364,79.2779777 L201.750279,78.9404092 C200.117298,78.5595622 199.457158,78.0488813 199.457158,77.1573541 C199.457158,76.0321243 200.482113,75.296398 202.019547,75.296398 C203.478806,75.296398 204.48639,76.0148135 204.668797,77.1660091 L206.562359,77.1660091 C206.44944,75.0626962 204.590622,73.5825873 202.045605,73.5825873 C199.309495,73.5825873 197.48542,75.0626962 197.48542,77.2871878 C197.48542,79.1221767 198.519063,80.2127835 200.786126,80.7407758 L202.401734,81.1302779 C204.060773,81.5197807 204.790402,82.091051 204.790402,83.0431676 C204.790402,84.1510859 203.643842,84.9560573 202.08035,84.9560573 C200.403939,84.9560573 199.240006,84.2030196 199.074971,83.0172011 L197.146664,83.0172011 Z"
                      id=".JS"
                    />
                  </g>
                </g>
              </g>
            </svg>
          </div>
          <div className="flex justify-center">
            <svg
              width="200"
              height="auto"
              viewBox="0 150 1000 1000"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M489.5 226.499C328 231.632 280 346.999 269 409.499C283.333 386.332 328.5 335.5 395 335.5C472.5 335.5 531.5 422 567.5 449C611.237 481.803 699.123 525.115 814.5 490C906.5 462 949.167 364.332 958.5 317.999C914 378.499 846.5 414.838 763 371.999C705.5 342.499 662.5 221 489.5 226.499Z"
                fill="#334155"
              />
              <path
                d="M261 500.999C99.5 506.132 51.5 621.499 40.5 683.999C54.8333 660.832 100 610 166.5 610C244 610 303 696.5 339 723.5C382.737 756.303 470.623 799.615 586 764.5C678 736.5 720.667 638.832 730 592.499C685.5 652.999 618 689.338 534.5 646.499C477 616.999 434 495.5 261 500.999Z"
                fill="#334155"
              />
            </svg>
          </div>
          <div className="flex justify-center">
            <svg
              width="auto"
              height="200px"
              viewBox="0 -80 512 512"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid"
            >
              <g>
                <path
                  d="M19.4782609,2.7826087 L492.521739,2.7826087 C501.742493,2.7826087 509.217391,10.2575068 509.217391,19.4782609 L509.217391,192 C509.217391,201.220754 501.742493,208.695652 492.521739,208.695652 L19.4782609,208.695652 C10.2575068,208.695652 2.7826087,201.220754 2.7826087,192 L2.7826087,19.4782609 C2.7826087,10.2575068 10.2575068,2.7826087 19.4782609,2.7826087 Z"
                  fill="#334155"
                ></path>
                <path
                  d="M19.4782609,0 L492.521739,0 C503.279286,0 512,8.72071444 512,19.4782609 L512,192 C512,202.757546 503.279286,211.478261 492.521739,211.478261 L19.4782609,211.478261 C8.72071444,211.478261 0,202.757546 0,192 L0,19.4782609 C0,8.72071444 8.72071444,0 19.4782609,0 Z M19.4782609,5.56521739 C11.7942991,5.56521739 5.56521739,11.7942991 5.56521739,19.4782609 L5.56521739,192 C5.56521739,199.683962 11.7942991,205.913043 19.4782609,205.913043 L492.521739,205.913043 C500.205701,205.913043 506.434783,199.683962 506.434783,192 L506.434783,19.4782609 C506.434783,11.7942991 500.205701,5.56521739 492.521739,5.56521739 L19.4782609,5.56521739 Z"
                  fill="#334155"
                ></path>
                <polygon
                  fill="#0F172A"
                  points="272.695652 40.2031304 272.694464 125.098667 303.878525 93.920837 319.61875 109.662235 261.97675 167.299939 203.607855 108.931044 219.348667 93.1902318 250.433594 124.275014 250.434783 40.2031304"
                ></polygon>
                <polygon
                  fill="#0F172A"
                  points="72.1623188 162.979246 72.1623188 97.2318069 112.416825 137.489219 152.976696 96.9322596 152.976696 162.31513 175.237565 162.31513 175.237565 43.192494 112.417958 106.007592 49.9014493 43.4865699 49.9014493 162.979246"
                ></polygon>
                <polygon
                  fill="#0F172A"
                  points="447.84683 36.6511988 463.587373 52.3922795 416.437797 99.5394783 462.136706 145.239721 446.396163 160.980801 400.695652 115.281623 354.995141 160.980801 339.254598 145.239721 384.949797 99.5394783 337.803931 52.3922795 353.544474 36.6511988 400.695652 83.7973333"
                ></polygon>
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="border-b border-slate-700 opacity-50"></div>
    </div>
  );
}
