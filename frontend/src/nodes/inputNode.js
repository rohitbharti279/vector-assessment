// inputNode.js

import { useState } from 'react';
import { Handle, Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const InputNode = ({ id, data }) => {

  return (
    <BaseNode
      id={id}
      data={data}
      title="Input"
      outputs={[{ id: 'value' }]}
      controls={[
        {
          id: 'inputName',
          label: 'Name',
          type: 'text',
          defaultValue: id.replace('customInput-', 'input_')
        },
        {
          id: 'inputType',
          label: 'Type',
          type: 'select',
          defaultValue: 'Text',
          options: [
            { value: 'Text', label: 'Text' },
            { value: 'File', label: 'File' }
          ]
        }
      ]}
    />
  );
}
