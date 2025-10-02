export default function Sidebar() {
  return (
    <div className="p-4">
      <h2 className="text-sm font-semibold text-gray-400 mb-2">Files</h2>
      <ul className="space-y-1 text-sm">
        <li className="hover:bg-gray-800 cursor-pointer px-2 py-1 rounded">
          about.tsx
        </li>
        <li className="hover:bg-gray-800 cursor-pointer px-2 py-1 rounded">
          projects.tsx
        </li>
        <li className="hover:bg-gray-800 cursor-pointer px-2 py-1 rounded">
          contact.tsx
        </li>
      </ul>
    </div>
  );
}
