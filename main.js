import handelread from "./readfile.js";
import { handlSlicedata } from "./splices/index.js";
import { calculateDistance } from "./Logic/calculateDistance.js";

handelread()
  .then(data => {
    console.log(handlSlicedata(data).vehicles)
    const totalAmount = handlSlicedata(data).vehicles.reduce((sum, item) => sum + item.ability, 0);
console.log(totalAmount)

    // console.log(calculateDistance(handlSlicedata(data).sites[120],handlSlicedata(data).sites[2])
      
  })
  .catch(err => {
    console.error('Error:', err);
  });
