import TransportingVehicle from "./Logic/TransportingVehicle.js";
import ArrangementOfVehicles from "./Logic/ArrangementOfVehicles.js";
export default function startVehicles(central,vehicles,sites,sitesVisited) {
    vehicles=ArrangementOfVehicles(vehicles)
    for (let i = 0; i < vehicles.length; i++) {
        if (sites.length > 0) {
            const res = TransportingVehicle(vehicles[i], sites, sitesVisited);
            sites = res.sites;
          console.log([i] , res.path.length);
        //   console.log(i + 1, res.path.length);

           // Log res.path
          sitesVisited.concat(res.path)
      console.log("sitesVisited",sitesVisited .length)

        }
      
      }
    //   console.log("sites",sites)
    //   console.log("sitesVisited",sitesVisited.length)

  return { sites, sitesVisited }; // Return the updated values
}