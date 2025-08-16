from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from typing import List, Dict

app = FastAPI()

# Allow CORS for frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def is_dag(nodes: List[Dict], edges: List[Dict]) -> bool:
    # Build adjacency list and in-degree count
    adj = {node['id']: [] for node in nodes}
    indegree = {node['id']: 0 for node in nodes}
    for edge in edges:
        source = edge.get('source')
        target = edge.get('target')
        if source in adj and target in adj:
            adj[source].append(target)
            indegree[target] += 1

    # Kahn's algorithm for topological sort
    queue = [n for n in adj if indegree[n] == 0]
    visited = 0
    while queue:
        node = queue.pop(0)
        visited += 1
        for neighbor in adj[node]:
            indegree[neighbor] -= 1
            if indegree[neighbor] == 0:
                queue.append(neighbor)
    return visited == len(nodes)

@app.post('/pipelines/parse')
async def parse_pipeline(request: Request):
    data = await request.json()
    nodes = data.get('nodes', [])
    edges = data.get('edges', [])
    num_nodes = len(nodes)
    num_edges = len(edges)
    dag = is_dag(nodes, edges)
    return {'num_nodes': num_nodes, 'num_edges': num_edges, 'is_dag': dag}

@app.get('/')
def read_root():
    return {'Ping': 'Pong'}