import Button from "./Button";

export default function FormSplitBill() {
  return (
    <form className="form-split-bill">
      <h2>Split Bill with X</h2>

      <label>💰 Bill value</label>
      <input type="number" />

      <label>🧍Your expense</label>
      <input type="number" />

      <label>👬X expense</label>
      <input type="number" disabled />

      <label>🤑Who is paying the bill?</label>
      <select>
        <option>You</option>
        <option>X</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
}
