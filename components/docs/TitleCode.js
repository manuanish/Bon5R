export default function TitleCode(props) {
  return (
    <div className="flex flex-col overflow-hidden">
      <div className="bg-slate-800 w-fit p-2 pl-4 pr-4 rounded-tl-md rounded-tr-md mb-[-5px] z-10">
        <code className="">{props.title}</code>
      </div>
      <div>{props.children}</div>
    </div>
  );
}
