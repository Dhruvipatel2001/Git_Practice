import React, { Component } from "react";
import Counter from "./counter";
import Counter1 from "./counter1";

export default class Lifecycle_method extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  
  componentDidMount() {
    console.log("component did mount called ");
  }
  increment() {
    this.setState({
      count: this.state.count + 1,
    });
  }
  componentWillUnmount() {
    console.log("componet will remove");
  }

  render() {
    const iscount = false;
    return (
      <div>
        
       {
        iscount ?
          <Counter1 number={this.state.count} />
        :
          <Counter number={this.state.count} />
       }
       
        {/*       
        <button onClick={()=>{this.increment()}}> Add count value </button> */}
      </div>
    );
  }
}
