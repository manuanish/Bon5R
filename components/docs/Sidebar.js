import SidebarButton from '@components/docs/SidebarButton';
import Section from '@components/docs/Section'

export default function Sidebar(props){
  return (
    <div className="bg-transparent bg-gradient-to-r from-slate-800 to-slate-900">
      <div className="sidebar w-[300px] text-white fixed h-full p-10">
        <Section title="Getting Started"/>
        <SidebarButton pagePath={props.href} href="/docs/getting-started/installation" pageTitle="Installation"/>
        <SidebarButton pagePath={props.href} href="/docs/getting-started/next-steps" pageTitle="Next Steps"/>
        <Section title="Customizing Components"/>
      </div>
    </div>
  )
}
