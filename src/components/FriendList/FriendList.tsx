import { Container } from './FriendList.styled';
import { FriendListItem } from '../FriendListItem/FriendListItem';
import { IFriendList } from '../../interfaces';

export function FriendList({ friends }: IFriendList) {
  return (
    <Container>
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
