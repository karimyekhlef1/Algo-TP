import { calculateDistance } from "./calculateDistance.js"
export default function CheckBackToCenter(vehicle , destination ,center) {
    if (calculateDistance(vehicle,destination)+calculateDistance(destination,center) < vehicle.distance ){
        return true
    } else {return false}

}
