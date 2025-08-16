// src/nodes/MergeNode.js
import { BaseNode } from './BaseNode';

export const MergeNode = ({ id, data }) => (
  <BaseNode
    id={id}
    data={data}
    title="Merge"
    inputs={[
      { id: 'input1' },
      { id: 'input2' },
      { id: 'input3' }
    ]}
    outputs={[
      { id: 'merged' }
    ]}
    controls={[
      {
        id: 'strategy',
        label: 'Merge Strategy',
        type: 'select',
        defaultValue: 'concat',
        options: [
          { value: 'concat', label: 'Concatenate' },
          { value: 'deep', label: 'Deep Merge' },
          { value: 'shallow', label: 'Shallow Merge' }
        ]
      }
    ]}
  />
);