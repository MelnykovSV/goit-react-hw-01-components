import { Container } from './FriendListItem.styled';
import { IFriendListItem } from '../../interfaces';

export function FriendListItem({ avatar, name, isOnline }: IFriendListItem) {
  return (
    <Container a={isOnline}>
      <span className="status">{isOnline}</span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </Container>
  );
}
