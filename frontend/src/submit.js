// submit.js

import { useStore } from './store';

export const SubmitButton = () => {
    const nodes = useStore(state => state.nodes);
    const edges = useStore(state => state.edges);

    const handleSubmit = async () => {
        try {
            const response = await fetch('http://localhost:8000/pipelines/parse', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ nodes, edges }),
            });
            const data = await response.json();
            alert(
                `Pipeline Analysis:\n\n` +
                `Number of Nodes: ${data.num_nodes}\n` +
                `Number of Edges: ${data.num_edges}\n` +
                `Is DAG: ${data.is_dag ? 'Yes' : 'No'}`
            );
        } catch (err) {
            alert('Failed to submit pipeline: ' + err);
        }
    };

    return (
        <div className="flex justify-center items-center">
            <button
                type="button"
                onClick={handleSubmit}
                className="
                    px-8 py-3
                    bg-gradient-to-br from-[#3b82f6] to-[#2563eb]
                    hover:from-[#2563eb] hover:to-[#1d4ed8]
                    text-white font-bold
                    rounded-lg shadow-lg
                    transition-all duration-200
                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                "
            >
                Run Pipeline / Submit
            </button>
            </div>
    );
}
