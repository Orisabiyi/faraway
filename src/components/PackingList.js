import Item from "./Item";

export default function PackingList({ items, onToggleItem }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item item={item} onToggleItem={onToggleItem} />
        ))}
      </ul>
    </div>
  );
}
