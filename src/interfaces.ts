export interface IFriendList {
  friends: { avatar: string; name: string; isOnline: boolean; id: number }[];
}
export interface IFriendListItem {
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

export interface IStatistics {
  stats: { id: string; label: string; percentage: number }[];
}

export interface ITransactionHistory {
  transactions: {
    id: string;
    type: string;
    amount: string;
    currency: string;
  }[];
}
