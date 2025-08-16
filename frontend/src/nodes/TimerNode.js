// src/nodes/TimerNode.js
import { BaseNode } from './BaseNode';

export const TimerNode = ({ id, data }) => (
  <BaseNode
    id={id}
    data={data}
    title="Timer"
    outputs={[
      { id: 'trigger' }
    ]}
    controls={[
      {
        id: 'interval',
        label: 'Interval (ms)',
        type: 'number',
        defaultValue: 1000
      }
    ]}
  />
);