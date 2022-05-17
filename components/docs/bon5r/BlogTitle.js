import * as React from "react";

function BlogTitle(props) {
  return (
    <div>
      <div className="text-center pt-20">
        <div className="font-bold lg:text-5xl sm:text-4xl text-4xl">
          {props.title}
        </div>
        <div className="text-grey text-lg mt-5">{props.subTitle}</div>
      </div>
      <h1></h1>
      <br />
    </div>
  );
}

export default BlogTitle;
