import SidebarButton from '@components/docs/SidebarButton';
import Section from '@components/docs/Section';
import SidebarInformation from '@components/docs/SidebarInformation';
import SidebarLogo from '@components/docs/SidebarLogo';
import {DownloadIcon, PaintbrushIcon} from '@primer/octicons-react'

import Link from 'next/link';

export default function Sidebar(props){
  return (
    <div className="bg-slate-900 z-50 top-0 bottom-0">
      <div className="sidebar w-[300px] text-white fixed p-10 border-r border-r-slate-800 top-0 bottom-0 overflow-y-scroll">
        <div className="fixed ml-[-20px] bg-transparent bg-gradient-to-b from-slate-900 via-slate-900 to-transparent">
          <SidebarLogo />
          <SidebarInformation />
          <div className="mt-[-40px] pt-6 pb-6 bg-transparent bg-gradient-to-b from-slate-900 to-transparent">
          </div>
        </div>
        <div className="pt-[200px]">
          <Section icon={<DownloadIcon />}title="Getting Started"/>
          <SidebarButton pagePath={props.href} href="/docs/getting-started/installation" pageTitle="Installation"/>
          <SidebarButton pagePath={props.href} href="/docs/getting-started/next-steps" pageTitle="Next Steps"/>
          <Section icon={<PaintbrushIcon />}title="Customization"/>
          <SidebarButton pagePath={props.href} href="/docs/customization/editing-components" pageTitle="Editing Components"/>
          <SidebarButton pagePath={props.href} href="/docs/customization/adding-components" pageTitle="Adding Components"/>
        </div>
      </div>
    </div>
  )
}
