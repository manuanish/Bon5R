import Twemoji from '../Twemoji';

export default function CodeEditor() {
  return (
    <div className='p-4 m-4 border border-slate-600 rounded-xl bg-slate-900 basis-1/2 shadow-2xl shadow-slate-900 lg:max-w-[700px]' >
      <div className='text-slate-500'>
        pages/index.mdx
      </div>
      <pre className='pt-4 language-js bottom-0' style={{height: 'calc(100% - 32px)', overflowX: 'scroll'}}>
        <code className='language-js'>
          <span className='token keyword'>import</span> <span className='token tag'>Header</span> <span className='token keyword'>from</span> <span className='token string'>&quot;../components/Header&quot;</span>;
          <br/>
          <span className='token keyword'>import</span> <span className='token tag'>BlogTitle</span> <span className='token keyword'>from</span> <span className='token string'>&quot;../components/BlogTitle&quot;</span>;
          <br/>
          <span className='token keyword'>import</span> <span className='token tag'>Footer</span> <span className='token keyword'>from</span> <span className='token string'>&quot;../components/Footer&quot;</span>;
          <br/>
          <br/>
          <span className="token keyword">{"<"}</span>
          <span className="token tag" >{"Header"}</span>
          <span className="token class-name" >{" title"}</span>
          <span className="token keyword" >{"="}</span>
          <span className="token string">&quot;<Twemoji emoji="📖" /> My Blog Title&quot;</span>
          <span className="token keyword" >{" />"}</span>
          <br/>
          <br/>
          <span className="token tag">{"## Hello World!"} <Twemoji emoji="👋" /></span>
          <br/>
          This is the main page content.
          <br/>
          <br/>
          <span className="token keyword" >{"<"}</span>
          <span className="token tag" >{"Footer"}</span>
          <span className="token class-name" >{" content"}</span>
          <span className="token keyword" >{"="}</span>
          <span className="token string">&quot;Code with <Twemoji emoji="❤️" /> by @manuanish&quot;</span>
          <span className="token keyword" >{" />"}</span>
        </code>
      </pre>
    </div>
  )
}
