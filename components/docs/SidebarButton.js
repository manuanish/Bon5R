import { useRouter } from 'next/router';
import Link from 'next/link';
import * as React from "react";



export default function SidebarButton(props) {
  const router = useRouter();

  React.useEffect(() => {
    var hasRun = 0
    if (hasRun == 0){
      document.getElementById("documentationSidebar").scrollTo({top: localStorage.getItem("scrollPosition")});
      hasRun = 1;
    }
  });

  const onButtonClick = async () => {
    localStorage.setItem("scrollPosition", document.getElementById("documentationSidebar").scrollTop);
    router.push(props.href)
  }

  if (router.pathname == props.href) {
    return (
      <Link href={props.href} className="w-full p-4" passHref={true}>
        <button id={props.href} className="block border-l w-full pb-2 pt-2 pl-5 text-left -ml-px border-current font-semibold text-orange-400">
          {props.pageTitle}
        </button>
      </Link>
    )
  } else {
    return (
      <button id={props.href} onClick={onButtonClick} className="block border-l w-full pb-2 pt-2 pl-5 text-left -ml-px border-transparent border-slate-700 hover:border-slate-500 text-slate-400 hover:text-slate-300">
        {props.pageTitle}
      </button>
    )
  }
}
