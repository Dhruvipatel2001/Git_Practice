// import redux from "redux";
// import axios from 'axios'
const redux=require('redux')
const axios=require('axios')
const ThunkMiddleware=require('redux-thunk').default


const createStore=redux.createStore
// const thunkmiddleware=require('redux-thunk').default
const applyMiddleware=redux.applyMiddleware;

const initialstate={
    loading:false,
    users:[],
    error:''
}
const FETCH_USERS_REQUEST=' FETCH_USERS_REQUEST';
const FETCH_USERS_SUCEESS=' FETCH_USERS_SUCEESS';
const FETCH_USERS_FAILURE=' FETCH_USERS_FAILURE';

const fetchUserRequest =()=>{
    return{
       type: FETCH_USERS_REQUEST
    }
}
const fetchUserSuccess =(users)=>{
    return{
        type:FETCH_USERS_SUCEESS,
        payload:users
    }
}
const fetchUserFailure=(error)=>{
    return{
        type:FETCH_USERS_FAILURE,
        payload:error
    }
}
const fetchUsers=()=>{
    return function(dispatch)
    {
        dispatch(fetchUserRequest())
       axios.get('https://jsonplaceholder.typicode.com/users')
       .then(response=>{
        const users=response.data.map(user=>user.id)
        dispatch(fetchUserSuccess(users))
       })
       .catch(error=>{
        dispatch( fetchUserFailure(error.message))
       })
    }
}
const reducer=(state=initialstate,action)=>
{
switch(action.type){
    case FETCH_USERS_REQUEST:
        return{
            ...state,
            loading:true
        }
    case FETCH_USERS_SUCEESS:
         return{
                ...state,
                loading:false,
                users:action.payload,
                error:''
            }
    case FETCH_USERS_FAILURE:
         return{
                ...state,
                loading:false,
                users:[],
                error:action.payload
            }
    
}
}
const store=createStore(reducer,applyMiddleware(ThunkMiddleware ))
store.subscribe(()=>{console.log(store.getState())})
store.dispatch( fetchUsers())