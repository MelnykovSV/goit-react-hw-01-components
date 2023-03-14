import { Profile } from './Profile';
import user from '../data/user.json';
import { Statistics } from './Statistics';
import statistics from '../data/data.json';
import { StatListItem } from './StatListItem';
import { FriendList } from './FriendList';
import { FriendListItem } from './FriendListItem';
import { TransactionHistory } from './TransactionHistory';
import { TransactionHistoryItem } from './TransactionHistoryItem';
import transactions from '../data/transactions.json';

import friendsList from '../data/friends.json';

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
          <StatListItem statistics={item} />
        ))}
      </Statistics>

      <FriendList>
        {friendsList.map(item => (
          <FriendListItem friendsList={item} />
        ))}
      </FriendList>
      <TransactionHistory>
        {transactions.map(item => (
          <TransactionHistoryItem transactionData={item} />
        ))}
      </TransactionHistory>
    </div>
  );
};
