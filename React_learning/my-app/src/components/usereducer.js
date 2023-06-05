import React,{useReducer} from 'react'



const initialstate=0;
const reducer=(state,action)=>{
    switch(action){
        case "add":
            return state+1;
        case "subtract":
            return state-1;
        case "reset":
            return 0;
        default:
            throw new Error("unexpected action")


    }

};

export default function Usereducer() {
    const[count,dispatch]=useReducer(reducer,initialstate);
  return (
    <>
    <h1 style={{textAlign:"center"}}>this is useReducer hook </h1>
    <h1 style={{textAlign:"center",margin:"2rem"}}>Counter </h1>
    <div style={{position:"absolute",top:"35%",left:"39%",border:"1px solid red",padding:"2rem"}}> 
    <h2 style={{textAlign:"center"}}>{count}</h2>
    <button className='btn' onClick={()=>dispatch("add")}>Addition</button><br></br>
    <button  className='btn'onClick={()=>dispatch("subtract")}>Subtract</button><br></br>
    <button  className='btn'onClick={()=>dispatch("reset")}> Reset </button><br></br>
   
      
      
    </div>
    </>
  )
}
