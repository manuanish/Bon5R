import Link from "next/link";
import { XIcon } from "@primer/octicons-react";
import * as React from "react";

export default function DocsAd() {
  const [visibility, setVisibility] = React.useState("visible");
  const [opacity, setOpacity] = React.useState(1);
  const [margin, setMargin] = React.useState(100);

  const onButtonClick = (event) => {
    event.preventDefault();
    setOpacity(0);
    setMargin(0);
  };

  React.useEffect(() => {
    // Update the document title using the browser API
    if (window.screen.width < 500) {
      setOpacity(0);
      setMargin(0);
    }
  });

  return (
    <div
      className={`bg-slate-800 p-4 justify-center flex duration-200`}
      style={{
        marginLeft: -100,
        marginRight: 0,
        width: "calc(100% + 180px)",
        visibility: visibility,
        opacity: opacity,
        marginBottom: margin,
      }}
    >
      <div className="grow">
        <div className="text-center">
          Try Bon5R in your browser! &nbsp;
          <Link href="/playground">{"Visit the playground ->"}</Link>
        </div>
      </div>
      <div className="grow-0 text-slate-500 hover:text-slate-300">
        <button onClick={onButtonClick}>
          <XIcon size={20} />
        </button>
      </div>
    </div>
  );
}
