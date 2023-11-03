// [
//   {
//     id: "e0-67",
//     source: "0",
//     markerEnd: {
//       type: MarkerType.ArrowClosed,
//     },
//     target: "1",
//     animated: true,
//     label: "vehicle 6",
//     style: { stroke: "blue" },
//   },
// ]

const createEdges = (data) => {
  const edges = [];
  
  for (let i = 1; i < data.length; i++) {
    const sourceNode = data[i - 1];
    const targetNode = data[i];
    console.log("sourceNode",sourceNode)
    console.log("targetNode",targetNode)

    

    if (!targetNode.site) {
      const edgeId = `e${ sourceNode.site ? sourceNode.site : sourceNode.id }-${sourceNode.site ? sourceNode.site : sourceNode.id}`;

      const edge = {
        id: edgeId,
        source:  `${sourceNode.site ? sourceNode.site :sourceNode.id.toString() }  `,
        target: `${targetNode.site ? targetNode.site :targetNode.id.toString() }  `,
        label: `vehicle ${sourceNode.vehicleId}`,
        animated: true,
        style: { stroke: "blue" },
        markerEnd: {
          type: "MarkerType.ArrowClosed",
        },
      };
      edges.push(edge);
    }}
  return edges;
};

const data = [{
  "site": "1",
  "valueX": 23.67,
  "valueY": -2.27,
  "id": 6,
  "ability": 1340,
  "distance": 480,
  "vehicleId": 6
},
{
  "id": 2,
  "valueX": 27.08,
  "valueY": -1.05,
  "amount": 87,
  "vehicleId": 6
},
{
  "id": 3,
  "valueX": 29.97,
  "valueY": -5.91,
  "amount": 71,
  "vehicleId": 6
},
{"site": "10",
"valueX": 23.67,
"valueY": -2.27,
"id": 20,
"ability": 1340,
"distancvehicleId": 6
},
{
  "id": 20,
  "valueX": 41.88,
  "valueY": -16.74,
  "amount": 39,
  "vehicleId": 6
},
{
  "id": 30,
  "valueX": 27.65,
  "valueY": 24.46,
  "amount": 33,
  "vehicleId": 6
}] 


const edges = createEdges(data);
console.log(edges);
