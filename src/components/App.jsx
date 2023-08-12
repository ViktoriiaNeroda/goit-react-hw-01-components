import { Profile } from './Profile/Profile';
import user from './Profile/user.json';

import { StatisticsCard } from './Statistic/Statistic';
import data from './Statistic/data.json';

import { FriendList } from "./FriendsList/FriendsList";
import friends from './FriendsList/friends.json';

import { GlobalStyle } from './GlobalStyle';

import { TransactionHistory } from "./Transactions/Transactions";
import transactions from './Transactions/transactions.json';

export const App = () => {
  return (
      <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: 100,
        margin: 100,
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <StatisticsCard title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <GlobalStyle />
      <TransactionHistory items={transactions} /> 
    </div>
  );
};
