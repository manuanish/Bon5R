import { useRouter } from 'next/router';
import Link from 'next/link';

export default function SidebarButton(props) {
  const router = useRouter();
  if (router.pathname == props.href) {
    return (
      <Link href={props.href} className="w-full p-4" passHref={true}>
        <button className="block border-l w-full pb-2 pt-2 pl-5 text-left -ml-px border-current font-semibold text-orange-400">
          {props.pageTitle}
        </button>
      </Link>
    )
  } else {
    return (
      <Link href={props.href} className="w-full p-4" passHref={true}>
        <button className="block border-l w-full pb-2 pt-2 pl-5 text-left -ml-px border-transparent border-slate-700 hover:border-slate-500 text-slate-400 hover:text-slate-300">
          {props.pageTitle}
        </button>
      </Link>
    )
  }
}
