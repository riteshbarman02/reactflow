// src/App.jsx
import { useState, useEffect } from 'react';
import ReactFlow, { ReactFlowProvider } from 'reactflow';
import 'reactflow/dist/style.css';
import CustomNodes from './CustomNodes';
import OutputNode from './OutputNode';
import OptimaNode from './OptimaNode';
import './App.css';

const nodeTypes = {
  customNode: CustomNodes,
  OutputNode: OutputNode,
  OptimaNode: OptimaNode,
};

export default function App() {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

  useEffect(() => {
    fetch('/diagram.json')
      .then((response) => response.json())
      .then((data) => {
        setNodes(data.nodes);
        setEdges(data.edges);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <ReactFlowProvider>
      <div style={{ width: '100vw', height: '100vh' }}>
        <ReactFlow nodes={nodes} edges={edges} nodeTypes={nodeTypes} style={{ height: '100vh' }} />
      </div>
    </ReactFlowProvider>
  );
}
