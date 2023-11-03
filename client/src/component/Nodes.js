
 const  sites = [
    {
            id: '1',
            valueX: -24.6,
            valueY: 31.15,
            amount: 76,
          },
          {
            id: '2',
            valueX: 29.97,
            valueY: -5.91,
            amount: 71,
          },
          {
            id: '3',
            valueX: 43.93,
            valueY: -35.78,
            amount: 53,
          },
  ];
  export const initialNodes = sites.map((item) => {
    return {
      id: item.id,
      type: 'customNode',
      data: {
        label: `S:${item.id}`,
      },
      position: { x: (item.valueX +50)*5, y: (item.valueY +50)*5 },
    };
  });
  console.log(initialNodes)