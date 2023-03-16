import { UserProfile } from './Profile.styled';

interface IProfile {
  userProfile: {
    username: string;
    tag: string;
    location: string;
    avatar: string;
    stats: { followers: number; views: number; likes: number };
  };
}

export const Profile = ({
  userProfile: {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
}: IProfile) => (
  <UserProfile>
    <div className="description">
      <img src={avatar} alt="User avatar" className="avatar" />
      <p className="name">{username}</p>
      <p className="tag">{tag}</p>
      <p className="location">{location}</p>
    </div>

    <ul className="stats">
      <li>
        <span className="label">Followers</span>
        <span className="quantity"> {followers}</span>
      </li>
      <li>
        <span className="label">Views</span>
        <span className="quantity"> {views}</span>
      </li>
      <li>
        <span className="label">Likes</span>
        <span className="quantity"> {likes}</span>
      </li>
    </ul>
  </UserProfile>
);
