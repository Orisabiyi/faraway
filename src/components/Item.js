export default function Item({ item, onToggleItem }) {
  return (
    <li style={item.packed ? { textDecoration: "line-through" } : {}}>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItem(item.id)}
      />
      <span>
        {item.quantity} {item.description}
      </span>
      <button style={{ color: "red" }}>X</button>
    </li>
  );
}
