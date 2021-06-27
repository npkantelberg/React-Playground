import React from 'react';

// const userInfo = {this.props.userInfo}

class User extends React.Component{
  render(){
      const userName = this.props.userInfo;
      // const users = userName.map((user) => <li>{user}</li>);
    return(
      <div>userName: {userName}</div>
    )
  }
}

export default User;