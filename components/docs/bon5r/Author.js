import Image from "next/image";
import Link from "next/link";
import { Text, User } from "@geist-ui/core";
import * as React from "react";

export default function Author(props) {
  const [userData, setUserData] = React.useState(null);
  const [fetched, setFetched] = React.useState(false);

  React.useEffect(() => {
    if (fetched == false) {
      fetch(`https://api.github.com/users/${props.userName}`)
        .then((res) => res.json())
        .then((json) => {
          setUserData(json);
        });
      setFetched(true);
    }
  });

  return (
    <div className="flex gap-1">
      {userData ? (
        <User
          src={`https://github.com/${props.userName}.png`}
          name={userData.name}
        >
          <User.Link href={`https://github.com/${props.userName}`}>
            @{props.userName}
          </User.Link>
        </User>
      ) : (
        <div></div>
      )}
      <Text type="secondary" className="pt-4">
        &#8212; {props.date}, {props.readTime} min read
      </Text>
    </div>
  );
}
