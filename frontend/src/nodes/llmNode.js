// src/nodes/LLMNode.js
import { BaseNode } from './BaseNode';

export const LLMNode = ({ id, data }) => (
  <BaseNode
    id={id}
    data={{
      ...data,
      subtitle: "Language Model",
      description: "Processes text inputs and generates responses"
    }}
    title="LLM"
    inputs={[
      { id: 'system', label: 'System' },
      { id: 'prompt', label: 'Prompt' }
    ]}
    outputs={[
      { id: 'response', label: 'Response' }
    ]}
    controls={[
      {
        id: 'model',
        label: 'Model',
        type: 'select',
        defaultValue: 'gpt-3.5',
        options: [
          { value: 'gpt-3.5', label: 'GPT-3.5' },
          { value: 'gpt-4', label: 'GPT-4' },
          { value: 'claude', label: 'Claude' }
        ]
      },
      {
        id: 'temperature',
        label: 'Temperature',
        type: 'range',
        defaultValue: 0.7,
        min: 0,
        max: 1,
        step: 0.1
      }
    ]}
  />
);