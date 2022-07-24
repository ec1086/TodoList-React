import React,{useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	
	const[history,setHistory]=useState([])
	const [val, setVal] = useState();
	


	return (
		<div className="container text-center ">
			<h1 className="fw-lighter">To do List</h1>
			<input type="text" onChange={(e) =>{ setVal(e.target.value)}} placeholder=" Add Tasks"value={val} onKeyDown={
				(e) => {
					let arr= Array.from(e.target.value)
					let filterarr = arr.filter(caracters => caracters !== " ")
					if(e.key === 'Enter' && filterarr.length !== 0 && e.target.value !== ""){
					setHistory([...history,e.target.value])
					setVal("")}
				}
			}/>
			<ul className="list-group ">
				{ history.map( (h,index) => {return<li className="list-group-item" key={index} > {h}<button type="button" className="btn-close" aria-label="Close"onClick={
					(e) =>{e.target.parentElement.style.display ="none"}}></button></li> })}
				
			</ul>

		</div>
	);
};


export default Home;