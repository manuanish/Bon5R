import * as React from "react";
import { Sun, Moon } from "@geist-ui/icons";
import { Toggle, Divider, GeistProvider } from "@geist-ui/core";
import { useRouter } from "next/router";

function Header(props) {
  const [checked, setChecked] = React.useState(true);
  const [theme, setTheme] = React.useState("light");
  const router = useRouter();

  React.useEffect(() => {
    setTheme(localStorage.getItem("theme"));
    if (
      localStorage.getItem("theme") == undefined ||
      localStorage.getItem("theme") == "dark"
    ) {
      setTheme("dark");
      setChecked(true);
    } else {
      setTheme("light");
      setChecked(false);
    }
  });

  const handleClick = () => {
    if (checked == false) {
      localStorage.setItem("theme", "dark");
      router.push(router.pathname);
    } else {
      localStorage.setItem("theme", "light");
      router.push(router.pathname);
    }
  };

  return (
    <GeistProvider themeType={theme}>
      <div className="duration-500">
        <div
          className={`top-0 left-0 p-8 w-full z-50 ${
            theme == "dark"
              ? "bg-[#000000] border-b-2 border-[#111111]"
              : "bg-[#FFFFFF] border-b-2 border-[#FAFAFA]"
          }`}
        >
          <div className="flex w-full gap-10">
            <div className="font-bold grow">{props.children}</div>
            <div className="flex gap-2">
              <Sun />
              <Toggle checked={checked} onClick={handleClick} scale={1.4} />
              <Moon />
            </div>
          </div>
        </div>
        <div className="pb-[150px]"></div>
      </div>
    </GeistProvider>
  );
}

export default Header;
