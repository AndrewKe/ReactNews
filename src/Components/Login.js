import React, { Component } from 'react';
import {login} from '../Actions/AuthActions.js';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {username: 'andrew',password: 'password'};
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChange(event) {
    const newState = {};
    newState[event.target.name] = event.target.value;
    this.setState(newState);
  }

  handleSubmit(event) {
    event.preventDefault();
    login(this.state.username, this.state.password);
    //alert(JSON.stringify(this.state))
  }

  render() {
    return (
      <form onSubmit = {this.handleSubmit}>
        <span>username</span> <input type="text" name="username" value={this.state.username} onChange = {this.onChange}/>
        <span>password</span> <input type="password" name="password" value={this.state.password} onChange = {this.onChange}/>
        <input type="submit" value="Submit"/>
      </form>
    );
  }
}

export default Login;
