import React, {Component} from "react";
import logo from "../logo.svg";
import "./HeaderBar.css";
import {Link} from "react-router";
import UserStore from "../Stores/UserStore.js";
import {logout} from "../Actions/AuthActions.js";

class HeaderBar extends Component {
  constructor(props) {
    super(props);
    this.state = { token: UserStore.state.token };
    UserStore.subscribe(this.update.bind(this));
  }

  update(newState) {
    this.setState({ token: newState.token });
  }

  render() {
    return (
      <div className="header">
        <div id="left">
          <img src={logo} className="logo" alt="logo" />
          <Link to="/" id="title"><h2>React News</h2></Link>
        </div>
        <div id="header-right">
          <Link to="/post" id="login">New Post</Link>
          {this.state.token ? <a href="javaScript:void(0);" onClick={() => {
                  logout();
                }} id="login">Logout</a> : <Link to="/login" id="login">Login</Link>}
        </div>
      </div>
    );
  }
}

export default HeaderBar
