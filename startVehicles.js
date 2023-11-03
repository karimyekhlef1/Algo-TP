import TransportingVehicle from "./Logic/TransportingVehicle.js";
import ArrangementOfVehicles from "./Logic/ArrangementOfVehicles.js";
export default function startVehicles(central,vehicles,sites,sitesVisited) {
    vehicles=ArrangementOfVehicles(vehicles)
    const pathByVehicle=[]
    for (let i = 0; i < vehicles.length; i++) {
      // console.log("sites==========>",sites?.length,sites)
        if (sites?.length > 0) {
          // console.log("vehicles===========>",vehicles[i])

            const res = TransportingVehicle(vehicles[i], sites, sitesVisited,central);
            sites = res.sites;

          // console.log(["vehicle "+ vehicles[i].id] , res.path);
          pathByVehicle.push({vehicle :vehicles[i] , path :res.path})

          console.log("path ",res.path);
          sitesVisited.concat(res.path)
        //  console.log("sitesVisited",sitesVisited .length)

        }
        // else{
        //   console.log("TEST")
        // }
      
      }
    

  return { sites, sitesVisited  ,pathByVehicle}; 
}