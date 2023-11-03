import React, { useState, useEffect, useCallback } from "react";
import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  Background,
  Controls,
  MarkerType,
  Handle,
} from "reactflow";
import "reactflow/dist/style.css";
import CustomNode from "./CustomNode";
import axios from "axios";

const nodeTypes = {
  customNode: CustomNode,
};










const createEdges = (data) => {
  const edges = [];
  for (let i = 1; i < data?.length; i++) {
    const sourceNode = data[i - 1];
    const targetNode = data[i];
    if (!targetNode.site) {
      const edgeId = `e${sourceNode.site ? sourceNode.site : sourceNode.id}-${targetNode.site ? targetNode.site : targetNode.id
      }`;
      const edge = {
        id: edgeId,
        source: `${
          sourceNode.site ? sourceNode.site : sourceNode.id.toString()
        }`,
        target:`${
          targetNode.site ? targetNode.site : targetNode.id.toString()
        }`,
        label: `vehicle ${sourceNode?.vehicleId}`,
        animated: true,
        // style: { stroke: "blue" },
        markerEnd: {
          type: MarkerType.ArrowClosed,
          width: 20,
          height: 20,
          color: 'black',
        },
        // label: 'marker size and color',
        style: {
          strokeWidth: 2,
          stroke: 'green',
        },
      };
      console.log(edge)
      edges.push(edge);
    }
  }
  return edges;
};

function Flow({Allsites , path}) {
  console.log(path?.data)

  const sites = Allsites?.map((item) => {
    return {
      id: item.site ? item.site : item.id?.toString(),

      data: {
        label: `S:${item.site ? item.site : item.id?.toString()}`,
      },
      position: { x: item.valueX * 40, y: item.valueY * 40 },
    };
  });

  const Edges = createEdges(path?.data);
  console.log(Edges)

  const [start, setstart] = useState(false);
  const [nodes, setNodes] = useNodesState(sites);
  const [edges, setEdges] = useEdgesState();

  const Handlestart = () => {
    if (!start) {
      setstart(true);
      setEdges(Edges);
    } else {
      setstart(false);
      setEdges([]);
    }
  };
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <div
        style={{
          Background: " rgba(255,255,255,0.5)",
          zIndex: "1000",

          backdropFilter: " blur(10px)",
          border: "1px solid rgba(255,255,255,0.25)",
          position: "fixed",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={Handlestart}
      >
        {start ? (
          <h2
            style={{
              width: "30%",
              backgroundColor: "red",
              textAlign: "center",
              padding: "10px",
              borderRadius: "25px",
              fontFamily: "",
              color: "white",
            }}
          >
            Close
          </h2>
        ) : (
          <h2
            style={{
              width: "30%",
              backgroundColor: "green",
              textAlign: "center",
              padding: "10px",
              borderRadius: "25px",
              fontFamily: "",
              color: "white",
            }}
          >
            Start
          </h2>
        )}
      </div>
      <ReactFlow  nodes={nodes} edges={edges}>
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}

export default Flow;
