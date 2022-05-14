import { CopyIcon, CheckIcon } from "@primer/octicons-react";
import * as React from "react";

export default function CopyCode() {
  const [currentIcon, setCurrentIcon] = React.useState(<CopyIcon />);
  const [currentColor, setCurrentColor] = React.useState("bg-slate-700");
  const [currentHoverColor, setCurrentHoverColor] =
    React.useState("bg-slate-600");
  const handleButtonClick = async () => {
    setCurrentIcon(<CheckIcon />);
    setCurrentColor("bg-green-600");
    setCurrentHoverColor("bg-green-600");
    navigator.clipboard.writeText("yarn create bon5r-app my-app");
    setTimeout(function () {
      setCurrentIcon(<CopyIcon />);
      setCurrentColor("bg-slate-700");
      setCurrentHoverColor("bg-slate-600");
    }, 750);
  };

  return (
    <div className="realtive p-0 bg-slate-800 text-slate-300 rounded-md flex h-12 z-50">
      <pre
        className="m-4 mr-0 z-60 grow"
        style={{ marginTop: 14, overflowY: "hidden" }}
      >
        <code>yarn create bon5r-app my-app</code>
      </pre>
      <div>
        <button
          onClick={handleButtonClick}
          className={`${currentColor} ml-0 ml-1 m-2 w-8 h-8 rounded-md duration-75 text-white hover:${currentHoverColor}`}
        >
          {currentIcon}
        </button>
      </div>
    </div>
  );
}
