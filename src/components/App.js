import { useState } from "react";
import FriendList from "./FriendList";
import FormAddFriend from "./FormAddFriend";
import Button from "./Button";
import FormSplitBill from "./FormSplitBill";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

// 1. Create a static page layout of the web page using component

export default function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showFriend, setShowFriend] = useState(false);
  const [curFriend, setCurFriend] = useState(null);

  function handleShowFriend() {
    setShowFriend((show) => !show);
  }

  function handleSetFriend(friend) {
    let newFriendExist = friends.filter(
      (prevFriends) => friend.name === prevFriends.name
    );

    if (newFriendExist.length) {
      setShowFriend(false);
      return alert(
        `Provide a new friend name, ${newFriendExist[0].name} already exist`
      );
    }

    setFriends((prevFriends) => [...prevFriends, friend]);
    setShowFriend(false);
  }

  function handleCurFriend(friend) {
    setCurFriend((curFriend) => (curFriend?.id === friend.id ? null : friend));
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          friends={friends}
          curFriend={curFriend}
          onCurFriend={handleCurFriend}
        />

        {showFriend && <FormAddFriend onSetFriend={handleSetFriend} />}

        <Button onClick={handleShowFriend}>
          {showFriend ? "close" : "Add Friend"}
        </Button>
      </div>

      {curFriend && <FormSplitBill />}
    </div>
  );
}
