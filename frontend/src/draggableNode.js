// draggableNode.js

export const DraggableNode = ({ type, label }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType }
    event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
    event.dataTransfer.effectAllowed = 'move';
  };

  // Gradient color mapping for different node types
  const nodeGradients = {
    customInput: 'bg-gradient-to-br from-blue-500 to-blue-700',
    llm: 'bg-gradient-to-br from-purple-500 to-purple-700',
    customOutput: 'bg-gradient-to-br from-green-500 to-green-700',
    text: 'bg-gradient-to-br from-yellow-400 to-yellow-600',
    math: 'bg-gradient-to-br from-red-500 to-red-700',
    conditional: 'bg-gradient-to-br from-pink-500 to-pink-700',
    api: 'bg-gradient-to-br from-indigo-500 to-indigo-700',
    timer: 'bg-gradient-to-br from-cyan-500 to-cyan-700',
    merge: 'bg-gradient-to-br from-orange-500 to-orange-700'
  };

  return (
    <div
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => event.target.classList.remove('scale-95')}
      draggable
      className={`
        ${nodeGradients[type] || 'bg-gradient-to-br from-gray-500 to-gray-700'}
        cursor-grab active:cursor-grabbing active:scale-95
        w-24 h-16 p-2
        flex flex-col items-center justify-center
        rounded-lg shadow-md
        text-white text-sm font-medium
        transition-all duration-100
        hover:shadow-lg hover:-translate-y-0.5
        border border-white/10
      `}
    >
      {label}
    </div>
  );
};
