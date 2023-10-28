export default function collectMilk(vehicle,site) {

    if (site.amount < vehicle.ability) {

        const newability= vehicle.ability-site.amount
        return {...vehicle,ability:newability}

    }else 
    return vehicle
}
