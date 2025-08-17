// toolbar.js

import { DraggableNode } from "./draggableNode";
import {
  Database,
  Bot,
  TerminalSquare,
  FileText,
  Calculator,
  GitBranch,
  Globe,
  Timer,
  Merge,
} from "lucide-react";

const nodeDefinitions = [
  { type: "customInput", label: "Input", icon: <Database className="w-5 h-5 mb-1" /> },
  { type: "llm", label: "LLM", icon: <Bot className="w-5 h-5 mb-1" /> },
  { type: "customOutput", label: "Output", icon: <TerminalSquare className="w-5 h-5 mb-1" /> },
  { type: "text", label: "Text", icon: <FileText className="w-5 h-5 mb-1" /> },
  { type: "math", label: "Math", icon: <Calculator className="w-5 h-5 mb-1" /> },
  { type: "conditional", label: "Conditional", icon: <GitBranch className="w-5 h-5 mb-1" /> },
  { type: "api", label: "API", icon: <Globe className="w-5 h-5 mb-1" /> },
  { type: "timer", label: "Timer", icon: <Timer className="w-5 h-5 mb-1" /> },
  { type: "merge", label: "Merge", icon: <Merge className="w-5 h-5 mb-1" /> },
];

export const PipelineToolbar = () => {
  return (
    <div className="flex flex-wrap gap-3 border-b border-[#232946] p-4 shadow-sm bg-gradient-to-br from-[#10172a] to-[#1c2536]">
      {nodeDefinitions.map((node) => (
        <DraggableNode key={node.type} {...node} />
      ))}
    </div>
  );
};


// import { DraggableNode } from './draggableNode';

// export const PipelineToolbar = () => {
//     return (
//         <div className="flex flex-wrap gap-3 border-b border-[#232946] p-4 shadow-sm bg-gradient-to-br from-[#10172a] to-[#1c2536]">
//             <DraggableNode type='customInput' label='Input' />
//             <DraggableNode type='llm' label='LLM' />
//             <DraggableNode type='customOutput' label='Output' />
//             <DraggableNode type='text' label='Text' />
//             <DraggableNode type='math' label='Math' />
//             <DraggableNode type='conditional' label='Conditional' />
//             <DraggableNode type='api' label='API' />
//             <DraggableNode type='timer' label='Timer' />
//             <DraggableNode type='merge' label='Merge' />
//         </div>
//     );
// };
