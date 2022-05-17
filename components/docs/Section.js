import { useRouter } from "next/router";
import Link from "next/link";
import * as React from "react";

export default function Section(props) {
  const router = useRouter();

  console.log(router.pathname)
  console.log(props.href)

  const onButtonClick = async () => {
    localStorage.setItem(
      "scrollPosition",
      document.getElementById("documentationSidebar").scrollTop
    );
    router.push(props.href);
  };

  if (router.pathname == props.href) {
    return (
      <div>
        <h5 className="mb-8 lg:mb-3 font-semibold text-orange-400 mt-10 ">
          <span style={{ verticalAlign: 2 }}>{props.icon}</span>&nbsp;&nbsp;
          {props.title}
        </h5>
      </div>
    );
  } else if (router.pathname.substring(0, router.pathname.lastIndexOf('/')) == props.href) {
    return (
      <button onClick={onButtonClick}>
        <h5 className="mb-8 lg:mb-3 font-semibold text-orange-400 hover:text-orange-500 mt-10 ">
          <span style={{ verticalAlign: 2 }}>{props.icon}</span>&nbsp;&nbsp;
          {props.title}
        </h5>
      </button>
    );
  } else {
    return (
      <button onClick={onButtonClick}>
        <h5 className="mb-8 lg:mb-3 font-semibold text-slate-200 mt-10 hover:text-orange-400 ">
          <span style={{ verticalAlign: 2 }}>{props.icon}</span>&nbsp;&nbsp;
          {props.title}
        </h5>
      </button>
    );
  }

}
