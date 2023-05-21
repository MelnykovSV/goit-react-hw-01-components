export interface IFriendInfo {
  avatar: string;
  name: string;
  isOnline: boolean;
  id: number;
}

export interface IFriendList {
  friends: IFriendInfo[];
}

export interface IFriendListItemProps {
  key: number;
  avatar: string;
  name: string;
  isOnline: boolean;
}

export interface IProfile {
  username: string;
  tag: string;
  location: string;
  avatar: string;
  followers: number;
  views: number;
  likes: number;
}

export interface ISingleStat {
  id: string;
  label: string;
  percentage: number;
}

export interface IStatistics {
  stats: ISingleStat[];
}

export interface ITransaction {
  id: string;
  type: string;
  amount: string;
  currency: string;
}

export interface ITransactionHistory {
  transactions: ITransaction[];
}
