import Friend from "./Friend";

export default function FriendList({ friends, curFriend, onCurFriend }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          curFriend={curFriend}
          onCurFriend={onCurFriend}
        />
      ))}
    </ul>
  );
}
