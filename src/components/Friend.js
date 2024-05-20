import Button from "./Button";

export default function Friend({ friend, curFriend, onCurFriend }) {
  return (
    <li>
      <img src={friend.image} alt={`${friend.name} avatar`} />
      <h3>{friend.name}</h3>

      {friend.balance < 0 && (
        <p className="red">
          you owe {friend.name} {Math.abs(friend.balance)}
        </p>
      )}

      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you {Math.abs(friend.balance)}
        </p>
      )}

      {friend.balance === 0 && <p>you and {friend.name} are even</p>}

      <Button onClick={() => onCurFriend(friend)}>
        {curFriend?.id === friend.id ? "close" : "select"}
      </Button>
    </li>
  );
}
