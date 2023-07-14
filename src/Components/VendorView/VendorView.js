import React from 'react'
import Status from '../Status/Status'
import TruckDetails from '../TruckDetails/TruckDetails'

const VendorView = ({ vendor, toggleLive, getAddress }) => {
  // console.log(vendor, 'vendor from vendor view')
  return(
    <div>
      {/* <button onClick={() => toggleLive(vendor)}>{vendor.status === 'true' ? "Close Shop" : "Go Live"}</button> */}
    
      <Status toggle={toggleLive} getAddress={getAddress} vendor={vendor}/>
      {/* <TruckDetails vendors={vendors} currentVendor={currentVendor}/> */}
    </div>
  )
}

export default VendorView;