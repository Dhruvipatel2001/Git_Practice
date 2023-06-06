import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux'
import  {Cakecontainer}from './components/cakecontainer'
import Hookscakecontainer from './components/hookscakecontainer';
import store from './components/redux/cake/store';


function App() {
  return (
    <Provider store={store}>
    <div className="App">
     <Cakecontainer/>
     < Hookscakecontainer/>
    </div>
     </Provider>
  );
}

export default App;
