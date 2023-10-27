
export default function ArrangementOfVehicles(vehicles) {
    vehicles.sort((a, b) => b.ability - a.ability);
    return vehicles;

}

const vehicles = [
    {
      site: '2',
      valueX: -22.12,
      valueY: 11.49,
      id: 11,
      ability: 10700,
      distance: 480
    },
    {
      site: '2',
      valueX: -22.12,
      valueY: 11.49,
      id: 12,
      ability: 19,
      distance: 480
    },
    {
      site: '2',
      valueX: -22.12,
      valueY: 11.49,
      id: 13,
      ability: 19,
      distance: 480
    },
    {
      site: '2',
      valueX: -22.12,
      valueY: 11.49,
      id: 14,
      ability: 12360,
      distance: 480
    },
  ];


  const sortedData = ArrangementOfVehicles(vehicles);
 console.log("====1====>",vehicles)
  console.log("====2====>",sortedData);