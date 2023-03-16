interface IFriendList {
  children?: React.ReactNode;
}
export function FriendList({ children }: IFriendList) {
  return <ul className="friend-list">{children}</ul>;
}
