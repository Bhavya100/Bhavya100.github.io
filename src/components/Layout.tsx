import Sidebar from "./sidebar";
import Editor from "./editor";
import RightPanel from "./rightPanel";

export default function Layout() {
  return (
    <div className="h-screen grid grid-cols-[220px_1fr_250px] grid-rows-[1fr_200px] bg-gray-900 text-gray-200">
      {/* Sidebar */}
      <div className="border-r border-gray-700">
        <Sidebar />
      </div>

      {/* Main Editor */}
      <div className="border-r border-gray-700">
        <Editor />
      </div>

      {/* Right Panel */}
      <div>
        <RightPanel />
      </div>
    </div>
  );
}
