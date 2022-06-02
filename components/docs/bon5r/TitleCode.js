export default function TitleCode(props) {
  return (
    <div className="flex flex-col overflow-hidden text-white">
      <div className="bg-slate-800 w-fit p-2 pl-4 pr-4 rounded-tl-md rounded-tr-md mb-[-5px] z-10 text-white">
        <code className="text-white">{props.title}</code>
      </div>
      <div>{props.children}</div>
    </div>
  );
}
