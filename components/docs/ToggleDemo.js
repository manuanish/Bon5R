import { GeistProvider, CssBaseline, Button, Toggle, Card, Text, Divider } from '@geist-ui/core'
import * as React from "react";
import { Sun, Moon } from "@geist-ui/icons";

export default function ToggleDemo(props) {
  const [theme, setTheme] = React.useState('light')

  const handleClick = () => {
    if (theme == 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  return (
    <div>
      <GeistProvider themeType={theme}>
      <Card>
      <div className="flex">
      <div className="flex grow">
        <Text type="secondary">{props.title}</Text>
      </div>
      <div className="flex gap-2">
        <Sun />
        <Toggle scale={1.4} checked={false} onChange={handleClick} />
        <Moon />
      </div>
      </div>
      <Divider h="1px" my={0} />
      <div className={`w-full flex justify-center ${props.padding}  ${theme == "light" ? `bg-[#FFFFFF]` : `bg-[#000000]`}`}>
        {theme == "light" ? props.childrenLight : props.childrenDark}
      </div>
      </Card>
      </GeistProvider>
    </div>
  );
}
