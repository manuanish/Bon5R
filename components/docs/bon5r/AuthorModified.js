import Image from "next/image";
import Link from "next/link";

export default function AuthorModified(props){
  return (
    <div className="flex gap-1">
    <span className="text-slate-700 text-lg">Written by&nbsp;</span>
      {props.contributors.map((userName) => (
        <div className="cursor-pointer rounded-full border-2 w-[30px] h-[30px] border-slate-500 hover:border-slate-400" key={userName}>
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
      &nbsp;<span className="text-slate-400 text-lg">&#8212;&nbsp; {props.readTime} min read</span>
    </div>
  );
}
