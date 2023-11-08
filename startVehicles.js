import TransportingVehicle from "./Logic/TransportingVehicle.js";
import ArrangementOfVehicles from "./Logic/ArrangementOfVehicles.js";
export default function startVehicles(central,vehicles,sites,sitesVisited ,distanceTotal) {
    vehicles=ArrangementOfVehicles(vehicles)
    const pathByVehicle=[]
    const distanceTotalALLvehicles=[]
    for (let i = 0; i < vehicles.length; i++) {
      // console.log("sites==========>",sites?.length,sites)
        if (sites?.length > 0) {
          // console.log("vehicles===========>",vehicles[i])

            const res = TransportingVehicle(vehicles[i], sites, sitesVisited,central,distanceTotal);
            sites = res.sites;

          // console.log(["vehicle "+ vehicles[i].id] , res.path);
          pathByVehicle.push({vehicle :vehicles[i] , path :res.path})

          console.log(`vehicles :${vehicles[i].id}` ,res.distanceTotal);
          distanceTotalALLvehicles.push( res.distanceTotal)
          sitesVisited.concat(res.path)

        //  console.log("sitesVisited",sitesVisited .length)

        }
        // else{
        //   console.log("TEST")
        // }
      
      }
      // console.log("======",pathByVehicle)


      console.log("----------->distanceTotalALLvehicles",distanceTotalALLvehicles)
  return { sites, sitesVisited  ,pathByVehicle , distanceTotalALLvehicles}; 
}