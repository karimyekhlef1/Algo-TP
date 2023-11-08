import findSiteClosest from "./findSiteClosest.js";
import { calculateDistance } from "./calculateDistance.js";
import CheckBackToCenter from "./CheckBackToCenter.js";
import collectMilk from "./collectMilk.js";
// const central = { id: 0, valueX: 30.54, valueY: 38.81 };
export default function TransportingVehicle(
  vehicle,
  sites,
  sitesVisited,
  central,
  distanceTotal
) {

  // console.log("center==>", central);
  const vehicleID = vehicle.id;
  const siteIntiVehicle = {
    id: vehicle.site,
    valueX: vehicle.valueX,
    valueY: vehicle.valueY,
  };
  const path = [vehicle];
  let arryOfNewVehicle=[]

  let newVehicle = vehicle;

  do {
    const SiteClosest = findSiteClosest(newVehicle, sites);

    if (
      SiteClosest &&
      CheckBackToCenter(newVehicle, SiteClosest, central) &&
      newVehicle.ability >= SiteClosest.amount
    ) {
      const Distance = calculateDistance(newVehicle, SiteClosest);
      distanceTotal = distanceTotal+Distance
      const newAbility= collectMilk(newVehicle,SiteClosest).ability
      // const newAbility = newVehicle.ability - SiteClosest.amount;
      const updatedSitesVisited = [...sitesVisited, SiteClosest];
      const newDistance = newVehicle.distance - Distance;

       newVehicle = {
        ...newVehicle,
        distance: newDistance,
        ability: newAbility,
        valueX: SiteClosest.valueX,
        valueY: SiteClosest.valueY,
        site: SiteClosest.id,
      };
      // arryOfNewVehicle=arryOfNewVehicle.push(newVehicle)
      // sitesVisited.push(SiteClosest)
      ;
      path.push({...SiteClosest ,newVehicle:newVehicle});

      sites = sites.filter((site) => site.id !== SiteClosest.id);
    } else {
      if (calculateDistance(newVehicle, central) < newVehicle.distance) {
        const Distance = calculateDistance(newVehicle, central);
        distanceTotal = distanceTotal+Distance

        let updatedSitesVisited = [...sitesVisited, SiteClosest];
        const newDistance = newVehicle.distance - Distance;
        path.push(central);

        // Update newVehicle with the changes
         newVehicle = {
          ...newVehicle,
          distance: newDistance,
          valueX: central.valueX,
          valueY: central.valueY,
          site: central.id,
        };
      }
      // arryOfNewVehicle = arryOfNewVehicle.push(newVehicle)


      break;
    }
  } while (
    sites.length > 0 &&
    CheckBackToCenter(newVehicle, findSiteClosest(newVehicle, sites), central)
  );
  // console.log(path)

  return {
    newVehicle,
    path: path,
    // leng: path.length,
    sites,
    sitesVisited,
     distanceTotal


  };
}

