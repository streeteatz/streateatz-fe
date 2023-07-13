import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import pin from '../../assets/pin.png'
import notFav from '../../assets/notFav.png'
import Fav from '../../assets/fav.png'
import notDownvoted from '../../assets/notDownvoted.png'
import notUpvoted from '../../assets/notUpvoted.png'
import downvoted from '../../assets/downvoted.png'
import upvoted from '../../assets/upvoted.png'
import './TruckDetails.css'
import { fetchAllTrucks } from '../../utilities/apiCalls'

const TruckDetails = ({ vendors, currentVendor }) => {
    const [singularTruck, setSingularTruck] = useState({})
    const [menu, setMenu] = useState([])
    const [loading, setLoading] = useState(true)
    let { id } = useParams();
    let match = vendors.filter((truck) => parseInt(truck.id) === parseInt(id))[0]
    
    // console.log(match, 'match in truck details')

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
    const fetchData = async () => {
      try {
        const data = await fetchAllTrucks()
          let oneTruck = data.data.attributes.filter((truck) => truck.id === match.id)[0]
          setSingularTruck(oneTruck)
          console.log(oneTruck, "oneTruck")
        } catch(error) {
          console.log(error, "error")
        }
        // const thisData = mockData.data.map((data) => {
          //   return data.attributes
          // })
          // setVendors( thisData)
          // this is going to fetch the data and then set state but then also reset isLoading to false
        }

useEffect(() => {
  fetchData()
}, []) 
const goBackHome = () => {
  setSingularTruck({})
  setMenu([])
  setLoading(true)
}
    // if they give us a singular truck endpoint then we need to do a second fetch call 
    // we also might need to fetch the menu based upon a single truck id

    // useEffect(() => {
    //   individualTruckFetch(singleTruck.id)
    //   truckMenuFetch(singleTruck.id)
    //   setLoading(false)
    // }, [])

    // const items = menu.map((menuItem, index) => {
    //   return (
    //     <MenuItem key={index} item={menuItem} />
    //   )
    // })

    let truckStatus = singularTruck.status === true ? "Open Now!" : "Closed Now!"
  return(
    <section className="details-container">
      <div className='left-side'>
        {/* <img className="details-star-icon" src={notFav} alt="favorited star" /> */}
        <div className="details-vendor">
          <h2 className="details-name">{singularTruck.name}</h2>
          <div className="details-vendor-container">
            <div className="details-status-container">
              <button className="status-icon-open"></button> 
              {/* <p className="status">{translateStatus(match.status)}</p> */}
              <p className="status">{singularTruck.status}</p>
              {/* pass a status variable in to the status p tag to change with vendors status */}
              <img className="pin" src={pin}></img>
              <p className="location">{singularTruck.address}</p>
            </div>
          </div>
          <p className="details-tags">{singularTruck.tags}</p>
          <p className="wait-time">{singularTruck.wait_time} minutes wait</p>
          <img className="details-image" src={singularTruck.img} alt='food truck preview image'/>
        </div>
      </div>
      <div className='right-side'>
        <div className="votes-container">
          <img 
          className="notUpvoted icon" 
          alt="empty thumbs up icon" 
          src={notUpvoted} 
          height={50} width={50} />
          <p className="upvotes">{singularTruck.up_rating}</p>
          <img 
          className="downvoted icon" 
          alt="downvoted icon" 
          src={notDownvoted}
          height={50} width={50}/>
          <p className="downvotes">{singularTruck.down_rating}</p>
        </div>
        <div className="menu-container">
          {/* {items} */}
        </div>
      </div>
      <NavLink to="/"><button className="back-btn">back</button></NavLink>
    </section>
  )
}

export default TruckDetails;