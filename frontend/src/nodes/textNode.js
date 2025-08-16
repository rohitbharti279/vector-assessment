// src/nodes/textNode.js

import { useState, useRef, useEffect } from 'react';
import { Handle, Position } from 'reactflow';
import { useStore } from '../store';

// Helper to extract unique valid JS variable names in double curly brackets
const extractVariables = (text) => {
  const regex = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;
  const vars = new Set();
  let match;
  while ((match = regex.exec(text))) {
    vars.add(match[1]);
  }
  return Array.from(vars);
};

export const TextNode = ({ id, data }) => {
  const [text, setText] = useState(data?.text || '');
  const [variables, setVariables] = useState(() => extractVariables(data?.text || ''));
  const [dimensions, setDimensions] = useState({ width: 240, height: 80 });
  const textareaRef = useRef(null);
  const updateNodeField = useStore((state) => state.updateNodeField);

  // Update variables and node field when text changes
  useEffect(() => {
    setVariables(extractVariables(text));
    updateNodeField(id, 'text', text);
  }, [text, id, updateNodeField]);

  // Auto-resize logic
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      const scrollHeight = textareaRef.current.scrollHeight;
      const lines = text.split('\n').length;
      // Estimate width: base + extra per long line
      const maxLineLen = Math.max(...text.split('\n').map(l => l.length), 20);
      const width = Math.min(600, Math.max(240, maxLineLen * 9 + 40));
      const height = Math.min(400, Math.max(80, scrollHeight + 40));
      setDimensions({ width, height });
    }
  }, [text]);

  return (
    <div
      className="relative flex flex-col rounded-xl shadow-lg border border-[#3b82f6] bg-gradient-to-br from-[#181f2a] to-[#232946] text-white px-4 py-3 min-w-[220px]"
      style={{ width: dimensions.width, minHeight: dimensions.height }}
    >
      {/* Dynamic Input Handles for variables */}
      {variables.map((variable, idx) => (
        <Handle
          key={`${id}-var-${variable}`}
          type="target"
          position={Position.Left}
          id={`${id}-${variable}`}
          style={{
            top: `${((idx + 1) * 100) / (variables.length + 1)}%`,
            background: '#facc15',
            border: '2px solid #fff',
            width: 14,
            height: 14
          }}
        />
      ))}

      {/* Node Header */}
      <div className="font-bold text-base mb-1 tracking-wide text-blue-400 flex items-center gap-2 border-b border-blue-500 pb-1">
        Text
      </div>
      <div className="text-xs text-blue-100 mb-1">A node for static or templated text. Use <span className='text-yellow-300'>{'{{variable}}'}</span> to add variables.</div>

      {/* Textarea Control */}
      <div className="flex flex-col gap-2 mt-1">
        <label className="text-xs text-blue-200 mb-0.5 font-medium">Text</label>
        <textarea
          ref={textareaRef}
          className="rounded-md bg-[#232946] border border-blue-400 text-white px-2 py-1 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          style={{ minHeight: 40, width: '100%', fontFamily: 'inherit', lineHeight: 1.5 }}
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Type text here, use {{variable}} for inputs"
        />
      </div>

      {/* Output Handle */}
      <Handle
        key={`${id}-output`}
        type="source"
        position={Position.Right}
        id={`${id}-output`}
        style={{
          top: '50%',
          background: '#3b82f6',
          border: '2px solid #fff',
          width: 12,
          height: 12
        }}
      />
    </div>
  );
}
