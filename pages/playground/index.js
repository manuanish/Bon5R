import Head from 'next/head';
import Twemoji from '@components/Twemoji';
import HeaderPlayground from '@components/home/HeaderPlayground';
import MainTitle from '@components/home/MainTitle';
import CodeEditor from '@components/home/CodeEditor';
import RenderedOutput from '@components/home/RenderedOutput';
import Slide1 from '@components/home/Slide1';

export default function Home() {
  return (
    <div className="bg-slate-900">
      <Head>
        <title>Bon5R - Playground</title>
      </Head>
      <div className="bg-transparent bg-gradient-to-b from-slate-900 via-[rgba(15,23,42,0.75)] to-transparent" style={{overflow: 'scroll'}}>
        <HeaderPlayground/>
      </div>
    </div>
  )
}
