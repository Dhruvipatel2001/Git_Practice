import { BUY_CAKE } from "./caketypes"
const initialstate=
{
    numofcake:10
}
const cakeReducer=(state=initialstate,action)=>{

    switch(action.type)
    {
        case BUY_CAKE:return{
            ...state,
            numofcake:state.numofcake-1
        }
        default:
            return{
                ...state
            }
    }
}
export default cakeReducer;