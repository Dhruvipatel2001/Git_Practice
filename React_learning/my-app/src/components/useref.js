import React ,{useRef,useState,useEffect}from 'react'


export default function Useref() {
  let countref=useRef(0)
  const [searchterm,setsearchterm] = useState(" ");
  useEffect(()=>{
  // countref.current.focus();
    console.log("useeffect called");
    countref.current=countref.current+1;
    console.log(countref.current);
   },[{setsearchterm}])
  return (
    <div>
      <h2>this is useReference hook</h2>
      {countref.current}
      <input type="text"value={searchterm}  onChange={(e)=>{setsearchterm(e.target.value)}}/>
        &nbsp;
    
    </div>
  )
}
