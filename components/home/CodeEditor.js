import Twemoji from '../Twemoji';

export default function CodeEditor() {
  return (
    <div className='p-4 m-4 border border-slate-600 rounded-xl bg-slate-900 basis-1/2 shadow-2xl shadow-slate-900 lg:max-w-[700px]' >
      <div className='text-slate-500'>
        pages/index.mdx
      </div>
      <pre className='pt-4 language-js bottom-0' style={{height: 'calc(100% - 32px)', overflowX: 'scroll'}}>
        <code className='language-js'>
          <span className='token keyword'>import</span> <span className='token tag'>Header</span> <span className='token keyword'>from</span> <span className='token string'>"../components/Header"</span>;
          <br/>
          <span className='token keyword'>import</span> <span className='token tag'>BlogTitle</span> <span className='token keyword'>from</span> <span className='token string'>"../components/BlogTitle"</span>;
          <br/>
          <span className='token keyword'>import</span> <span className='token tag'>Footer</span> <span className='token keyword'>from</span> <span className='token string'>"../components/Footer"</span>;
          <br/>
          <br/>
          <span className="token keyword" children={"<"} />
          <span className="token tag" children={"Header"} />
          <span className="token class-name" children={" title"} />
          <span className="token keyword" children={"="} />
          <span className="token string">"<Twemoji emoji="🚀" /> My Blog Title"</span>
          <span className="token keyword" children={" />"} />
          <br/>
          <br/>
          <span className="token tag" children={"## Hello World!"} /> <Twemoji emoji="👋" />
          <br/>
          This is the main page content.
          <br/>
          <br/>
          <span className="token keyword" children={"<"} />
          <span className="token tag" children={"Footer"} />
          <span className="token class-name" children={" content"} />
          <span className="token keyword" children={"="} />
          <span className="token string">"Code with <Twemoji emoji="❤️" /> by @manuanish"</span>
          <span className="token keyword" children={" />"} />
        </code>
      </pre>
    </div>
  )
}
