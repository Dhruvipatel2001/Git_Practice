// const redux = require("redux");
import redux from "redux";
import reduxLogger from "redux-logger"
const createStore = redux.createStore;
const combineReducer=redux.combineReducers;
const applyMiddleware=redux.applyMiddleware;
const logger=reduxLogger.createLogger();


const Buy_cake = "buy_cake";
const Buy_icecream = "buy_icercream";

function buycake() {
  return {
    type: Buy_cake,
    info: "first redux action",
  };
}
function buy_icercream() {
  return {
    type: Buy_icecream,
    info: "first redux action",
  };
}

const cakeinitialstate = {
  numofcakes: 10,
};
const icecreaminitialstate = {
  numoficecream: 10,
};
const cakereducer = (state = cakeinitialstate, action) => {
  switch (action.type) {
    case Buy_cake:
      return { ...state, numofcakes: state.numofcakes - 1 };
    default:
      return {
        ...state,
      };
  }
};
const icecreamreducer = (state = icecreaminitialstate, action) => {
  switch (action.type) {
    case Buy_icecream:
      return { ...state, numoficecream: state.numoficecream - 1 };
    default:
      return {
        ...state,
      };
  }
};
const rootReducer=combineReducer({
    cake:cakereducer,icecream:icecreamreducer
})
const store = createStore(rootReducer,applyMiddleware(logger));

console.log("initial state", store.getState());
const unsubscribe = store.subscribe(() =>{});

store.dispatch(buycake());
store.dispatch(buy_icercream());
store.dispatch(buycake());
store.dispatch(buycake());
store.dispatch(buy_icercream());
unsubscribe();
