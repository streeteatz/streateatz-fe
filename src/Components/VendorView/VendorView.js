import React from 'react'
import Status from '../Status/Status'
import TruckDetails from '../TruckDetails/TruckDetails'

const VendorView = ({ vendors, currentVendor, toggleLive }) => {
  console.log(vendor, 'vendor from vendor view')
  return(
    <div>
      {/* <button onClick={() => toggleLive(vendor)}>{vendor.status === 'true' ? "Close Shop" : "Go Live"}</button> */}
    
      <Status/>
      {/* <TruckDetails vendors={vendors} currentVendor={currentVendor}/> */}
    </div>
  )
}

export default VendorView;