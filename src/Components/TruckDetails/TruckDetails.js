import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import { MenuItem } from '../MenuItem/MenuItem';
import pin from '../../assets/pin.png'
import notFav from '../../assets/notFav.png'
import Fav from '../../assets/fav.png'
import notDownvoted from '../../assets/notDownvoted.png'
import notUpvoted from '../../assets/notUpvoted.png'
import downvoted from '../../assets/downvoted.png'
import upvoted from '../../assets/upvoted.png'
import './TruckDetails.css'
import { fetchAllTrucks, fetchAllMenus, fetchOneTruck } from '../../utilities/apiCalls'

const TruckDetails = ({ vendors }) => {
    const [singularTruck, setSingularTruck] = useState({})
    const [menu, setMenu] = useState([])
    const [loading, setLoading] = useState(false)
    let { id } = useParams();
    let match = vendors.filter((truck) => {
      return (
        parseInt(truck.id) === parseInt(id)[0] 
        )
    })

    // const individualTruckFetch = (id) => {
      // fetch and interpolate the id onto the end of the fetch call
      // we will set singularTruck state based upon what returns from fetch
      // em- i'm actually thinking we won't need to do that, since we can pull the truck details from the vendors array that we apparently need to render the page thank you for nothing, router
    // }

    // const truckMenuFetch = (id) => {
      // based upon the clicked truck id we will do the next fetch call to the Menu endpoints
      // and then set menu state based on this
      // em- same here
    // }
    const fetchData = async (id) => {
      setLoading(true);
      try {
        const menuData = await fetchAllMenus()
        const data = await fetchOneTruck(id)

        let currentMenu = menuData.data.attributes.filter((item) => {
          return (
            parseInt(item.vendor) === parseInt(id)

          )
        })
        
        let oneTruck = data.data.attributes
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


    let truckStatus = singularTruck.status === true ? "Open Now!" : "Closed Now!"
  return(
    <section className="details-container">
      {loading === true ? <p>loading....</p> :  
      (<><div className='left-side'>
          <div className="details-vendor">
            <h2 className="details-name">{singularTruck.name}</h2>
            <div className="details-vendor-container">
              <div className="details-status-container">
                <button className="status-icon-open"></button>
                <p className="status">{singularTruck.status}</p>
                <img className="pin" src={pin}></img>
                <p className="location">{singularTruck.address}</p>
              </div>
            </div>
            <p className="details-tags">{singularTruck.tags}</p>
            <p className="wait-time">{singularTruck.wait_time} minutes wait</p>
            <img className="details-image" src={singularTruck.img} alt='food truck preview image' />
          </div>
        </div><div className='right-side'>
            <div className="votes-container">
              <img
                className="notUpvoted details-icon"
                alt="empty thumbs up icon"
                src={notUpvoted}
                height={50} width={50} />
              <p className="upvotes">{singularTruck.up_rating}</p>
              <img
                className="downvoted details-icon"
                alt="downvoted icon"
                src={notDownvoted}
                height={50} width={50} />
              <p className="downvotes">{singularTruck.down_rating}</p>
            </div>
            <div className="menu-container">
              {menu.map((item, index) => {
                return (
                  <MenuItem item={item} key={index} />
                );
              })}
            </div>
          </div><div className='button-container'>
            <NavLink to="/"><button className="back-btn">back</button></NavLink>
          </div></>)
      }
      
    </section>
        
  )
}

export default TruckDetails;