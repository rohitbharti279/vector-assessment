// llmNode.js

import { BaseNode } from './BaseNode';

export const LLMNode = ({ id, data }) => {

  return (
    <BaseNode
      id={id}
      data={data}
      title="LLM"
      inputs={[
        { id: 'system' },
        { id: 'prompt' }
      ]}
      outputs={[
        { id: 'response' }
      ]}
    />
  );
}
