import * as React from "react";

function Header(props) {
  return (
    <div>
      <div className="bg-white p-8 w-full z-50 border-b">
        <div className="font-bold">{props.children}</div>
      </div>
    </div>
  );
}

export default Header;
