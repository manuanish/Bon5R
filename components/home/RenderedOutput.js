import Twemoji from '../Twemoji';

export default function RenderedOutput() {
  return (
    <div className='p-4 m-4 border border-slate-600 rounded-xl bg-slate-900 basis-1/2 shadow-2xl shadow-slate-900 lg:max-w-[700px]'>
      <div className='text-slate-500 pb-2'>
        http://localhost:3000
      </div>
      <div className="bg-slate-800 rounded-lg">
        <div className="flex flex-row p-4 border-slate-600 bg-slate-700" style={{borderRadius: '8px 8px 0px 0px'}}>
          <div className='font-bold flex-grow-1'>
            <span><Twemoji emoji="📖" />&nbsp;&nbsp;My Blog Title</span>
          </div>
        </div>
        <div className="p-10">
          <div className="text-2xl font-bold pb-1">Hello World! <Twemoji emoji="👋"/></div>

          This is the main page content.
        </div>
        <div className="bottom-0 mt-20 text-center pb-5 text-slate-500 text-xs">Code with <Twemoji emoji="❤️" /> by @manuanish</div>
      </div>
    </div>
  )
}
