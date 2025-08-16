// src/nodes/outputNode.js
import { BaseNode } from './BaseNode';

export const OutputNode = ({ id, data }) => {

  return (
    <BaseNode
      id={id}
      data={data}
      title="Output"
      inputs={[{ id: 'value' }]}
      controls={[
        {
          id: 'outputName',
          label: 'Name',
          type: 'text',
          defaultValue: id.replace('customOutput-', 'output_')
        },
        {
          id: 'outputType',
          label: 'Type',
          type: 'select',
          defaultValue: 'Text',
          options: [
            { value: 'Text', label: 'Text' },
            { value: 'Image', label: 'Image' }
          ]
        }
      ]}
    />
  );
}
