import * as React from "react";
import { Card, Text, Link, Button } from "@geist-ui/core";

function Post(props) {
  return (
    <Card width="100%">
      <Text h4 my={0}>
        {props.title}
      </Text>
      <Text type="secondary">Posted at: {props.date}</Text>
      <Text>{props.description}</Text>
      <Card.Footer>
        <Link type="success" block href={props.href} target="_blank">
          Read More!
        </Link>
      </Card.Footer>
    </Card>
  );
}

export default Post;
