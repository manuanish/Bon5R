import Image from "next/image";
import Link from "next/link";

export default function Contributors(props){
  return (
    <div className="flex gap-1">
    <span className="text-slate-500 text-lg">Written by&nbsp;</span>
      {props.contributors.map((userName) => (
        userName == "manuanish" ?
          <div className="cursor-pointer rounded-full border-2 w-[30px] h-[30px] border-orange-500 hover:border-orange-400">
            <Link href={`https://github.com/${userName}`} passHref>
                <Image
                  alt={userName}
                  width="30"
                  height="30"
                  className="rounded-full"
                  src={`https://github.com/${userName}.png`}
                />
            </Link>
          </div>
        :
          <div className="cursor-pointer rounded-full border-2 w-[30px] h-[30px] border-slate-500 hover:border-slate-400">
            <Link href={`https://github.com/${userName}`} passHref>
                <Image
                  alt={userName}
                  width="30"
                  height="30"
                  className="rounded-full"
                  src={`https://github.com/${userName}.png`}
                />
            </Link>
          </div>
      ))}
      &nbsp;<span className="text-slate-700 text-lg">&#8212;&nbsp; {props.readTime} min read</span>
    </div>
  );
}
