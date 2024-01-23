import React, { useEffect, useState } from "react";
import Child from "./components/child";

function App() {

  const [count,setCount]=useState(0)
  const [colour,setColour]=useState("white")
  const bg=["red","blue","green","yellow","orange"]
  const [initial,setInitial]=useState(true)
  const [child,setChild]=useState(false)


useEffect(()=>{
  if(initial==true){
    setInitial(false)
  }else{
    const randomBg=bg[Math.floor(Math.random()*bg.length)]
    setColour(randomBg)
  }
},[count,child])

  const changeCount=(e,counter)=>{
    if(counter==="dec"){
      setCount(count-1)
    }else{
      setCount(count+1)
    }
  }

  function change(){
    setChild(!child)
  }
  return (
    <div >
      <div style={{backgroundColor:colour}} className="bg-red-500 p-5 w-100% h-screen flex justify-center items-center ">
       <div className="flex flex-col justify-center items-center gap-4">
       <h2 className="mb-10 text-center text-4xl font-bold">COUNTER</h2>

       <div className="flex gap-3">
       <button  onClick={(e)=>{changeCount(e,"dec")}} className="text-3xl font-bold border-2 w-16 h-10">-</button>
        <p className="text-3xl font-bold text-center border-2 w-16 h-10">{count}</p>
        <button  onClick={(e)=>{changeCount(e,"inc")}} className="text-3xl font-bold border-2 w-16 h-10">+</button>
       </div>

       <button onClick={change} className="text-2xl font-bold border-2 w-16 h-10">{child? "hide":"show"}</button>
       
       <div className="font-bold text-4xl">{ child ? <Child/> : null}</div>
       
       </div>
      </div>
    </div>
  );
}

export default App;
