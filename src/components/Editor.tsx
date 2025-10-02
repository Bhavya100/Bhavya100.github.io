import Terminal from "./terminal";

export default function Editor() {
  return (
    <div className="flex flex-col h-full">
      {/* Editor main content */}
      <div className="flex-1 p-4 overflow-auto">
        <h2 className="font-bold mb-4 text-lg">Editor</h2>
        <div className="bg-blue-500 flex items-center justify-center h-full rounded-lg">
          Tailwind is working 🚀
        </div>
      </div>

      {/* Terminal inside editor */}
      <div className="border-t border-gray-700 bg-gray-800 p-2">
        <Terminal />
      </div>
    </div>
  );
}
