import { Profile } from './../Profile/Profile';
import user from './../../data/user.json';
import { Statistics } from './../Statistics/Statistics';
import statistics from '../../data/data.json';
import { StatListItem } from './../StatListItem';
import { FriendList } from './../FriendList/FriendList';
import { FriendListItem } from './../FriendListItem/FriendListItem';
import { TransactionHistory } from './../TransactionHistory/TransactionHistory';
import { TransactionHistoryItem } from './../TransactionHistoryItem/TransactionHistoryItem';
import transactions from '../../data/transactions.json';

import friendsList from '../../data/friends.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile userProfile={user} />

      <Statistics>
        {statistics.map(item => (
          <StatListItem key={item.id} statistics={item} />
        ))}
      </Statistics>

      <FriendList>
        {friendsList.map(item => (
          <FriendListItem key={item.id} friendsList={item} />
        ))}
      </FriendList>
      <TransactionHistory>
        {transactions.map(item => (
          <TransactionHistoryItem key={item.id} transactionData={item} />
        ))}
      </TransactionHistory>
    </div>
  );
};
