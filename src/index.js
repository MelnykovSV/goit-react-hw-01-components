import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { Profile } from 'components/Profile';

const user = {
  username: 'Jacques Gluke',
  tag: 'jgluke',
  location: 'Ocho Rios, Jamaica',
  avatar: 'https://cdn-icons-png.flaticon.com/512/2922/2922506.png',
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

const users = [
  {
    username: 'Jacques Gluke',
    tag: 'jgluke',
    location: 'Ocho Rios, Jamaica',
    avatar: 'https://cdn-icons-png.flaticon.com/512/2922/2922506.png',
    stats: {
      followers: 5603,
      views: 4827,
      likes: 1308,
    },
  },
  {
    username: 'Petra Marica',
    tag: '@pmarica',
    location: 'Salvador, Brasil',
    avatar: 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png',
    stats: {
      followers: 1000,
      views: 2000,
      likes: 3000,
    },
  },
];

console.log(user);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
