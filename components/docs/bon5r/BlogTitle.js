import * as React from "react";
import { Text } from "@geist-ui/core";

function BlogTitle(props) {
  return (
    <div>
      <div className="text-center pt-5">
        <div className="font-bold lg:text-5xl sm:text-4xl text-4xl">
          {props.title}
        </div>
        <Text className="text-grey text-lg mt-5 pt-5" type="secondary">
          {props.children}
        </Text>
      </div>
      <h1></h1>
      <br />
    </div>
  );
}

export default BlogTitle;
