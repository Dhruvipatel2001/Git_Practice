import React from 'react'
import {  connect } from 'react-redux'
// import { buyCake } from './redux'
import { buyCake } from './redux/cake/cakeAction'
export  function Cakecontainer(props)
 {
 console.log(props)
  return (
    <div>
      
     <h2>by using connect function</h2>
      <h2>Number of Cakes - {props.cake}</h2>
      <button onClick={props.buy}>Buy Cake</button>
    </div>
  )
}

const mapStateToProps=(state)=>{
  console.log("e")
  return {
    cake:state.numofcake
  }
}
const mapDispatchToProps=(dispatch)=>{
  console.log("f")
  return{
    buy:()=>dispatch(buyCake())

  }
}
export default  connect(mapStateToProps,mapDispatchToProps)(Cakecontainer) 