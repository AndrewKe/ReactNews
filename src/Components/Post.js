import React, { Component } from 'react';
import './Post.css';

class Post extends Component {
  render() {
    return (
      <div id = "post">
        <span id = "number">{this.props.number}. </span>
        <a id = "post-title" href = {this.props.url}>{this.props.title}</a>
        <span id = "website">({this.props.website})</span>
      </div>
    );
  }
}

export default Post;
