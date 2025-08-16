// src/nodes/ConditionalNode.js
import { BaseNode } from './BaseNode';

export const ConditionalNode = ({ id, data }) => (
  <BaseNode
    id={id}
    data={data}
    title="Conditional"
    inputs={[
      { id: 'condition' },
      { id: 'ifTrue' },
      { id: 'ifFalse' }
    ]}
    outputs={[
      { id: 'output' }
    ]}
  />
);