import React from 'react'
import TruckCard from '../TruckCard/TruckCard'

const Results = ({ vendors, addFav, remFav, favorites }) => {
  const allVendors = vendors.map((truck, element) =>  {
    if (favorites.includes(truck)) {
      truck.favorite = "Fav";
    } else {
      truck.favorite = "notFav";
    }
    return(
      <TruckCard props={(truck, addFav, remFav)} key={element} />
    )
  })

  return(
    <div>
      {allVendors}
    </div>
  )
}

export default Results