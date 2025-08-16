// toolbar.js

import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {
    return (
        <div className="flex flex-wrap gap-3 border-b border-[#232946] p-4 shadow-sm bg-gradient-to-br from-[#10172a] to-[#1c2536]">
            <DraggableNode type='customInput' label='Input' />
            <DraggableNode type='llm' label='LLM' />
            <DraggableNode type='customOutput' label='Output' />
            <DraggableNode type='text' label='Text' />
            <DraggableNode type='math' label='Math' />
            <DraggableNode type='conditional' label='Conditional' />
            <DraggableNode type='api' label='API' />
            <DraggableNode type='timer' label='Timer' />
            <DraggableNode type='merge' label='Merge' />
        </div>
    );
};
