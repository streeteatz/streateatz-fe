import React, {useState, useEffect} from 'react'
import Status from '../Status/Status'
import TruckDetails from '../TruckDetails/TruckDetails'
import { MenuItem } from '../MenuItem/MenuItem'
import { fetchAllMenus } from '../../utilities/apiCalls'
import './VendorView.css'

const VendorView = ({ vendor, currentVendor, toggleLive, getAddress }) => {
  const [menu, setMenu] = useState([])
  const truncateUrl = (url) => {
    const maxTextLength = 25;
    return url.length > maxTextLength ? url.substr(0, maxTextLength) + '...' : url;
  };


  const fetchData = async () => {
    try {
      const menuData = await fetchAllMenus()
      let currentMenu = menuData.data.attributes.filter((item) => item.vendor === vendor.id)
      setMenu(currentMenu)
    } catch(error) {
      console.log(error, "error")
    }
      }
      useEffect(() => {
        fetchData()
      }, []) 
  console.log(vendor, 'vendor from vendor view')
  const suggestion = vendor.down_rating > vendor.up_rating ? 'Maybe you should try going Open now!' : ''
  return(
    <div className="vendor-view">
      <div className='status-container'>
        <Status toggle={toggleLive} getAddress={getAddress} vendor={vendor} />
      </div>
    <div className="vendor-view-cont">
      <div className="vv-left">
        <div className="statistics-container">
          <h3>{vendor.name} Statistics!</h3>
          <p>You have a total of {vendor.up_rating} Streeteatz users who love your truck!</p>
          <p>You have a total of {vendor.down_rating} Streeteatz users who love your truck!</p>
          <p>{suggestion}</p>
        </div>
        <div className="links-container">
          <h3>Want to expand your business!?</h3>
          <span>
            <a href="https://www.foodtruckr.com" target="_blank" rel="noopener noreferrer">
              {truncateUrl('www.foodtruckr.com')} - Resources for Food Truck Owners
            </a>
          </span>
          <span>
            <a href="https://mobile-cuisine.com" target="_blank" rel="noopener noreferrer">
              {truncateUrl('mobile-cuisine.com')} - Food Truck Information and Guides
            </a>
          </span>
          <span>
            <a href="https://www.businessnewsdaily.com/9237-how-to-start-food-truck-business.html" target="_blank" rel="noopener noreferrer">
              {truncateUrl('https://www.businessnewsdaily.com/9237-how-to-start-food-truck-business.html')} - How to Start a Food Truck Business!
            </a>
          </span>
        </div>
      </div>
      <div className="vv-right">
        <div className="menu-container">
          {menu.map((item, index) => {
            return <MenuItem item={item} key={index} />;
          })}
        </div>
      </div>
    </div>
  </div>
  )
}

export default VendorView;