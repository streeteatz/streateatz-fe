import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import { MenuItem } from '../MenuItem/MenuItem';
import pin from '../../assets/pin.png'
import './TruckDetails.css'
import { fetchAllTrucks, fetchAllMenus, fetchOneTruck } from '../../utilities/apiCalls'

const TruckDetails = ({ vendors }) => {
  const [singularTruck, setSingularTruck] = useState({})
  const [menu, setMenu] = useState([])
  const [loading, setLoading] = useState(false)
  let { id } = useParams();

  const fetchData = async (id) => {
    setLoading(true);
    try {
      const data = await fetchOneTruck(id)
      let oneTruck = data.data.attributes
      const menuData = await fetchAllMenus()
      let currentMenu = menuData.data.attributes.filter((item) => {
        return (
          parseInt(item.vendor) === parseInt(id)
        )
      })
      setMenu(currentMenu)
      setSingularTruck(oneTruck)
    } catch(error) {
      console.log(error, "error")
    }
  }

useEffect(()  => {
  fetchData(id)
  setLoading(false)
}, []) 

  return (
    <div>
      {loading === true ? (<p>loading....</p>) : (
        <section className="details-container">
          <div className='details-left-container'>
            <div className="details-vendor">
              <h2 className="details-name">{singularTruck.name}</h2>
              <div className="details-status-container">
                <img className="pin" src={pin} alt="pin icon" />
                <p className="location">{singularTruck.address}</p>
              </div>
              <p className="details-tags">{singularTruck.tags}</p>
              <img className="details-image" src={singularTruck.img} alt='food truck preview image' />
            </div>
          </div>
          <div className="details-middle-container">
            <div className="menu-container">
              {menu.map((item, index) => (
                <MenuItem item={item} key={index} />
              ))}
            </div>
          </div>
          <div className='details-right-container'>
            <NavLink to="/"><button className="back-btn">back</button></NavLink>
          </div>
        </section>
      )}
    </div>
  )
}

export default TruckDetails;