import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Axios() {
    const [user, setUser] = useState([])
    const fetchdata = () => {
        return axios.get("https://jsonplaceholder.typicode.com/users")
            .then((res) => {
                setUser(res.data);
                console.log("data fetched")
            })
            .catch((e) => alert(e.message))
        // console.log("error occured")
        // axios.get('https://jsonplaceholder.typicode.com/users'
        //    )
        //   .then(function (response) {
        //     console.log(response.data);
          
        //   })
        //   .catch(function (error) {
        //     console.log(error);
        //   });

    }
    useEffect(() => {
        fetchdata();
    }, [])
    return (
        <div>
            <h1>Axios </h1>
           

            <table border="1">{user.map((data, index) => <tr><td key={data.id}>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.username}</td>
                <td>{data.address.street}</td></tr>
            )}</table>


        </div>
    )
}
