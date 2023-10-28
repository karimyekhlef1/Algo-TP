import TransportingVehicle from "./Logic/TransportingVehicle.js";
import ArrangementOfVehicles from "./Logic/ArrangementOfVehicles.js";
export default function startVehicles(central,vehicles,sites,sitesVisited) {
    vehicles=ArrangementOfVehicles(vehicles)
    for (let i = 0; i < vehicles.length; i++) {
        if (sites.length > 0) {
            const res = TransportingVehicle(vehicles[i], sites, sitesVisited);
            sites = res.sites;
          // console.log(["vehicle "+ i] , res.path.length);
          // console.log("path ",res.path);
          sitesVisited.concat(res.path)
        //  console.log("sitesVisited",sitesVisited .length)

        }
      
      }
    

  return { sites, sitesVisited }; // Return the updated values
}