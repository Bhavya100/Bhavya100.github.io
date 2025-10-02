import { useCallback, useState } from "react";

type FileNode = {
  id: string;
  name: string;
  type: "file" | "folder";
  children?: FileNode[];
};

type SidebarProps = {
  tree: FileNode[];
  onOpenFile: (node: FileNode) => void;
};

export default function Sidebar({ tree, onOpenFile }: SidebarProps) {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const toggle = useCallback((id: string) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  }, []);

  const renderNode = (node: FileNode, depth = 0) => {
    const padding = 2 + depth * 2; // Tailwind padding in px/4 => using className string
    if (node.type === "folder") {
      const isOpen = !!expanded[node.id];
      return (
        <li key={node.id}>
          <div
            className="flex items-center gap-2 cursor-pointer select-none px-2 py-1 rounded hover:bg-gray-800"
            style={{ paddingLeft: `${padding * 4}px` }}
            onClick={() => toggle(node.id)}
          >
            <span className="text-xs text-gray-400">{isOpen ? "▾" : "▸"}</span>
            <span className="text-gray-200">{node.name}</span>
          </div>
          {isOpen && node.children && node.children.length > 0 && (
            <ul className="mt-1 space-y-0.5">
              {node.children.map((child) => renderNode(child, depth + 1))}
            </ul>
          )}
        </li>
      );
    }

    // file
    return (
      <li key={node.id}>
        <button
          className="w-full text-left cursor-pointer px-2 py-1 rounded hover:bg-gray-800"
          style={{ paddingLeft: `${padding * 4}px` }}
          onClick={() => onOpenFile(node)}
        >
          <span className="text-gray-300">{node.name}</span>
        </button>
      </li>
    );
  };

  return (
    <div className="p-2">
      <h2 className="text-xs font-semibold text-gray-400 mb-2 tracking-wider">EXPLORER</h2>
      <ul className="space-y-0.5 text-sm">
        {tree.map((n) => renderNode(n))}
      </ul>
    </div>
  );
}
