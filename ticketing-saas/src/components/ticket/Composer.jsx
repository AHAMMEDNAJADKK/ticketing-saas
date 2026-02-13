export default function Composer() {
  return (
    <div className="p-4 border-t bg-gray-50">
      <textarea
        placeholder="Add a reply..."
        className="w-full border rounded p-2"
      />
      <div className="flex justify-end mt-2">
        <button className="bg-blue-600 text-white px-4 py-1 rounded">
          Send
        </button>
      </div>
    </div>
  );
}


