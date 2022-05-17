export default function MDXDocs(props) {
  return (
    <div className="pl-[400px] p-20 pt-0 bg-slate-900 text-white z-0 leading-loose duration-200">
      <div className="markdown-body bg-transparent text-slate-100 font-normal">
        {props.children}
      </div>
    </div>
  );
}
