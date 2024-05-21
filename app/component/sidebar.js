'use client'

import React from "react";

export default function Sidebar({
  nodeName,
  setNodeName,
  selectedNode,
  setSelectedElements,
  onSave,
  onRestore,
}) {
  // Handle input change for node name
  const handleInputChange = (event) => {
    setNodeName(event.target.value);
  };

  // Handle drag start event for creating new nodes
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <aside className="border-r-2 border-blue-200 p-4 text-sm bg-slate-500 w-64 h-screen text-black">
      {selectedNode ? (
        // Settings panel for the selected node
        <div>
          <h3 className="text-xl mb-2 text-white">Update Node</h3>
          <label className="block mb-2 text-sm font-medium text-white">
            Node Name:
          </label>
          <input
            type="text"
            className="block w-full pt-2 px-3 pb-3 text-gray-700 border border-blue-300 rounded-lg bg-white focus:outline-none focus:border-blue-500"
            value={nodeName}
            onChange={handleInputChange}
          />
          <button
            className="mt-4 bg-blue-500 text-white rounded p-2 hover:bg-blue-600"
            onClick={() => setSelectedElements([])}
          >
            Go Back
          </button>
        </div>
      ) : (
        // Node panel
        <>
          <h3 className="text-xl mb-4 text-white">Add Nodes Panel</h3>
          <div
            className="bg-black p-3 border-2  rounded cursor-move flex justify-center items-center text-white hover:bg-white hover:border-black hover:text-black transition-colors duration-200"
            onDragStart={(event) => onDragStart(event, "textnode")}
            draggable
          >
            Message Node
          </div>
        </>
      )}
      <div className="mt-4">
        <button
        className="bg-black p-3 border-2 w-[222px]  rounded cursor-move flex justify-center items-center text-white hover:bg-white hover:border-black hover:text-black transition-colors duration-200"

        onClick={onSave}
        >
          Save Flow
        </button>
        <button
        className="bg-black p-3 border-2  w-[222px] mt-4 rounded cursor-move flex justify-center items-center text-white hover:bg-white hover:border-black hover:text-black transition-colors duration-200"

        onClick={onRestore}
        >
          Restore Flow
        </button>
      </div>
    </aside>
  );
}
