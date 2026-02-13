export default function StatusBadge({ status }) {
  const styles = {
    Open: "bg-blue-100 text-blue-700",
    Pending: "bg-yellow-100 text-yellow-700",
    Resolved: "bg-green-100 text-green-700",
  };

  return (
    <span
      className={`text-xs px-2 py-1 rounded-full font-medium ${styles[status]}`}
    >
      {status}
    </span>
  );
}
