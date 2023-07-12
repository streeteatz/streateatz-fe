import React from 'react';

const VendorView = ({ toggleLive, vendor }) => {
  console.log(vendor, 'vendor from vendor view')
  return(
    <div>
      <button onClick={() => toggleLive(vendor)}>{vendor.status === 'true' ? "Close Shop" : "Go Live"}</button>
    </div>
  )
}

export default VendorView;