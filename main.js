import handelread from "./readfile.js";
import { handlSlicedata } from "./splices/index.js";
import { calculateDistance } from "./Logic/calculateDistance.js";
import findSiteWithGreatestAmount from "./Logic/findSiteWithGreatestAmount.js";
import findSiteClosest from "./Logic/findSiteClosest.js";
import CheckBackToCenter from "./Logic/CheckBackToCenter.js";
// import TransportingVehicle from "./Logic/TransportingVehicle.js";
import startVehicles from "./startVehicles.js";

handelread()
  .then(data => {
   const sitesVisited = [];
   const vehicles=handlSlicedata(data).vehicles
   const central=handlSlicedata(data).central[0]
   const sites=handlSlicedata(data).sites

   const start = startVehicles(central,vehicles,sites,sitesVisited)
  //  console.log(start)

  })
  .catch(err => {
    console.error('Error:', err);
  });
