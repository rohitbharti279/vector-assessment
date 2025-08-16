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
  defaultWidth = 200,
  defaultHeight = 80,
}) => {
  const [state, setState] = useState(data || {});

  const handleChange = (key, value) => {
    setState(prev => ({ ...prev, [key]: value }));
  };

  // Calculate dynamic height based on controls
  const dynamicHeight = defaultHeight + (controls.length * 30);

  return (
    <div style={{
      width: defaultWidth, 
      height: dynamicHeight, 
      border: '1px solid black',
      padding: '8px',
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      backgroundColor: 'white',
      borderRadius: '4px'
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
      <div style={{ 
        fontWeight: 'bold',
        paddingBottom: '4px',
        borderBottom: '1px solid #eee'
      }}>
        {title}
      </div>

      {/* Node Description or Content */}
      <div style={{ fontSize: '0.8em', color: '#666' }}>
        {data?.description || `This is a ${title} node`}
      </div>

      {/* Node Controls - Always rendered but empty if no controls */}
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '4px',
        marginTop: 'auto' // Pushes controls to bottom
      }}>
        {controls.length > 0 ? (
          controls.map(control => (
            <div key={control.id}>
              <label style={{ fontSize: '0.8em' }}>
                {control.label}:
                {control.type === 'select' ? (
                  <select 
                    value={state[control.id] || control.defaultValue}
                    onChange={(e) => handleChange(control.id, e.target.value)}
                    style={{ width: '100%' }}
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
                    style={{ width: '100%' }}
                  />
                )}
              </label>
            </div>
          ))
        ) : (
          <div style={{ height: '20px' }}></div> // Spacer when no controls
        )}
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