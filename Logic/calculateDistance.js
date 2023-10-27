export function calculateDistance(point1, point2) {
  if ( point1 && point2 ){
    const deltaX =  point2.valueX - point1.valueX;
    const deltaY = point2.valueY - point1.valueY;
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    return distance;
  }
  else {
    return console.log("this site is not ")
  }   
  }
  
