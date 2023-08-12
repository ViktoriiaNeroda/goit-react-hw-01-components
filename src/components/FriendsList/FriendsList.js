import {FriendsList, FriendsItem, FriendsImg, FriendsName, Status } from "./FriendsList.styled";
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  return (
    <FriendsList className="friend-list">
      {friends.map(friend => (
        <FriendListItem 
          key={friend.id}
          id={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </FriendsList>
  );
};

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendsItem className="item">
      <Status isOnline={isOnline} className="status"></Status>
      <FriendsImg className="avatar" src={avatar} alt={name} width="48" />
      <FriendsName className="name">{name}</FriendsName>
    </FriendsItem>
  );
};
