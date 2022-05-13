import { AlertIcon, InfoIcon, BookIcon } from "@primer/octicons-react";

export default function Alert(props) {
  if (props.type == "warning") {
    return (
      <div className="bg-[rgba(253,224,71,0.5)] p-4 rounded-md border border-yellow-500 text-yellow-300">
        <div className="opacity-100">
          <AlertIcon size={20} />
          &nbsp;&nbsp;{props.children}
        </div>
      </div>
    );
  } else if (props.type == "info") {
    return (
      <div className="bg-[rgba(59,130,246,0.5)] p-4 rounded-md border border-blue-500 text-blue-300">
        <div className="opacity-100">
          <InfoIcon size={20} />
          &nbsp;&nbsp;{props.children}
        </div>
      </div>
    );
  } else {
    return (
      <div className="bg-slate-600 p-4 rounded-md border border-slate-500 text-slate-300">
        <div className="opacity-100">
          <BookIcon size={20} />
          &nbsp;&nbsp;{props.children}
        </div>
      </div>
    );
  }
}
