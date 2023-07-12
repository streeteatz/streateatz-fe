import React from 'react'
import Status from '../Status/Status'
import TruckDetails from '../TruckDetails/TruckDetails'

const VendorView = ({ vendors, currentVendor }) => {
  return(
    <div>
      <Status/>
      {/* <TruckDetails vendors={vendors} currentVendor={currentVendor}/> */}
    </div>
  )
}

export default VendorView;