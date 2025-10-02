import { useMemo, useState, useCallback } from "react";
import Sidebar from "./Sidebar";
import Editor from "./Editor";
import RightPanel from "./RightPanel";

type FileNode = {
  id: string;
  name: string;
  type: "file" | "folder";
  children?: FileNode[];
};

type Tab = { id: string; title: string };

export default function Layout() {
  // Define your portfolio sections as a file tree (folders are optional)
  const fileTree = useMemo<FileNode[]>(
    () => [
      { id: "readme", name: "README.md", type: "file" },
      {
        id: "about",
        name: "about",
        type: "folder",
        children: [
          { id: "about/intro", name: "intro.md", type: "file" },
          { id: "about/skills", name: "skills.md", type: "file" },
        ],
      },
      {
        id: "projects",
        name: "projects",
        type: "folder",
        children: [
          { id: "projects/p1", name: "my-app.md", type: "file" },
          { id: "projects/p2", name: "cool-lib.md", type: "file" },
        ],
      },
      { id: "contact", name: "contact.md", type: "file" },
    ],
    []
  );

  const [openTabs, setOpenTabs] = useState<Tab[]>([{ id: "readme", title: "README.md" }]);
  const [activeTabId, setActiveTabId] = useState<string>("readme");

  const openFileInTab = useCallback((node: FileNode) => {
    if (node.type !== "file") return;
    setOpenTabs((prev) => (prev.some((t) => t.id === node.id) ? prev : [...prev, { id: node.id, title: node.name }]));
    setActiveTabId(node.id);
  }, []);

  const closeTab = useCallback((id: string) => {
    setOpenTabs((prev) => {
      const idx = prev.findIndex((t) => t.id === id);
      const next = prev.filter((t) => t.id !== id);
      // If closing active tab, activate neighbor tab
      if (id === activeTabId && next.length) {
        const nextIdx = Math.max(0, idx - 1);
        setActiveTabId(next[nextIdx].id);
      }
      if (!next.length) {
        setActiveTabId("");
      }
      return next;
    });
  }, [activeTabId]);

  return (
    <div className="h-screen grid grid-cols-[220px_1fr_250px] bg-gray-900 text-gray-200">
      {/* Sidebar */}
      <div className="border-r border-gray-700 overflow-auto">
        <Sidebar tree={fileTree} onOpenFile={openFileInTab} />
      </div>

      {/* Main Editor (with tabs + terminal inside) */}
      <div className="border-r border-gray-700 flex flex-col min-w-0">
        <Editor
          tabs={openTabs}
          activeTabId={activeTabId}
          onSelectTab={setActiveTabId}
          onCloseTab={closeTab}
        />
      </div>

      {/* Right Panel */}
      <div className="border-l border-gray-700 overflow-auto">
        <RightPanel />
      </div>
    </div>
  );
}
