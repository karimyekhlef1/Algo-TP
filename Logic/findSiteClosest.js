import { calculateDistance } from "./calculateDistance.js";

function findSiteClosest(vehicle , sites) {
    if (sites.length === 0) {
        return null; 
    }
        let siteClosest =sites[0]
  
        for (let i = 1; i < sites.length; i++) {
          if (calculateDistance(vehicle ,sites[i]) < calculateDistance(vehicle ,siteClosest)) {
            siteClosest = sites[i]
          }
        }
        return siteClosest;
      
}

export default findSiteClosest
