import Terminal from "./Terminal";

type Tab = { id: string; title: string };

type EditorProps = {
  tabs: Tab[];
  activeTabId: string;
  onSelectTab: (id: string) => void;
  onCloseTab: (id: string) => void;
};

export default function Editor({ tabs, activeTabId, onSelectTab, onCloseTab }: EditorProps) {
  const renderContent = () => {
    if (!activeTabId) {
      return (
        <div className="p-6 text-gray-400">
          <h1 className="text-2xl font-bold text-blue-400">Welcome to My Portfolio</h1>
          <p className="mt-2">Click on a file in the sidebar to open it here.</p>
        </div>
      );
    }

    // Placeholder content mapping by id (simple for now)
    if (activeTabId === "readme") {
      return (
        <div className="p-6 text-gray-200">
          <h2 className="text-xl font-semibold mb-2">README.md</h2>
          <p className="text-gray-300">Hi, I’m Bhavya — welcome to my VS Code-style portfolio.</p>
        </div>
      );
    }

    if (activeTabId.startsWith("about/")) {
      return (
        <div className="p-6 text-gray-200">
          <h2 className="text-xl font-semibold mb-2">About</h2>
          <p className="text-gray-300">A short intro and skills overview coming soon.</p>
        </div>
      );
    }

    if (activeTabId.startsWith("projects/")) {
      return (
        <div className="p-6 text-gray-200">
          <h2 className="text-xl font-semibold mb-2">Projects</h2>
          <p className="text-gray-300">A curated list of projects will appear here.</p>
        </div>
      );
    }

    if (activeTabId === "contact") {
      return (
        <div className="p-6 text-gray-200">
          <h2 className="text-xl font-semibold mb-2">Contact</h2>
          <p className="text-gray-300">Reach me at: you@example.com</p>
        </div>
      );
    }

    return (
      <div className="p-6 text-gray-400">No content for this tab yet.</div>
    );
  };

  return (
    <div className="flex flex-col h-full min-h-0">
      {/* Tabs bar */}
      <div className="flex items-center gap-1 border-b border-gray-700 bg-gray-800/60 px-2 h-9 overflow-x-auto">
        {tabs.map((tab) => {
          const active = tab.id === activeTabId;
          return (
            <div
              key={tab.id}
              className={`group flex items-center h-7 rounded-t px-2 text-sm cursor-pointer select-none ${
                active ? "bg-gray-900 text-gray-100 border-x border-t border-gray-700" : "text-gray-300 hover:bg-gray-700/50"
              }`}
            >
              <button onClick={() => onSelectTab(tab.id)} className="pr-1">
                {tab.title}
              </button>
              <button
                onClick={() => onCloseTab(tab.id)}
                className={`ml-1 rounded px-1 text-gray-400 hover:bg-gray-600 hover:text-white ${
                  active ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                }`}
                aria-label={`Close ${tab.title}`}
              >
                ×
              </button>
            </div>
          );
        })}
      </div>

      {/* Editor main content */}
      <div className="flex-1 overflow-auto min-h-0">{renderContent()}</div>

      {/* Terminal inside editor */}
      <div className="border-t border-gray-700 bg-gray-800 p-2">
        <Terminal />
      </div>
    </div>
  );
}
