import { List, ProfileImg, Descript, DescriptName, ProfileBox, ListRow } from "./Profile.styled.js";

export function Profile({
 username,
  tag,
  location, 
    avatar,
    stats: {
        followers,
        views,
        likes
    }
  }) {
  return (
    <ProfileBox className="profile">
  <div className="description">
              <ProfileImg
                  src={avatar}
      alt={username}
      className="avatar"
    />
              <DescriptName className="name">{username}</DescriptName>
              <Descript className="tag">@{tag}</Descript>
              <Descript className="location">{location}</Descript>
  </div>

  <List className="stats">
    <ListRow>
      <span className="label">Followers </span>
                  <span className="quantity">{followers}</span>
    </ListRow>
    <ListRow>
      <span className="label">Views </span>
      <span className="quantity">{views}</span>
    </ListRow>
    <ListRow>
      <span className="label">Likes </span>
      <span className="quantity">{likes}</span>
    </ListRow>
  </List>
</ProfileBox>
  );
}
