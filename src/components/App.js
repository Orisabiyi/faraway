import { useState } from "react";
import "./App.css";
import Form from "./Form";
import Logo from "./Logo";
import PackingList from "./PackingList";
import Stats from "./Stats";

export default function App() {
  const [items, setItems] = useState([]);

  return (
    <div className="app">
      <Logo />
      <Form onItem={setItems} />
      <PackingList items={items} />
      <Stats />
    </div>
  );
}
