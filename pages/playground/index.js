import Head from 'next/head';
import Twemoji from '@components/Twemoji';
import HeaderPlayground from '@components/home/HeaderPlayground';
import MainTitle from '@components/home/MainTitle';
import CodeEditor from '@components/home/CodeEditor';
import RenderedOutput from '@components/home/RenderedOutput';
import Slide1 from '@components/home/Slide1';
import * as React from 'react';
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import {compile} from '@mdx-js/mdx';

export default function Home() {
  const [code, setCode] = React.useState(
    ``
  );
  const onEditorChanged = async (event) => {
    console.log(event)
    setCode(event)

    try {
      console.log(getStaticProps())
    } catch {

    }

  }

  return (
    <div className="bg-slate-900 text-white">
      <Head>
        <title>Bon5R - Playground</title>
      </Head>
      <div className="bg-transparent bg-gradient-to-b from-slate-900 via-[rgba(15,23,42,0.75)] to-transparent" style={{overflow: 'scroll'}}>
        <HeaderPlayground/>
      </div>
      <div className="flex justify-center h-[600px]">
        <div className="bg-slate-800 m-10 mr-0 p-4" style={{width: '50%', borderRadius: '10px 0px 0px 10px'}}>
            <Editor
              value={code}
              onValueChange={onEditorChanged}
              highlight={(code) => highlight(code, languages.js, languages.html)}
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 20
              }}
              className="textEditor"
            />
        </div>
        <div className="markdown-body text-white bg-slate-600 m-10 ml-0 p-4" style={{width: '50%', borderRadius: '0px 10px 10px 0px'}}>
        </div>
      </div>
    </div>
  )
}
