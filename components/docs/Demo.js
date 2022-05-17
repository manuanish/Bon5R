export default function Demo(props){
  return (
    <div className="p-4 rounded-xl bg-white flex justify-center items-end text-black grow">
      {props.children}
    </div>
  );
}
