import Terminal from "./Terminal";

export default function Editor() {
  return (
    <div className="flex flex-col h-full">
      {/* Editor main content */}
      <div className="flex-1 p-4 overflow-auto">
        <h1 className="text-2xl font-bold text-blue-400">Welcome to My Portfolio</h1>
        <p className="mt-2 text-gray-300">
            Click on a file in the sidebar to open it here.
      </p>
      </div>

      {/* Terminal inside editor */}
      <div className="border-t border-gray-700 bg-gray-800 p-2">
        <Terminal />
      </div>
    </div>
  );
}
