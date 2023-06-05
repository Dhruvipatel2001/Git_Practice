import React, { useState ,useEffect} from 'react'

export default function UseEffect() {
    const [number,setNumber]=useState(Math.floor(Math.random()*4)+1)
    const [greeting,setGreeting]=useState("1");
    useEffect(()=>{console.log("random greeting ");},[]);
    useEffect(()=>{

      window.localStorage.setItem('random',number);
      switch(number)
     {
      case 1: setGreeting("hello");
              break;
      case 2: setGreeting("hii");
              break;
      case 3: setGreeting("heyy");
              break;
     case 4: setGreeting("Ciao");
              break;
     }

    },[number])

  return (
    <div >
      <h2 style={{textAlign:'center'}}>this is UseEffect hook</h2>
       <h3 style={{textAlign:'center'}}>random greeting Message</h3>
       <h2 style={{textAlign:'center',backgroundColor:"yellow" }}>{number} {greeting}</h2>
     
      
      
    </div>
  )
}
