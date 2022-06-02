import Link from "next/link";
import { useRouter } from "next/router";

export default function NextPage(props) {
  const router = useRouter();

  const onButtonClickNext = async () => {
    localStorage.setItem(
      "scrollPosition",
      document.getElementById("documentationSidebar").scrollTop
    );
    router.push(props.nextHref);
  };

  const onButtonClickPrev = async () => {
    localStorage.setItem(
      "scrollPosition",
      document.getElementById("documentationSidebar").scrollTop
    );
    router.push(props.prevHref);
  };

  return (
    <div className="flex flex-row p-4 justify-evenly gap-4 mt-5 w-full">
      <button className="justify-self-start" onClick={onButtonClickPrev}>
        <div className="font-normal text-slate-500 hover:text-orange-400">
          {" "}
          {"<-"} {props.previousPage}
        </div>
      </button>
      <button className="justify-self-end" onClick={onButtonClickNext}>
        <div className="font-normal text-slate-500 hover:text-orange-400">
          {props.nextPage} {"->"}
        </div>
      </button>
    </div>
  );
}
