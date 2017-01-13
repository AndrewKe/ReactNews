import React, {Component} from 'react';
import {newPost} from '../Actions/PostActions.js'

class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {title: '',url: ''}
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
    newPost(this.state.title, this.state.url);
  }

  render() {
    return (
      <form onSubmit = {this.handleSubmit}>
        <span>title</span> <input type="text" name="title" value={this.state.title} onChange = {this.onChange}/>
        <br/>
        <span>url</span> <input type="text" name="url" value={this.state.url} onChange = {this.onChange}/>
        <br/>
        <input type="submit" value="Submit"/>
      </form>
    );
  }
}

export default NewPost;
