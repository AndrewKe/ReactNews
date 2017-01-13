import React, {Component} from "react";
import PostsStore from "../Stores/PostsStore.js";
import Post from "./Post.js";

class Posts extends Component {
  constructor() {super();PostsStore.subscribe();
  }

  render() {
    return (
      <div>
        <Post title="Hey" url="https://www.google.com" number="1" website="blog.react.com" />
      </div>
    );
  }
}

export default Posts
