import Link from 'next/link';
import {XIcon} from "@primer/octicons-react";
import * as React from 'react';

export default function HomeAd(){
  return (
    <div className={`relative bg-slate-800 p-4 justify-center flex duration-200 text-white`}>
      <div className="grow">
        <div className="text-center">
          Try Bon5R in your browser! &nbsp;<Link href='/playground'>{"Visit the playground ->"}</Link>
        </div>
      </div>
    </div>
  );
}
