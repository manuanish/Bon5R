import {Collapse as GeistCollapse, GeistProvider} from "@geist-ui/core";

export default function Collapse(props){
  return(
    <GeistProvider themeType="dark">
      <GeistCollapse.Group>
        <GeistCollapse title={props.title} subtitle={props.subtitle} className="border-slate-500" style={{borderTop: '1px solid rgba(255, 255, 255, 0.1)', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', }}>
          {props.children}
        </GeistCollapse>
      </GeistCollapse.Group>
    </GeistProvider>
  );
}
