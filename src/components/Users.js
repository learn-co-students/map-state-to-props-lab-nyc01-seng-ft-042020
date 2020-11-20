import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
          {this.props.user.map(user => {
            return <li>user: {user.username} hometown: {user.hometown}</li>
          })}
          <p>total: {this.props.user.length}</p>
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
let mapStateToProps = (state) => {
  console.log("INSIDE MSTP", state.users)
  return {
    user: state.users
  }
}
// connect this component to Redux
export default connect(mapStateToProps)(Users)
