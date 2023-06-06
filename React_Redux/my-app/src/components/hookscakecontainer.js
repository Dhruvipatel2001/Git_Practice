import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { buyCake } from './redux/cake/cakeAction'

export default function Hookscakecontainer() {
    const numofcakes=useSelector(state=>state.numofcake)
    const Dispatch=useDispatch();
  return (
    <div>
      <h2>hooks cake  container</h2>
      <h2>Num of Cakes-{numofcakes}</h2>
      <button onClick={()=>Dispatch(buyCake())}>Buy Cake</button>
    </div>
  )
}
