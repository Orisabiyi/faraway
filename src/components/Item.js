export default function Item({ item }) {
  return (
    <li>
      <input type="checkbox" />
      <span>{item.quantity}</span>
      <span>{item.description}</span>
      <button>X</button>
    </li>
  );
}
