import UserStore from '../Stores/UserStore.js';
import {hashHistory} from 'react-router';

export function newPost(title, url) {
  fetch('http://localhost:3000/posts', {
    method: 'post',
    body: JSON.stringify({title: title, url: url, token: UserStore.state.token}),
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  }).then((response) => {
    return response.json();
  }).then(response => {
    console.log(response);
    hashHistory.push('/');
  });
}

export function getPosts() {
  fetch('http://localhost:3000/posts').then((response) => {
    return response.json();
  }).then(response => {
    console.log(response);
  });
}
