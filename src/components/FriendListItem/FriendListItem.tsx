import { FriendListItemContainer } from './FriendListItem.styled';
interface IFriendListItem {
  key: number;
  avatar: string;
  name: string;
  isOnline: boolean;
}

export function FriendListItem({ avatar, name, isOnline }: IFriendListItem) {
  return (
    <FriendListItemContainer a={isOnline}>
      <span className="status">{isOnline}</span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </FriendListItemContainer>
  );
}
