export default function Stats({ items }) {
  let msg = "";
  const numItems = items.length;
  if (numItems === 0) {
    msg = "Start adding some items to your packing list 🤘";
  } else {
    const numPacked = items.filter((item) => item.packed).length;
    const percentage = Math.round((numPacked / numItems) * 100);
    msg =
      percentage === 100
        ? "You got everything! Ready to go ✈️"
        : `You have ${numItems} items on your list, and you already packed ${numPacked} (${percentage}%)`;
  }

  return (
    <footer className="stats">
      <em>{msg}</em>
    </footer>
  );
}
