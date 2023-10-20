import handelread from "../readfile.js";


const handelvehicle = (vehicle) => {
  const [site, valueX, valueY, id, ability, distance] = vehicle.split("|");

  return {
    site: site,
    valueX: parseFloat(valueX),
    valueY: parseFloat(valueY),
    id: parseInt(id),
    ability: parseFloat(ability),
    distance: parseFloat(distance),
  };
};
const handelSite = (site) => {
  const [id, valueX, valueY, amount] = site.split("|");
  return {
    id: parseInt(id),
    valueX: parseFloat(valueX),
    valueY: parseFloat(valueY),
    amount: parseFloat(amount),
  };
};
const handelCenter = (center) => {
  const [id, valueX, valueY] = center.split("|");
  return {
    id: parseInt(id),
    valueX: parseFloat(valueX),
    valueY: parseFloat(valueY),
  };
};

export const handlSlicedata = (Data) => {
  const centralRegex = /Le bassin central([\s\S]*)Les vehicles/g;
  const vehicleRegex = /Les vehicles([\s\S]*?)Les sites de collecte/g;
  const siteRegex = /Les sites de collecte([\s\S]*)/;

  const centralMatch = centralRegex.exec(Data);
  const vehicleMatch = vehicleRegex.exec(Data);
  const siteMatch = siteRegex.exec(Data);

  if (centralMatch && vehicleMatch && siteMatch) {
    const centralText = centralMatch[1].trim();
    const vehiclesText = vehicleMatch[1].trim();
    const sitesText = siteMatch[1].trim();

    const central = centralText
      .split("\n")
      .map(handelCenter)
      .filter((center) => center.id !== "");
    const vehicles = vehiclesText
      .split("\n")
      .map(handelvehicle)
      .filter((vehicle) => vehicle.id !== "");
    const sites = sitesText
      .split("\n")
      .map(handelSite)
      .filter((site) => site.id !== "");
      return {central:central,vehicles:vehicles,sites:sites }
  } else {
    return { central:[],vehicles:[],sites:[] };
  }
};

export const getData = async () => {
  handelread()
  .then(data => {
    handlSlicedata(data)
     
  })
  .catch(err => {
    console.error('Error:', err);
  });

};