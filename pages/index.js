import Head from 'next/head';
import Twemoji from '../components/Twemoji';
import Header from '../components/home/Header';
import MainTitle from '../components/home/MainTitle';
import CodeEditor from '../components/home/CodeEditor';
import RenderedOutput from '../components/home/RenderedOutput';
import Slide1 from '../components/home/Slide1';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Bon5R</title>
      </Head>
      <div className="bg-transparent bg-gradient-to-b from-slate-900 via-[rgba(15,23,42,0.75)] to-transparent" style={{overflow: 'scroll'}}>
        <Header/>
        <MainTitle />
        <div className='flex flex-row text-white p-5 justify-around flex-col lg:flex-row w-full pb-0' style={{overflow: 'scroll'}}>
          <CodeEditor />
          <RenderedOutput />
        </div>
      </div>
      <Slide1/>
    </div>
  )
}
