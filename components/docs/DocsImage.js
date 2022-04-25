import Image from 'next/image';

export default function DocsImage(props) {
  return (
    <div className="relative height-[100px] width-[100px] flex justify-center">
      <Image src={props.src} alt={props.alt} width={props.width} height={props.height}/>
    </div>
  );
}