// const vehicle = {
//   site: "2",
//   valueX: -22.12,
//   valueY: 11.49,
//   id: 12,
//   ability: 1259,
//   distance: 480,
// };
// const sites = [
//   { id: 150, valueX: 27.08, valueY: -1.05, amount: 87 },
//   { id: 5, valueX: 29.97, valueY: -5.91, amount: 71 },
//   { id: 120, valueX: 35.16, valueY: -10.49, amount: 28 },
//   { id: 105, valueX: 36.97, valueY: -12.47, amount: 67 },
//   { id: 22, valueX: 35.85, valueY: -13.58, amount: 34 },
//   { id: 23, valueX: 40.52, valueY: -18.45, amount: 37 },
//   { id: 50, valueX: 41.88, valueY: -16.74, amount: 39 },
//   { id: 144, valueX: 44.64, valueY: -17.01, amount: 45 },
//   { id: 55, valueX: 43.18, valueY: -11.75, amount: 95 },
//   { id: 100, valueX: 46.34, valueY: -8.05, amount: 80 },
//   { id: 146, valueX: 44.42, valueY: 1.51, amount: 65 },
//   { id: 60, valueX: 42.68, valueY: 6.38, amount: 22 },
//   { id: 63, valueX: 41.84, valueY: 6.46, amount: 51 },
//   { id: 26, valueX: 38.69, valueY: 12.81, amount: 40 },
//   { id: 45, valueX: 34.22, valueY: 6.19, amount: 29 },
//   { id: 62, valueX: 28.34, valueY: 8.82, amount: 48 },
//   { id: 68, valueX: 24.08, valueY: 8.68, amount: 65 },
//   { id: 121, valueX: 30.47, valueY: 15.86, amount: 42 },
//   { id: 28, valueX: 27.65, valueY: 24.46, amount: 33 },
//   { id: 36, valueX: 28.74, valueY: 30.89, amount: 46 },
//   { id: 64, valueX: 29.6, valueY: 32.63, amount: 38 },
//   { id: 53, valueX: 33.83, valueY: 31.02, amount: 90 },
//   { id: 75, valueX: 38.83, valueY: 35.1, amount: 78 },
//   { id: 92, valueX: 38.2, valueY: 39.28, amount: 58 },
//   { id: 151, valueX: -37.21, valueY: 21.27, amount: 50 },
//   { id: 9, valueX: -31.79, valueY: 24.65, amount: 11 },
//   { id: 19, valueX: -25.08, valueY: 22.75, amount: 84 },
//   { id: 51, valueX: -22.42, valueY: 24.63, amount: 79 },
//   { id: 114, valueX: -24.58, valueY: 27.67, amount: 75 },
//   { id: 4, valueX: -24.6, valueY: 31.15, amount: 76 },
//   { id: 111, valueX: -22.84, valueY: 31.34, amount: 96 },
//   { id: 116, valueX: -22.11, valueY: 20.46, amount: 21 },
//   { id: 70, valueX: -19.23, valueY: 16.81, amount: 79 },
//   { id: 145, valueX: -21.47, valueY: 12.91, amount: 20 },
//   { id: 86, valueX: -25.58, valueY: 8.94, amount: 45 },
//   { id: 134, valueX: -22.63, valueY: 5.86, amount: 85 },
//   { id: 135, valueX: -30.95, valueY: 1.88, amount: 27 },
//   { id: 66, valueX: -38.48, valueY: 7.17, amount: 51 },
//   { id: 17, valueX: -36.51, valueY: 10.88, amount: 86 },
//   { id: 124, valueX: -44.8, valueY: 13.6, amount: 56 },
//   { id: 65, valueX: -45.28, valueY: 9.96, amount: 21 },
//   { id: 79, valueX: -48.13, valueY: 7.28, amount: 81 },
//   { id: 93, valueX: -49, valueY: 11.45, amount: 55 },
//   { id: 76, valueX: -45.72, valueY: -3.6, amount: 46 },
//   { id: 78, valueX: -38.15, valueY: -4.91, amount: 65 },
//   { id: 30, valueX: -36.96, valueY: -13.12, amount: 51 },
//   { id: 136, valueX: -31.77, valueY: -14.21, amount: 15 },
//   { id: 88, valueX: 20.29, valueY: -14.19, amount: 19 },
//   { id: 54, valueX: 18.32, valueY: -21.94, amount: 26 },
//   { id: 132, valueX: 23.27, valueY: -24.15, amount: 24 },
//   { id: 20, valueX: 22.12, valueY: -28.02, amount: 75 },
//   { id: 94, valueX: 20.04, valueY: -27.23, amount: 73 },
//   { id: 41, valueX: 18.36, valueY: -29.02, amount: 72 },
//   { id: 107, valueX: 16.24, valueY: -32.28, amount: 81 },
//   { id: 91, valueX: 11.61, valueY: -27.33, amount: 15 },
//   { id: 117, valueX: 8.24, valueY: -27.72, amount: 82 },
//   { id: 80, valueX: 8.73, valueY: -24.4, amount: 52 },
//   { id: 16, valueX: 8.77, valueY: -23.83, amount: 23 },
//   { id: 33, valueX: 9.6, valueY: -19.43, amount: 55 },
//   { id: 10, valueX: 9.36, valueY: -13.11, amount: 66 },
//   { id: 32, valueX: 6.04, valueY: -10.61, amount: 68 },
//   { id: 24, valueX: 3.98, valueY: -13.85, amount: 73 },
//   { id: 52, valueX: -0.46, valueY: -19.82, amount: 54 },
//   { id: 25, valueX: 1.63, valueY: -21.21, amount: 70 },
//   { id: 102, valueX: -5.85, valueY: -19.53, amount: 42 },
//   { id: 67, valueX: -4.68, valueY: -14.76, amount: 90 },
//   { id: 142, valueX: -8.62, valueY: -7.72, amount: 58 },
//   { id: 112, valueX: -2.35, valueY: -4.24, amount: 66 },
//   { id: 85, valueX: -2.13, valueY: 4.3, amount: 51 },
//   { id: 96, valueX: -7.52, valueY: 8.02, amount: 18 },
//   { id: 35, valueX: -4.11, valueY: 13.34, amount: 82 },
//   { id: 77, valueX: -2.45, valueY: 20.76, amount: 46 },
//   { id: 44, valueX: 2.4, valueY: 21.03, amount: 52 },
//   { id: 143, valueX: 3.9, valueY: 13.69, amount: 88 },
//   { id: 84, valueX: 10.94, valueY: 9.37, amount: 21 },
//   { id: 87, valueX: 9.74, valueY: -1.87, amount: 71 },
//   { id: 82, valueX: 9.92, valueY: -2.31, amount: 14 },
//   { id: 119, valueX: -12.76, valueY: -20.44, amount: 69 },
//   { id: 81, valueX: -18.07, valueY: -16.13, amount: 75 },
//   { id: 97, valueX: -20.18, valueY: -16.44, amount: 38 },
//   { id: 99, valueX: -24.13, valueY: -26.09, amount: 17 },
//   { id: 31, valueX: -25.08, valueY: -26.9, amount: 90 },
//   { id: 129, valueX: -20.45, valueY: -32.72, amount: 38 },
//   { id: 147, valueX: -16.21, valueY: -36.9, amount: 61 },
//   { id: 138, valueX: -13.17, valueY: -34.1, amount: 12 },
//   { id: 71, valueX: -13.55, valueY: -43.26, amount: 77 },
//   { id: 83, valueX: -2.36, valueY: -47.41, amount: 23 },
//   { id: 74, valueX: 3.34, valueY: -47.53, amount: 70 },
//   { id: 104, valueX: 10.46, valueY: -45.04, amount: 79 },
//   { id: 49, valueX: 13.53, valueY: -47.71, amount: 54 },
//   { id: 72, valueX: 16.92, valueY: -46.56, amount: 57 },
//   { id: 11, valueX: 20.21, valueY: -42.61, amount: 58 },
//   { id: 133, valueX: 21.34, valueY: -39.35, amount: 52 },
//   { id: 46, valueX: -38.32, valueY: 30.39, amount: 39 },
//   { id: 12, valueX: -38.34, valueY: 32.99, amount: 88 },
//   { id: 128, valueX: -43.41, valueY: 34.89, amount: 90 },
//   { id: 48, valueX: -48.62, valueY: 37.08, amount: 87 },
//   { id: 153, valueX: -49.71, valueY: 35.76, amount: 29 },
//   { id: 108, valueX: -38.16, valueY: 40.65, amount: 64 },
//   { id: 69, valueX: -42.21, valueY: 47.11, amount: 84 },
// ];
// const center = { id: 0, valueX: 30.54, valueY: 38.81 };
// const sitesVisited = [];
// console.log(TransportingVehicle(vehicle, sites, sitesVisited, center));
