import React, { useContext } from "react";
const employeeContext=React.createContext();
 const Context=()=>{
    const employee={
        id:101,
        name:"dhruvi",
        location:"ahmedabad"
      }
    return(
        <>
         <div>
        
        <employeeContext.Provider value={employee}>
          <Employee></Employee>
        </employeeContext.Provider>
      
      </div>
    </>
    );
}
function Employee(){
    let context=useContext(employeeContext);
    return(
      <>
      <h2>employee component</h2>
      <label>Employee id:{context.id}</label><hr></hr>
      <label>Employee name:{context.name}</label>
      <City></City>
      </>
    );
  
  }
  const City=()=>{
    let context=useContext(employeeContext);
    return(
      <>
      <h2>city component </h2>
      
      <label>Employee id:{context.id}</label><hr></hr>
      <label>Employee city:{context.location}</label>
      </>
    );
  }
  export default Context;