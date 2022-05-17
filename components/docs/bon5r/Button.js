import * as React from "react";
import Link from "next/link";

function Button(props) {
  return (
    <div>
      <Link href={props.href} passHref>
        <button className="bg-orange-50 p-4 rounded-lg hover:bg-orange-500 hover:text-white duration-75 mb-10 mt-10">
          {props.text}
        </button>
      </Link>
    </div>
  );
}

export default Button;
