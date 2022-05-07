export default function Button(props){
  const buttonClicked = () => {
    console.log("Clicked!")
  }
  return (
    <div className="flex justify-center">
      <button className="bg-slate-800 hover:bg-slate-700 p-4 rounded-md " onClick={buttonClicked}>{props.name}</button>
    </div>
  );
}
