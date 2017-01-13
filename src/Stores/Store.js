export default class Store {
  constructor() {
    this.bindNotifications();
    this.subs = [];
    this.state = {};
  }

  bindNotifications() {
    var properties = Object.getOwnPropertyNames(Object.getPrototypeOf(this));
    for (var property of properties) {
      if (property != "constructor") {
        var oldFunction = this[property].bind(this);
        this[property] = function() {
          oldFunction.apply(this, arguments);
          this.notify();
        }
      }
    }
  }

  subscribe(sub) {
    this.subs.push(sub);
  }

  notify() {
    console.log(this.state);
    for (var sub of this.subs) {
      sub(this.state);
    }
  }
}
