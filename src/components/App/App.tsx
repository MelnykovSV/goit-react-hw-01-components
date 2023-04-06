import { Profile } from './../Profile/Profile';
import user from './../../data/user.json';
import { Statistics } from './../Statistics/Statistics';
import statistics from '../../data/data.json';
import { StatListItem } from '../StatListItem/StatListItem';
import { FriendList } from './../FriendList/FriendList';
import { FriendListItem } from '../FriendListItem/FriendListItem';
import { TransactionHistory } from './../TransactionHistory/TransactionHistory';
import { TransactionHistoryItem } from './../TransactionHistoryItem/TransactionHistoryItem';
import transactions from '../../data/transactions.json';

import { Container } from './App.styled';

import friendsList from '../../data/friends.json';

export const App = () => {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />

      <Statistics>
        {statistics.map(({ id, label, percentage }) => {
          return (
            <StatListItem
              key={id}
              id={id}
              label={label}
              percentage={percentage}
            />
          );
        })}
      </Statistics>

      <FriendList>
        {friendsList.map(({ id, avatar, name, isOnline }) => {
          return (
            <FriendListItem
              key={id}
              avatar={avatar}
              name={name}
              isOnline={isOnline}
            />
          );
        })}
      </FriendList>
      <TransactionHistory>
        {transactions.map(({ id, type, amount, currency }) => (
          <TransactionHistoryItem
            key={id}
            type={type}
            amount={amount}
            currency={currency}
          />
        ))}
      </TransactionHistory>
    </Container>
  );
};
