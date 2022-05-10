import Link from "next/link";

export default function NextPage(props) {
  return (
    <div className="flex flex-row p-4 justify-evenly gap-4 mt-5 w-full">
      <Link
        className="justify-self-start"
        href={props.prevHref}
        passHref={true}
      >
        <div className="font-normal text-slate-500 hover:text-orange-400">
          {" "}
          {"<-"} {props.previousPage}
        </div>
      </Link>
      <Link className="justify-self-end" href={props.nextHref} passHref={true}>
        <div className="font-normal text-slate-500 hover:text-orange-400">
          {props.nextPage} {"->"}
        </div>
      </Link>
    </div>
  );
}
