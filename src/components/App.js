import { useState } from "react";
import "./App.css";
import Form from "./Form";
import Logo from "./Logo";
import PackingList from "./PackingList";
import Stats from "./Stats";

export default function App() {
  const [items, setItems] = useState([]);

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  return (
    <div className="app">
      <Logo />
      <Form onItem={setItems} />
      <PackingList
        items={items}
        onToggleItem={handleToggleItem}
        onDeleteItem={handleDeleteItem}
      />

      <Stats items={items} />
    </div>
  );
}
