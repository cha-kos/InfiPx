import React from 'react';


class User extends React.Component {

  componentDidMount() {
    this.props.getUser(this.props.match.params.id);
  }

  componentWillReceiveProps(nextProps) {
   if (this.props.match.params.id !== nextProps.match.params.id) {
     this.props.getUser(nextProps.match.params.id);
   }
  }
  render () {

    if (!this.props.user) {
      return (<h3>...loading</h3>);
      }

    return (<p>{this.props.user.username}</p>);
  }
}

export default User;
