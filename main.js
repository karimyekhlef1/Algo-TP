import handelread from "./readfile.js";
import { handlSlicedata } from "./splices/index.js";
import { calculateDistance } from "./Logic/calculateDistance.js";
import findSiteWithGreatestAmount from "./Logic/findSiteWithGreatestAmount.js";
import findSiteClosest from "./Logic/findSiteClosest.js";
handelread()
  .then(data => {
    // console.log(findSiteClosest(handlSlicedata(data).vehicles[0],handlSlicedata(data).sites))
    // console.log(handlSlicedata(data).vehicles)


    // console.log(calculateDistance(handlSlicedata(data).vehicles[17],  handlSlicedata(data).central[0]) )



    // console.log(findSiteWithGreatestAmount(handlSlicedata(data).sites))
//     const totalAmount = handlSlicedata(data).vehicles.reduce((sum, item) => sum + item.ability, 0);
// console.log(totalAmount)
  })
  .catch(err => {
    console.error('Error:', err);
  });
