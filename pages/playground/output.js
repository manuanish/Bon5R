/*@jsxRuntime automatic @jsxImportSource react*/
import {jsx as _jsx} from "react/jsx-runtime";
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});  return MDXLayout ? _jsx(MDXLayout, Object.assign({}, props, {children: _jsx(_createMdxContent, {})})) : _createMdxContent(); function _createMdxContent() {const _components = Object.assign({h1: "h1"    }, props.components);return _jsx(_components.h1, {children: "Hello World!"   });  }}export default MDXContent;
