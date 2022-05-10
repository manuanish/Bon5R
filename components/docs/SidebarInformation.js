import Twemoji from "@components/Twemoji";

export default function SidebarInformation() {
  return (
    <div className="relative mt-8 mb-10 border border-slate-700 bg-slate-800 p-4 rounded-lg">
      <div className="font-bold text-slate-200">Found a typo?</div>
      <div className="text-slate-500 text-sm">
        Pull requests are always welcome!
      </div>
      <div className="flex justify-center w-full">
        <button className="p-2 w-full rounded-md bg-orange-500 mt-5 hover:bg-orange-400 text-orange-50">
          Edit the Docs <Twemoji emoji="✍️" />
        </button>
      </div>
    </div>
  );
}
