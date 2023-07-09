import React from 'react'
import TruckCard from '../TruckCard/TruckCard'

const Results = ({ vendors, addFav, remFav, favorites }) => {
  const allVendors = vendors.map((truck, element) =>  {
    return(
      <TruckCard 
        truck={truck}
        addFav={addFav}
        remFav={remFav}
        key={element} />
    )
  })

  return(
    <div>
      {allVendors}
    </div>
  )
}

export default Results