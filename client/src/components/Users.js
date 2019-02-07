import React,{Component} from 'react';
import axios from 'axios';
import {Link , NavLink,withRouter} from 'react-router-dom';
class Users extends Component {
  constructor(props){
    super(props)
    this.state={users:[]}
    axios('https://jsonplaceholder.typicode.com/users')
    .then(res=>{console.log(res);this.setState({users:res.data})});    
  }

  render(){
    return(
    <div className="bg-warning p-5">
        <h4 className="text-white p-3">User List</h4>
        <UserTbl userList={this.state.users}></UserTbl>
    </div>
  );
  }
}

const UserTbl=(props)=>{
  return <div className="row">
    {
      props.userList.length > 0 ?
      <div className="card-body container mx-auto m-3">
        <div className="row mx-auto">
          <table className="bg-dark text-white text-left table mt-1 table-striped bg-light mx-auto col-md-6 width:100%">
          <thead><tr><th>Name</th><th>User Name</th></tr></thead>
          <tbody>
          {props.userList.map((user)=><tr className="link hstrike" key={user.name}><td title={"Posts of "+user.name}><NavLink to={"/Posts/"+user.id+"/"+user.name}>{user.name}</NavLink></td><td>{user.username}</td></tr>)}
          </tbody>
          </table>
        </div>
      </div>
      : <div className="mx-auto m-5 text-light">No Users in the List</div>
    }
    </div>
}

export default Users;
