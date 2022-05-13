import Image from "next/image";

export default function DocsImage(props) {
  return (
    <div className="relative height-[100px] width-[100px] flex justify-center flex-col">
      <Image
        src={props.src}
        alt={props.alt}
        width={props.width}
        height={props.height}
        quality={100}
        placeholder={"blur"}
        blurDataURL
        style={{ borderRadius: 10 }}
      />
      <div className="mt-5 text-slate-600">{props.caption}</div>
    </div>
  );
}
