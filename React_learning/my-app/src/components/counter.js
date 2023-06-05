import React, { Component } from 'react'

export default class Counter extends Component {
     componentDidUpdate(prevprops){
        console.log("pervprops:",prevprops);
        console.log("this.props.number",this.props.number);
        
        if(prevprops.number!==this.props.number){
            console.log("component updated");
        }
     }
 
    render() {
     return (
      <div>
        <h1 style={{color:"red"}}>{this.props.number}</h1>
      </div>
    )
  }
}
