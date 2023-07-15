import React, {useState, useEffect} from 'react'
import Status from '../Status/Status'
import TruckDetails from '../TruckDetails/TruckDetails'
import Error from '../Error/Error'
import { MenuItem } from '../MenuItem/MenuItem'
import { fetchAllMenus, fetchOneTruck } from '../../utilities/apiCalls'
import './VendorView.css'

const VendorView = ({ vendor, toggleLive, getAddress }) => {
  const [currentVendor, setCurrentVendor] = useState({})
  const [loading, setLoading] = useState(true)
  const [menu, setMenu] = useState([])
  const [error, setError] = useState('')
  const [id, setId] = useState(9)
  const truncateUrl = (url) => {
    const maxTextLength = 25;
    return url.length > maxTextLength ? url.substr(0, maxTextLength) + '...' : url;
  };

  const fetchData = async (id) => {
    try {
      const data = await fetchOneTruck(id)
      const menuData = await fetchAllMenus()
      let currentMenu = menuData.data.attributes.filter((item) => {
        return (
          item.vendor === id
          )
        })
      setCurrentVendor(data.data.attributes)
      setMenu(currentMenu)
    } catch(error) {
      setError("fetch");
      console.log(error, "error")
    }
      }
      useEffect(() => {
        fetchData(id)
        setLoading(false)
      }, []) 
  const suggestion = currentVendor.down_rating > currentVendor.up_rating ? 'Maybe you should try going Open now!' : ''
  return(
    <div className="vendor-view">
      {loading === true ?  <p>Loading....</p> : (
      <><div className='status-container'>
          {error === '' ? <Status toggle={toggleLive} getAddress={getAddress} vendor={vendor} /> : <Error message={"fetch"} />}
        </div><div className="vendor-view-cont">
            <div className="vv-left">
              <div className="statistics-container">
                <h3>{currentVendor.name} Statistics!</h3>
                <p className='statistics-info'>You have a total of {currentVendor.up_rating} Streeteatz users who love your truck!</p>
                <p className='statistics-info'>You have a total of {currentVendor.down_rating} Streeteatz users who need more convincing to love your truck!</p>
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
                  return <MenuItem item={item} key={index} />
                })}
              </div>
            </div>
          </div></>

      )}
  </div>
  )
}

export default VendorView;