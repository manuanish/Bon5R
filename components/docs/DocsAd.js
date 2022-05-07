import Link from 'next/link';
import {XIcon} from "@primer/octicons-react";
import * as React from 'react';

export default function DocsAd(){
  const [visibility, setVisibility] = React.useState('visible')
  const [opacity, setOpacity] = React.useState(1)
  const [margin, setMargin] = React.useState(20)

  const onButtonClick = (event) => {
    event.preventDefault();
    // setVisibility('hidden')
    setOpacity(0)
    setMargin(15)
  }
  return (
    <div className={`bg-slate-800 mb-${margin} p-4 justify-center flex duration-200`} style={{marginLeft: -100, marginRight: 0, width: 'calc(100% + 180px)', visibility: visibility, opacity: opacity}}>
      <div className="grow">
        <div className="text-center">
          Try Bon5R in your browser! &nbsp;<Link href='/playground'>{"Visit the playground ->"}</Link>
        </div>
      </div>
      <div className="grow-0 text-slate-500 hover:text-slate-300">
        <button onClick={onButtonClick}><XIcon size={20}/></button>
      </div>
    </div>
  );
}
