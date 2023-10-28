import findSiteClosest from "./findSiteClosest.js";
import { calculateDistance } from "./calculateDistance.js";
import CheckBackToCenter from "./CheckBackToCenter.js";

const center = { id: 0, valueX: 30.54, valueY: 38.81 };

export default function TransportingVehicle(vehicle, sites, sitesVisited) {
    console.log("vehicle==>",vehicle)
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

// const vehicle = {
//   site: "3",
//   valueX: -32.15,
//   valueY: 17,
//   id: 18,
//   ability: 838,
//   distance: 480,
// };
// const sites = [
//   { id: 4, valueX: -24.6, valueY: 31.15, amount: 76 },
//   { id: 5, valueX: 29.97, valueY: -5.91, amount: 71 },
//   { id: 6, valueX: 43.93, valueY: -35.78, amount: 53 },
//   { id: 7, valueX: 16.54, valueY: 32.95, amount: 23 },
//   { id: 8, valueX: -4.33, valueY: 34.84, amount: 77 },
//   { id: 9, valueX: -31.79, valueY: 24.65, amount: 11 },
//   { id: 10, valueX: 9.36, valueY: -13.11, amount: 66 },
//   { id: 11, valueX: 20.21, valueY: -42.61, amount: 58 },
//   { id: 12, valueX: -38.34, valueY: 32.99, amount: 88 },
//   { id: 13, valueX: -8.99, valueY: 49.8, amount: 68 },
//   { id: 14, valueX: -6.74, valueY: 37.77, amount: 95 },
//   { id: 15, valueX: -9.14, valueY: 38.93, amount: 34 },
//   { id: 16, valueX: 8.77, valueY: -23.83, amount: 23 },
//   { id: 17, valueX: -36.51, valueY: 10.88, amount: 86 },
//   { id: 18, valueX: -42.1, valueY: -46.7, amount: 52 },
//   { id: 19, valueX: -25.08, valueY: 22.75, amount: 84 },
//   { id: 20, valueX: 22.12, valueY: -28.02, amount: 75 },
//   { id: 21, valueX: 40.74, valueY: 27.71, amount: 61 },
//   { id: 22, valueX: 35.85, valueY: -13.58, amount: 34 },
//   { id: 23, valueX: 40.52, valueY: -18.45, amount: 37 },
//   { id: 24, valueX: 3.98, valueY: -13.85, amount: 73 },
//   { id: 25, valueX: 1.63, valueY: -21.21, amount: 70 },
//   { id: 26, valueX: 38.69, valueY: 12.81, amount: 40 },
//   { id: 27, valueX: 47.86, valueY: 38.96, amount: 62 },
//   { id: 28, valueX: 27.65, valueY: 24.46, amount: 33 },
//   { id: 29, valueX: -1.18, valueY: 39.81, amount: 16 },
//   { id: 30, valueX: -36.96, valueY: -13.12, amount: 51 },
//   { id: 31, valueX: -25.08, valueY: -26.9, amount: 90 },
//   { id: 32, valueX: 6.04, valueY: -10.61, amount: 68 },
//   { id: 33, valueX: 9.6, valueY: -19.43, amount: 55 },
//   { id: 34, valueX: 35.21, valueY: -46, amount: 17 },
//   { id: 35, valueX: -4.11, valueY: 13.34, amount: 82 },
//   { id: 36, valueX: 28.74, valueY: 30.89, amount: 46 },
//   { id: 37, valueX: -2.69, valueY: 45.92, amount: 90 },
//   { id: 38, valueX: -39.77, valueY: -49.24, amount: 91 },
//   { id: 39, valueX: 34.44, valueY: -32.05, amount: 23 },
//   { id: 40, valueX: 45.86, valueY: 35.2, amount: 31 },
//   { id: 41, valueX: 18.36, valueY: -29.02, amount: 72 },
//   { id: 42, valueX: -33.55, valueY: 49.71, amount: 47 },
//   { id: 43, valueX: 39.18, valueY: 45.79, amount: 67 },
//   { id: 44, valueX: 2.4, valueY: 21.03, amount: 52 },
//   { id: 45, valueX: 34.22, valueY: 6.19, amount: 29 },
//   { id: 46, valueX: -38.32, valueY: 30.39, amount: 39 },
//   { id: 47, valueX: -46.42, valueY: -40.3, amount: 50 },
//   { id: 48, valueX: -48.62, valueY: 37.08, amount: 87 },
//   { id: 49, valueX: 13.53, valueY: -47.71, amount: 54 },
//   { id: 50, valueX: 41.88, valueY: -16.74, amount: 39 },
//   { id: 51, valueX: -22.42, valueY: 24.63, amount: 79 },
//   { id: 52, valueX: -0.46, valueY: -19.82, amount: 54 },
//   { id: 53, valueX: 33.83, valueY: 31.02, amount: 90 },
//   { id: 54, valueX: 18.32, valueY: -21.94, amount: 26 },
//   { id: 55, valueX: 43.18, valueY: -11.75, amount: 95 },
//   { id: 56, valueX: -36.13, valueY: -21.87, amount: 57 },
//   { id: 57, valueX: 17.76, valueY: 41.52, amount: 29 },
//   { id: 58, valueX: -45.53, valueY: -46.67, amount: 69 },
//   { id: 59, valueX: -48.76, valueY: -42.81, amount: 20 },
//   { id: 60, valueX: 42.68, valueY: 6.38, amount: 22 },
//   { id: 61, valueX: -36.39, valueY: -21.84, amount: 53 },
//   { id: 62, valueX: 28.34, valueY: 8.82, amount: 48 },
//   { id: 63, valueX: 41.84, valueY: 6.46, amount: 51 },
//   { id: 64, valueX: 29.6, valueY: 32.63, amount: 38 },
//   { id: 65, valueX: -45.28, valueY: 9.96, amount: 21 },
//   { id: 66, valueX: -38.48, valueY: 7.17, amount: 51 },
//   { id: 67, valueX: -4.68, valueY: -14.76, amount: 90 },
//   { id: 68, valueX: 24.08, valueY: 8.68, amount: 65 },
//   { id: 69, valueX: -42.21, valueY: 47.11, amount: 84 },
//   { id: 70, valueX: -19.23, valueY: 16.81, amount: 79 },
//   { id: 71, valueX: -13.55, valueY: -43.26, amount: 77 },
//   { id: 72, valueX: 16.92, valueY: -46.56, amount: 57 },
//   { id: 73, valueX: 44.7, valueY: 44.94, amount: 50 },
//   { id: 74, valueX: 3.34, valueY: -47.53, amount: 70 },
//   { id: 75, valueX: 38.83, valueY: 35.1, amount: 78 },
//   { id: 76, valueX: -45.72, valueY: -3.6, amount: 46 },
//   { id: 77, valueX: -2.45, valueY: 20.76, amount: 46 },
//   { id: 78, valueX: -38.15, valueY: -4.91, amount: 65 },
//   { id: 79, valueX: -48.13, valueY: 7.28, amount: 81 },
//   { id: 80, valueX: 8.73, valueY: -24.4, amount: 52 },
//   { id: 81, valueX: -18.07, valueY: -16.13, amount: 75 },
//   { id: 82, valueX: 9.92, valueY: -2.31, amount: 14 },
//   { id: 83, valueX: -2.36, valueY: -47.41, amount: 23 },
//   { id: 84, valueX: 10.94, valueY: 9.37, amount: 21 },
//   { id: 85, valueX: -2.13, valueY: 4.3, amount: 51 },
//   { id: 86, valueX: -25.58, valueY: 8.94, amount: 45 },
//   { id: 87, valueX: 9.74, valueY: -1.87, amount: 71 },
//   { id: 88, valueX: 20.29, valueY: -14.19, amount: 19 },
//   { id: 89, valueX: 43.49, valueY: -29.5, amount: 37 },
//   { id: 90, valueX: 45.44, valueY: -29.1, amount: 96 },
//   { id: 91, valueX: 11.61, valueY: -27.33, amount: 15 },
//   { id: 92, valueX: 38.2, valueY: 39.28, amount: 58 },
//   { id: 93, valueX: -49, valueY: 11.45, amount: 55 },
//   { id: 94, valueX: 20.04, valueY: -27.23, amount: 73 },
//   { id: 95, valueX: -43.58, valueY: 47.03, amount: 39 },
//   { id: 96, valueX: -7.52, valueY: 8.02, amount: 18 },
//   { id: 97, valueX: -20.18, valueY: -16.44, amount: 38 },
//   { id: 98, valueX: 40.62, valueY: -32.86, amount: 90 },
//   { id: 99, valueX: -24.13, valueY: -26.09, amount: 17 },
//   { id: 100, valueX: 46.34, valueY: -8.05, amount: 80 },
//   { id: 101, valueX: -23.38, valueY: 47.84, amount: 66 },
//   { id: 102, valueX: -5.85, valueY: -19.53, amount: 42 },
//   { id: 103, valueX: -39.87, valueY: -35.09, amount: 14 },
// ];
// const sitesVisited = [];
// console.log(TransportingVehicle(vehicle, sites, sitesVisited));
