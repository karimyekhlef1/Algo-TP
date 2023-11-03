import { Express } from "express";
import handelread from "../readfile.js";
import { handlSlicedata } from "../splices.js";
const router =express.Router()
router.get ('',()=>{
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

}
)
export default router