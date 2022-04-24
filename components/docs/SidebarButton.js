import { useRouter } from 'next/router';

export default function SidebarButton(props) {
  const router = useRouter();
  if (router.pathname == props.href) {
    return (
      <a className="block border-l p-4 pb-2 pt-2 -ml-px border-current font-semibold text-orange-400" href={props.href}>
        {props.pageTitle}
      </a>
    )
  } else {
    return (
      <a className="block border-l p-4 pb-2 pt-2 -ml-px border-transparent border-slate-700 hover:border-slate-500 text-slate-400 hover:text-slate-300" href={props.href}>
        {props.pageTitle}
      </a>
    )
  }
}
