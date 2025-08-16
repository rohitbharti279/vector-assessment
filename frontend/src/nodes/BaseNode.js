// BaseNode.js
import { Handle, Position } from 'reactflow';
import { useState } from 'react';

export const BaseNode = ({
  id,
  data,
  title,
  inputs = [],
  outputs = [],
  controls = [],
  defaultWidth = 200,
  defaultHeight = 80,
}) => {
  const [state, setState] = useState(data || {});

  const handleChange = (key, value) => {
    setState(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div style={{
      width: defaultWidth, 
      height: defaultHeight, 
      border: '1px solid black',
      padding: '8px',
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    }}>
      {/* Input Handles */}
      {inputs.map((input, index) => (
        <Handle
          key={`${id}-${input.id}`}
          type="target"
          position={Position.Left}
          id={`${id}-${input.id}`}
          style={{ top: `${((index + 1) * 100) / (inputs.length + 1)}%` }}
        />
      ))}

      {/* Node Header */}
      <div style={{ fontWeight: 'bold' }}>{title}</div>

      {/* Node Controls */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        {controls.map(control => (
          <div key={control.id}>
            <label>
              {control.label}:
              {control.type === 'select' ? (
                <select 
                  value={state[control.id] || control.defaultValue}
                  onChange={(e) => handleChange(control.id, e.target.value)}
                >
                  {control.options.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type={control.type || 'text'}
                  value={state[control.id] || control.defaultValue || ''}
                  onChange={(e) => handleChange(control.id, e.target.value)}
                />
              )}
            </label>
          </div>
        ))}
      </div>

      {/* Output Handles */}
      {outputs.map((output, index) => (
        <Handle
          key={`${id}-${output.id}`}
          type="source"
          position={Position.Right}
          id={`${id}-${output.id}`}
          style={{ top: `${((index + 1) * 100) / (outputs.length + 1)}%` }}
        />
      ))}
    </div>
  );
};