function findSiteWithGreatestAmount(data) {
    if (data.length === 0) {
      return null; 
    }
  
    let maxAmountObject = data[0]; 
  
    for (let i = 1; i < data.length; i++) {
      if (data[i].amount > maxAmountObject.amount) {
        maxAmountObject = data[i];
      }
    }
    return maxAmountObject;
  }
  

  
export default findSiteWithGreatestAmount 
  