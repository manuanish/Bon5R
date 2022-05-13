import SidebarButton from "@components/docs/SidebarButton";
import Section from "@components/docs/Section";
import SidebarInformation from "@components/docs/SidebarInformation";
import SidebarLogo from "@components/docs/SidebarLogo";
import {
  DownloadIcon,
  PaintbrushIcon,
  PackageIcon,
  RocketIcon,
  GitPullRequestIcon,
} from "@primer/octicons-react";
import * as React from "react";
import Link from "next/link";

export default function Sidebar(props) {
  const [visibility, setVisibility] = React.useState("visible");
  const [opacity, setOpacity] = React.useState(0);

  React.useEffect(() => {
    document
      .getElementById("documentationSidebar")
      .scrollTo({ top: localStorage.getItem("scrollPosition") });
    // setVisibility("visible");
    setOpacity(100);
  });

  return (
    <div
      className={`bg-slate-900 z-50 top-0 bottom-0 duration-200 ${visibility}`}
      style={{ opacity: opacity }}
    >
      <div
        id="documentationSidebar"
        className="sidebar w-[300px] text-white fixed p-10 pt-0 border-r border-r-slate-800 top-0 bottom-0 overflow-y-scroll"
      >
        <div className="fixed ml-[-20px] bg-transparent bg-gradient-to-b from-slate-900 via-slate-900 to-transparent">
          <SidebarLogo />
          <SidebarInformation />
          <div className="mt-[-40px] pt-6 pb-6 bg-transparent bg-gradient-to-b from-slate-900 to-transparent"></div>
        </div>
        <div className="pt-[250px]">
          <Section icon={<DownloadIcon />} title="Getting Started" />
          <SidebarButton
            pagePath={props.href}
            href="/docs/getting-started/installation"
            pageTitle="Installation"
          />
          <SidebarButton
            pagePath={props.href}
            href="/docs/getting-started/next-steps"
            pageTitle="Next Steps"
          />
          <Section icon={<PackageIcon />} title="Built-in Components" />
          <SidebarButton
            pagePath={props.href}
            href="/docs/component-docs/author"
            pageTitle="Author"
          />
          <SidebarButton
            pagePath={props.href}
            href="/docs/component-docs/blog-title"
            pageTitle="BlogTitle"
          />
          <SidebarButton
            pagePath={props.href}
            href="/docs/component-docs/button"
            pageTitle="Button"
          />
          <SidebarButton
            pagePath={props.href}
            href="/docs/component-docs/footer"
            pageTitle="Footer"
          />
          <SidebarButton
            pagePath={props.href}
            href="/docs/component-docs/header"
            pageTitle="Header"
          />
          <SidebarButton
            pagePath={props.href}
            href="/docs/component-docs/page-title"
            pageTitle="PageTitle"
          />
          <SidebarButton
            pagePath={props.href}
            href="/docs/component-docs/post"
            pageTitle="Post"
          />
          <Section icon={<PaintbrushIcon />} title="Customization" />
          <SidebarButton
            pagePath={props.href}
            href="/docs/customization/editing-components"
            pageTitle="Editing built-in components"
          />
          <SidebarButton
            pagePath={props.href}
            href="/docs/customization/adding-components"
            pageTitle="Creating your own components"
          />
          <SidebarButton
            pagePath={props.href}
            href="/docs/customization/adding-markdown-plugins"
            pageTitle="Adding Remark/Rehype Plugins"
          />
          <Section icon={<RocketIcon />} title="Deployment Guides" />
          <SidebarButton
            pagePath={props.href}
            href="/docs/deployment/vercel"
            pageTitle="Vercel"
          />
          <SidebarButton
            pagePath={props.href}
            href="/docs/deployment/heroku"
            pageTitle="Heroku"
          />
          <SidebarButton
            pagePath={props.href}
            href="/docs/deployment/github-pages"
            pageTitle="Github Pages"
          />
          <Section icon={<GitPullRequestIcon />} title="Contributing" />
          <SidebarButton
            pagePath={props.href}
            href="/docs/contributing/contributing-guide"
            pageTitle="Contributing Guide"
          />
        </div>
      </div>
    </div>
  );
}
