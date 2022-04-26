export default function Section(props){
  return (
    <div>
      <h5 className="mb-8 lg:mb-3 font-semibold text-slate-200 mt-10"><span style={{verticalAlign: 2}}>{props.icon}</span>&nbsp;&nbsp;{props.title}</h5>
    </div>
  )
}
