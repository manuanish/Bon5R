import * as React from "react";
import Link from "next/link";
import Button from "@components/docs/bon5r/Button";

function Post(props) {
  return (
    <div className="p-10 border rounded-xl shadow-md pb-0">
      <div className="font-bold text-2xl">{props.title}</div>
      <div className="text-[gray]">Posted at: {props.date}</div>
      <br />
      <p>{props.description}</p>
      <Button href={props.href} text={"Read More!"} />
    </div>
  );
}

export default Post;
