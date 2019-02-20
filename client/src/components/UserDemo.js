import React, { Component } from 'react';
import axios from 'axios';

class UserDemo extends Component {

  constructor(props){
      super(props);
      this.state={users:[]}
      axios('https://jsonplaceholder.typicode.com/users')
      .then(res=>{console.log(res);this.setState({users:res.data})});    
    }        
  render() {
    return (<div className="p-3 bg-light d-line">
        <Emp users={this.state.users}></Emp>
    </div>);
  }
}
const Emp =(props)=>{
    return(<table className="table"><tbody>
    {props.users.map((emp)=><tr><td>{emp.name}</td><td>{emp.email}</td><td>{emp.phone}</td></tr>)}
    </tbody></table>)
}

export default UserDemo;
