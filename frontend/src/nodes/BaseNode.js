// src/nodes/BaseNode.js
import { Handle, Position } from 'reactflow';
import { useState } from 'react';

export const BaseNode = ({
  id,
  data,
  title,
  inputs = [],
  outputs = [],
  controls = [],
  defaultWidth = 240,
}) => {
  const [state, setState] = useState(data || {});

  const handleChange = (key, value) => {
    setState(prev => ({ ...prev, [key]: value }));
  };

  const defaultHeight = 80;
  const dynamicHeight = defaultHeight + (controls.length * 36);

  return (
    <div
      className="relative flex flex-col rounded-xl shadow-lg border border-[#3b82f6] bg-gradient-to-br from-[#181f2a] to-[#232946] text-white px-4 py-3 min-w-[220px]"
      style={{ width: defaultWidth, minHeight: dynamicHeight }}
    >
      {/* Input Handles */}
      {inputs.map((input, index) => (
        <Handle
          key={`${id}-${input.id}`}
          type="target"
          position={Position.Left}
          id={`${id}-${input.id}`}
          style={{ top: `${((index + 1) * 100) / (inputs.length + 1)}%`, background: '#3b82f6', border: '2px solid #fff', width: 12, height: 12 }}
        />
      ))}

      {/* Node Header */}
      <div className="font-bold text-base mb-1 tracking-wide text-blue-400 flex items-center gap-2 border-b border-blue-500 pb-1">
        {title}
      </div>
      {data?.subtitle && (
        <div className="text-xs text-blue-200 mb-1">{data.subtitle}</div>
      )}
      <div className="text-xs text-blue-100 mb-1">{data?.description || `This is a ${title} node`}</div>

      {/* Node Controls */}
      <div className="flex flex-col gap-2 mt-1">
        {controls.length > 0 ? (
          controls.map(control => (
            control.type === 'checkbox' ? (
              <div key={control.id} className="flex flex-row items-start gap-2">
                <input
                  type="checkbox"
                  checked={!!state[control.id]}
                  onChange={e => handleChange(control.id, e.target.checked)}
                  className="rounded border-blue-400 text-blue-500 focus:ring-blue-500 mt-0.5"
                />
                <label className="text-xs text-blue-200 font-medium select-none cursor-pointer">
                  {control.label}
                </label>
              </div>
            ) : (
              <div key={control.id} className="flex flex-col">
                <label className="text-xs text-blue-200 mb-0.5 font-medium">
                  {control.label}
                </label>
                {control.type === 'select' ? (
                  <select
                    className="rounded-md bg-[#232946] border border-blue-400 text-white px-2 py-1 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={state[control.id] || control.defaultValue}
                    onChange={e => handleChange(control.id, e.target.value)}
                  >
                    {control.options.map(option => (
                      <option key={option.value} value={option.value} className="bg-[#232946] text-white">
                        {option.label}
                      </option>
                    ))}
                  </select>
                ) : control.type === 'range' ? (
                  <div className="flex items-center">
                    <input
                      type="range"
                      min={control.min}
                      max={control.max}
                      step={control.step}
                      value={state[control.id] || control.defaultValue}
                      onChange={e => handleChange(control.id, e.target.value)}
                      className="w-full accent-blue-500"
                    />
                    <span className="text-xs text-blue-200 ml-2">
                      {state[control.id] || control.defaultValue}
                    </span>
                  </div>
                ) : (
                  <input
                    type={control.type || 'text'}
                    value={state[control.id] || control.defaultValue || ''}
                    onChange={e => handleChange(control.id, e.target.value)}
                    className="rounded-md bg-[#232946] border border-blue-400 text-white px-2 py-1 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                )}
              </div>
            )
          ))
        ) : (
          <div className="h-5"></div>
        )}
      </div>

      {/* Output Handles */}
      {outputs.map((output, index) => (
        <Handle
          key={`${id}-${output.id}`}
          type="source"
          position={Position.Right}
          id={`${id}-${output.id}`}
          style={{ top: `${((index + 1) * 100) / (outputs.length + 1)}%`, background: '#3b82f6', border: '2px solid #fff', width: 12, height: 12 }}
        />
      ))}
    </div>
  );
};