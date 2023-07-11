import React from 'react'
import TruckCard from '../TruckCard/TruckCard'

const Results = ({ vendors, addFav, remFav, favorites, dist }) => {
  const allVendors = vendors.map((truck) =>  {
    return(
      <TruckCard 
        truck={truck}
        addFav={addFav}
        remFav={remFav}
        dist={dist}
        key={truck.id} 
        />
    )
  })

  return(
    <div>
      {allVendors}
    </div>
  )
}

export default Results