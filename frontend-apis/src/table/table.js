import { useState } from "react";

const Table = () => {
    const [num, setNum] = useState('');
    const [show,setShow]=useState(false)
  
    const table = Array(10).fill(num);
  const handleClick = (event) =>{
    if (event.key === 'Enter') 
    setShow(true)
  }
  
    return (
       <div className="rounded-md p-4 w-1/2  bg-gray-400 m-auto mt-8">
      <div className="flex   justify-center ">
        <h1 className="text-2xl uppercase text-blue-500">print name 1000 times</h1>
        </div>
        <div className=" flex flex-col justify-center items-center text-white "> 
        <input className="text-black w-1/2" type="number" value={num} onKeyPress={handleClick} onChange={e => {
          setShow(false)
          setNum(e.target.value)}} /> 
        <button className="bg-blue-600 mt-2 text-lg w-20 rounded-md flex justify-center items-center" >click me</button>
        {show && table?.map((item, index) => (
      <p className="ml-1" key={index  }> {num} * {index+1} = {item*(index+1)} </p>
      ))}
        </div>
        
      
      </div>
    );
  }
  export default Table;