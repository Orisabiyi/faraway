export default function Stats({ items }) {
  const itemLength = items.length;
  const packedItem = items.filter((item) => item.packed).length;
  const percent = Math.round((packedItem / itemLength) * 100);

  return (
    <footer className="stats">
      <em>
        💼 You have {itemLength} items on your list, and you already packed{" "}
        {packedItem} ({percent}%)
      </em>
    </footer>
  );
}
