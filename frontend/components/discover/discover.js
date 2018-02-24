import React from 'react';
import Header from '../header/header_container';

export default class Discover extends React.Component{
  componentDidMount(){
    this.props.requestUsers();
  }

  render(){
    return(
      <div>
        <Header/>
        <h1>DISCOVERING!!!!</h1>
      </div>
    );
  }
}

// <div>
// <ul>
// {this.props.users.map(user => {
//   return(<li><img url={user.avaturUrl}/>{user.username}</li>);
// })}
// </ul>
// </div>
