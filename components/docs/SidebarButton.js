import { useRouter } from 'next/router';
import Link from 'next/link';

export default function SidebarButton(props) {
  const router = useRouter();
  if (router.pathname == props.href) {
    return (
      <div className="block border-l p-4 pb-2 pt-2 -ml-px border-current font-semibold text-orange-400">
        <Link href={props.href} passHref={true}>
          {props.pageTitle}
        </Link>
      </div>
    )
  } else {
    return (
      <div className="block border-l p-4 pb-2 pt-2 -ml-px border-transparent border-slate-700 hover:border-slate-500 text-slate-400 hover:text-slate-300">
        <Link href={props.href} passHref={true}>
          {props.pageTitle}
        </Link>
      </div>
    )
  }
}
