import Sidebar from "./Sidebar";
import Editor from "./Editor";
import RightPanel from "./RightPanel";

export default function Layout() {
  return (
    <div className="h-screen grid grid-cols-[220px_1fr_250px] grid-rows-[1fr_200px] bg-gray-900 text-gray-200">
      {/* Sidebar */}
      <div className="border-r border-gray-700 row-span-full">
        <Sidebar />
      </div>

      {/* Main Editor */}
      <div className="border-r border-gray-700 flex flex-col">
        <Editor />
      </div>

      {/* Right Panel */}
      <div className="border-l border-gray-700 ">
        <RightPanel />
      </div>
    </div>
  );
}
