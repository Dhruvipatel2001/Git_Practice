// export default function Props(props){
//     return(
//         <>
//            <h1>my name is {props.name}</h1>
//         </>
//     );
// }

import React from 'react'

export default function Props() {
    const people=[
        {
            id:1,
            name:"dhruvi",
            city:"ahmedabad"
        },
        {
            id:2,
            name:"dev",
            city:"melborn"
        },
        {
            id:3,
            name:"fenali",
            city:"ahmedabad"
        }
        
    ];
  return (
    <div>
        <h1>hello</h1>
      <ul style={{listStyle:"circle"}}> 
         
            {
            people.map((p)=>{return (<>
            <li style={{listStyle:"square"}}>id: {p.id}</li>
            <li style={{listStyle:"square"}}>name: {p.name}</li>
            <li style={{listStyle:"square"}}> city: {p.city}</li>
            </>);

            })
                              }
         
     
      </ul>
    </div>
  )
}
