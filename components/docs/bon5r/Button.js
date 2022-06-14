import * as React from "react";
import Link from "next/link";
import { Button as GeistButton } from "@geist-ui/core";

function Button(props) {
  return (
    <div id="button">
      <Link href={props.href} passHref>
        <GeistButton ghost type="success">
          {props.text}
        </GeistButton>
      </Link>
    </div>
  );
}

export default Button;
