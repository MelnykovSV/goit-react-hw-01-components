interface IFriendListItem {
  friendsList: { avatar: string; name: string; isOnline: boolean; id: number };
}

export function FriendListItem({
  friendsList: { avatar, name, isOnline, id },
}: IFriendListItem) {
  return (
    <li className="item">
      <span className="status">{isOnline}</span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
}
