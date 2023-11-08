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
        // data:{

        label: `
        vehicle ${sourceNode?.vehicleId} , ${sourceNode.newVehicle ?
          ' ability :' + sourceNode.newVehicle?.ability +","+ " distance :" +sourceNode.newVehicle?.distance.toFixed(1)

          :
          ' ability :' + sourceNode.ability +","+ " distance :" +sourceNode.distance.toFixed(1) 


        }
        
        `,
        animated: true,
        // style: { stroke: "blue" },
        markerEnd: {
          type: MarkerType.ArrowClosed,
          width: 10,
          height: 10,
          color: 'black',
        },
        style: {
          strokeWidth: 4,
          stroke: 'green',
        },
      };
      edges.push(edge);
    }
  }
  return edges;
};

function Flow({Allsites , path }) {
  // console.log("data,",path?.distanceTotalALLvehicles)
  // console.log(distance)

  const sites = Allsites?.map((item) => {
    return {
      id: item.site ? item.site : item.id?.toString(),

      data: {
        label: `S:${item.site ? item.site : item.id?.toString()}`,
      },
      position: { x: item.valueX *20, y: item.valueY*20  },
    };
  });

  const Edges = createEdges(path?.data);
  console.log(Edges)

  const [distance, setdistance] = useState(0);

  const [start, setstart] = useState(false);
  const [nodes, setNodes] = useNodesState(sites);
  const [edges, setEdges] = useEdgesState();

  const Handlestart = () => {
    if (!start) {
      setstart(true);
      setEdges(Edges);
      setdistance(path?.distanceTotalALLvehicles)
    } else {
      setstart(false);
      setEdges([]);
      setdistance(0)

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
          flexFlow:"column",
          alignItems: "center",
          padding:"10px"
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
             <div style={{fontFamily:"inherit" , fontSize:"28px"}}>
        Distance:
         <span style={{fontWeight:"bold"}} >{distance}</span>

        </div>


        </div>

        
 
      <ReactFlow  nodes={nodes} edges={edges}>
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}

export default Flow;