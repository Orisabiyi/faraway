import { useState } from "react";
import Item from "./Item";

export default function PackingList({
  items,
  onToggleItem,
  onDeleteItem,
  onClearList,
}) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItem;

  if (sortBy === "input") sortedItem = items;
  if (sortBy === "description")
    sortedItem = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItem = items.slice().sort((a, b) => a.packed - b.packed);

  return (
    <div className="list">
      <ul>
        {sortedItem.map((item) => (
          <Item
            item={item}
            onToggleItem={onToggleItem}
            onDeleteItem={onDeleteItem}
            key={item.description}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed</option>
        </select>

        <button onClick={onClearList}>clear list</button>
      </div>
    </div>
  );
}
