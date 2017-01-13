import {hashHistory} from 'react-router';
import store from '../Stores/UserStore.js';

export function login(username, password) {
  fetch('http://localhost:3000/login', {
    method: 'post',
    body: JSON.stringify({name: username, password: password}),
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  }).then((response) => {
    return response.json();
  }).then(response => {
    console.log(response);
    if (response.error) {
      alert(response.error);
    }else {
      store.setToken(response.token);
      localStorage.setItem("token", response.token);
      hashHistory.push('/');
    }
  });
}

export function logout() {
  localStorage.removeItem("token");
  store.setToken(undefined);
}
