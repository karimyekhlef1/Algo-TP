import findSiteClosest from "./findSiteClosest.js";
import { calculateDistance } from "./calculateDistance.js";
import CheckBackToCenter from "./CheckBackToCenter.js";

const center = { id: 0, valueX: 30.54, valueY: 38.81 };

export default function TransportingVehicle(vehicle, sites, sitesVisited) {
    // console.log("vehicle==>",vehicle)
  const vehicleID = vehicle.id;
  const path = [];

  let newVehicle = vehicle;
  let updatedSitesVisited =sitesVisited

  do {
    const SiteClosest = findSiteClosest(newVehicle, sites);
    // console.log(SiteClosest);

    if (
      SiteClosest &&
      CheckBackToCenter(newVehicle, SiteClosest, center) &&
      newVehicle.ability >= SiteClosest.amount
    ) {
    //   console.log("all true");
      const Distance = calculateDistance(newVehicle, SiteClosest);
      const newAbility = newVehicle.ability - SiteClosest.amount;
      const updatedSitesVisited = [...sitesVisited, SiteClosest];
      const newDistance = newVehicle.distance - Distance;

      // Update newVehicle with the changes
      newVehicle = {
        ...newVehicle,
        distance: newDistance,
        ability: newAbility,
        valueX: SiteClosest.valueX,
        valueY: SiteClosest.valueY,
        site: SiteClosest.id,
      };

      sitesVisited.push(SiteClosest);
      path.push(SiteClosest);

      // Remove the visited site from the sites array
      sites = sites.filter((site) => site.id !== SiteClosest.id);
    //   console.log("sites==================>", sites, sites.length);
    } else {
      if (calculateDistance(newVehicle, center) < newVehicle.distance) {
        const Distance = calculateDistance(newVehicle, center);

        let updatedSitesVisited = [...sitesVisited, SiteClosest];
        const newDistance = newVehicle.distance - Distance;

        // Update newVehicle with the changes
        newVehicle = {
          ...newVehicle,
          distance: newDistance,
          valueX: center.valueX,
          valueY: center.valueY,
          site: center.id,
        };
      }

      break;
    }
  } while (
    sites.length > 0 &&
    CheckBackToCenter(newVehicle, findSiteClosest(newVehicle, sites), center)
  );

  return { 
    newVehicle,
     path: path,
      leng: path.length,
       sites ,
       sitesVisited};
}
