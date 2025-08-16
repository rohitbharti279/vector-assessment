// src/nodes/ApiNode.js
import { BaseNode } from './BaseNode';

export const ApiNode = ({ id, data }) => (
  <BaseNode
    id={id}
    data={data}
    title="API Call"
    inputs={[
      { id: 'params' }
    ]}
    outputs={[
      { id: 'response' }
    ]}
    controls={[
      {
        id: 'url',
        label: 'URL',
        type: 'text',
        defaultValue: 'https://api.example.com/endpoint'
      },
      {
        id: 'method',
        label: 'Method',
        type: 'select',
        defaultValue: 'GET',
        options: [
          { value: 'GET', label: 'GET' },
          { value: 'POST', label: 'POST' },
          { value: 'PUT', label: 'PUT' },
          { value: 'DELETE', label: 'DELETE' }
        ]
      }
    ]}
  />
);