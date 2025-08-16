// src/nodes/MathNode.js
import { BaseNode } from './BaseNode';

export const MathNode = ({ id, data }) => (
  <BaseNode
    id={id}
    data={data}
    title="Math Operation"
    inputs={[
      { id: 'a' },
      { id: 'b' }
    ]}
    outputs={[
      { id: 'result' }
    ]}
    controls={[
      {
        id: 'operation',
        label: 'Operation',
        type: 'select',
        defaultValue: 'add',
        options: [
          { value: 'add', label: 'Add' },
          { value: 'subtract', label: 'Subtract' },
          { value: 'multiply', label: 'Multiply' },
          { value: 'divide', label: 'Divide' }
        ]
      }
    ]}
  />
);