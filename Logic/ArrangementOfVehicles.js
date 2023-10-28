export default function ArrangementOfVehicles(vehicles) {
    vehicles.sort((a, b) => b.ability - a.ability);
    return vehicles;

}
