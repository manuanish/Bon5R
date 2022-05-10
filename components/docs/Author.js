import * as React from "react";
import Image from "next/image";

function Author(props) {
  return (
    <div>
      <div className="flex z-0 text-slate-600">
        <div className="mt-[5px] mb-0">
          <Image
            alt="avatar"
            width="20"
            height="20"
            className="rounded-lg"
            src={"https://github.com/" + props.displayName + ".png"}
          />
        </div>
        &#8198;&#8198;&#8198; Written By:&#8198;&#8198;
        <a
          href={"https://github.com/" + props.displayName}
          target="_blank"
          rel="noreferrer"
        >
          {props.author}
        </a>
        &#8198;&#8198;—&#8198;&#8198;<span>{props.date}</span>
      </div>
    </div>
  );
}

export default Author;
