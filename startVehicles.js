import TransportingVehicle from "./Logic/TransportingVehicle.js";
import ArrangementOfVehicles from "./Logic/ArrangementOfVehicles.js";
export default function startVehicles(central,vehicles,sites,sitesVisited ,distanceTotal) {
    vehicles=ArrangementOfVehicles(vehicles)
    const pathByVehicle=[]
    const distanceTotalALLvehicles=[]
    for (let i = 0; i < vehicles.length; i++) {
      // console.log("sites==========>",sites?.length,sites)
        if (sites?.length > 0) {

            const res = TransportingVehicle(vehicles[i], sites, sitesVisited,central,distanceTotal);
            sites = res.sites;

          pathByVehicle.push({vehicle :vehicles[i] , path :res.path})

          console.log(`vehicles :${vehicles[i].id}` ,res.distanceTotal);
          distanceTotalALLvehicles.push( { id :vehicles[i].id, distance :res.distanceTotal})
          sitesVisited.concat(res.path)


        }
        
      
      }


      console.log("----------->distanceTotalALLvehicles",distanceTotalALLvehicles)
  return { sites, sitesVisited  ,pathByVehicle , distanceTotalALLvehicles }; 
}