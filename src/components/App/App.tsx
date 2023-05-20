import { Profile } from './../Profile/Profile';
import { Statistics } from './../Statistics/Statistics';
import { FriendList } from './../FriendList/FriendList';
import { TransactionHistory } from './../TransactionHistory/TransactionHistory';

import { Container } from './App.styled';

import user from './../../data/user.json';
import statistics from '../../data/data.json';
import friends from '../../data/friends.json';
import transactions from '../../data/transactions.json';

const {
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
} = user;

export const App: React.FC = () => {
  return (
    <Container>
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        followers={followers}
        views={views}
        likes={likes}
      />
      <Statistics stats={statistics} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </Container>
  );
};
