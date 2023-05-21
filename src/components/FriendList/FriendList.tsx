import { Container } from './FriendList.styled';
import { FriendListItem } from '../FriendListItem/FriendListItem';
import { IFriendListProps } from '../../interfaces';

export function FriendList({ friends }: IFriendListProps) {
  return (
    <Container className="friend-list">
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </Container>
  );
}
