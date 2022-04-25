export default function MDXDocs(props){
  return (
    <div className="pl-[400px] p-20 bg-slate-900 text-white z-0 leading-loose">
      <div className="markdown-body bg-transparent text-slate-50">
        {props.children}
      </div>
    </div>
  );
}
