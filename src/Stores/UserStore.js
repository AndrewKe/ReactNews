import Store from './Store.js'

class UserStore extends Store{
  constructor() {
    super()
    if (localStorage.getItem("token")) {
      this.state.token = localStorage.getItem("token");
    }
  }

  setToken(newToken) {
    this.state.token = newToken;
  }
}

var store = new UserStore();
export default store;
