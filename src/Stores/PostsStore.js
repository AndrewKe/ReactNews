import Store from './Store.js'

class PostsStore extends Store {
  constructor() {
    super();
    this.state.posts = [];
  }
  setPosts(newPosts) {
    this.posts = newPosts;
    this.notify();
  }
}

var store = new PostsStore();
export default store;
