import React from 'react'
import TruckCard from '../TruckCard/TruckCard'

const Results = ({ vendors, addFav, remFav }) => {
  const allVendors = vendors.map((truck, element) =>  {
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