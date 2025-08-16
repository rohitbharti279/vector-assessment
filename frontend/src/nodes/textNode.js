// src/nodes/textNode.js
import { BaseNode } from './BaseNode';

export const TextNode = ({ id, data }) => {

  return (
    <BaseNode
      id={id}
      data={data}
      title="Text"
      outputs={[{ id: 'output' }]}
      controls={[
        {
          id: 'text',
          label: 'Text',
          type: 'text',
          defaultValue: '{{input}}'
        }
      ]}
    />
  );
}
