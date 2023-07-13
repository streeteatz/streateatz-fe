export const getDistance = (location) => {
    const userLocation = "41.905580, -87.688060"
    const [lat2, lon2] = location.split(", ")
    const [lat1, lon1] = userLocation.split(", ")
    var R = 6371; 
    var dLat = deg2rad(lat2-lat1);  
    var dLon = deg2rad(lon2-lon1); 
    var a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2)
      ; 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c; 
    return kmToMiles(d).toFixed(2);
  }

  function deg2rad(deg) {
    return deg * (Math.PI/180)
  }
  
  function kmToMiles(km) {
    const milesPerKm = 0.62137119;
    return km * milesPerKm;
  }