import Head from 'next/head';
import Twemoji from '../components/Twemoji';
import Header from '../components/Home/Header';
import MainTitle from '../components/Home/MainTitle';
import CodeEditor from '../components/Home/CodeEditor';
import RenderedOutput from '../components/Home/RenderedOutput';
import Slide1 from '../components/Home/Slide1';

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
