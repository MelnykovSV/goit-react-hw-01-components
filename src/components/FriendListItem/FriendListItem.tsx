import { Container } from './FriendListItem.styled';
import { IFriendListItemProps } from '../../interfaces';

export function FriendListItem({
  avatar,
  name,
  isOnline,
}: IFriendListItemProps) {
  return (
    <Container a={isOnline} className="item">
      <span className="status">{isOnline}</span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </Container>
  );
}
