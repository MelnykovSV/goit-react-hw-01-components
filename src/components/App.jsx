import { Profile } from './Profile';
import user from '../data/user.json';
import { Statistics } from './Statistics';
import statistics from '../data/data.json';
import { StatListItem } from './StatListItem';
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
    </div>
  );
};
