import React, {useState, useEffect} from 'react';

const TruckDetails = ({singleTruck}) => {
    const [singularTruck, setSingularTruck] = useState({})
    const [menu, setMenu] = useState([])
    const [loading, setLoading] = useState(true)


    const individualTruckFetch = (truckId) => {
      // fetch and interpolate the id onto the end of the fetch call
      // we will set singularTruck state based upon what returns from fetch
    }

    const truckMenuFetch = (truckId) => {
      // based upon the clicked truck id we will do the next fetch call to the Menu endpoints
      // and then set menu state based on this
    }

const goBackHome = () => {
  setSingularTruck({})
  setMenu([])
  setLoading(true)
}
    // if they give us a singular truck endpoint then we need to do a second fetch call 
    // we also might need to fetch the menu based upon a single truck id

    useEffect(() => {
      individualTruckFetch(singleTruck.id)
      truckMenuFetch(singleTruck.id)
      setLoading(false)
    }, [])

    // const items = menu.map((menuItem, index) => {
    //   return (
    //     <MenuItem key={index} item={menuItem} />
    //   )
    // })

  return(
    <section>
      <div className='left-side'>
        <div>
          <h2>Bobs Burgers</h2>
          <p>520-772-9821</p>
          <p>currently open</p>
          <p>American, Mexican, Burgers,  Fries</p>
          <p> $ cash only</p>
        </div>
        <img alt='food truck main image'/>
        <img alt="favorited star" />
      </div>
      <div className='right-side'>
        <span> <p>100</p> <p>0</p> </span>
        <div>
          {/* {items} */}
        </div>
      </div>
    </section>
  )
}

export default TruckDetails;