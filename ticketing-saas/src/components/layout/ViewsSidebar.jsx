export default function ViewsSidebar() {
  return (
    <div className="w-52 bg-gray-50 border-r p-4">
      <h2 className="text-sm font-semibold mb-3 text-gray-500">
        TICKET VIEWS
      </h2>

      <ul className="space-y-2 text-sm">
        <li className="bg-blue-100 text-blue-700 p-2 rounded cursor-pointer">
          My Tickets
        </li>
        <li className="p-2 hover:bg-gray-100 rounded cursor-pointer">
          Past Due
        </li>
        <li className="p-2 hover:bg-gray-100 rounded cursor-pointer">
          High Priority
        </li>
        <li className="p-2 hover:bg-gray-100 rounded cursor-pointer">
          Unassigned
        </li>
        <li className="p-2 hover:bg-gray-100 rounded cursor-pointer">
          All Tickets
        </li>
      </ul>
    </div>
  );
}
