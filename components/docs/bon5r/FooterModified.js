import Link from "next/link";

export default function Footer(props) {
  return (
    <Link href={`https://github.com/${props.userName}`}>
      <div className="text-center mb-5 mt-5 text-neutral-300">
        {props.children}
      </div>
    </Link>
  );
}
