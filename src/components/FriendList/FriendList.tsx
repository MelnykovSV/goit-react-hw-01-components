import { FriendListContainer } from './FriendList.styled';
interface IFriendList {
  children?: React.ReactNode;
}
export function FriendList({ children }: IFriendList) {
  return <FriendListContainer>{children}</FriendListContainer>;
}
