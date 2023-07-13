import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import Results from '../Results/Results'
import Search from '../Search/Search'
import VendorView from '../VendorView/VendorView'
import TruckDetails from '../TruckDetails/TruckDetails'
import Error from '../Error/Error'
import { Routes, Route } from 'react-router-dom'
import TruckCard from '../TruckCard/TruckCard'
import { mockData } from '../../MockData/MockData'
import { socket } from '../../utilities/socket'
import { fetchAllTrucks, fetchAllMenus } from '../../utilities/apiCalls'

const App = () => {
  const [vendors, setVendors] = useState([])
  const [allMenuItems, setAllMenuItems] = useState([])
  const [currentUser, setCurrentUser] = useState('customer')
  const [currentVendor, setCurrentVendor] = useState(1)
  const [favorites, setFavorites] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [truckLocation, setTruckLocation] = useState([])
  const [userLocation, setUserLocation] = useState('')

// vendors and customers toggle switch. 
// make a state that holds boolean
// based off of that value, it will be on vendor or user page
// pass 

  const sendData = (truck) => {
    if (truck.status === false) {
      truck.status = true
    } else {
      truck.status = false
    }
    
    socket.emit("send_data", { updatedVendors: vendors.filter(v => v.id !== truck.id), truck: truck });
  };

  const favTruck = (truck) => {
    const newFavState = [...favorites, truck]
    setFavorites(newFavState)
  }

  const removeFav =  (truck) => {
    const updatedFavs = favorites.filter((fav) => fav.id !== truck.id)
    setFavorites(updatedFavs)
  }

  const searchResults = (searchValue) => {
    let lowerSearchValue = searchValue.toLowerCase()
    let nameSearchResults = vendors.filter((v) => v.name.toLowerCase().includes(lowerSearchValue) || v.tags.toLowerCase().includes(lowerSearchValue) || v.description.toLowerCase().includes(lowerSearchValue))
    setVendors(nameSearchResults)
  }
  
  const searchButtons = (event, button ) => {
    event.preventDefault();
    if (button === "favorites") {  
      setVendors(favorites)
    } 
    if (button === "openNow") {
      setVendors(vendors.filter(v => v.status === true))
      setVendors(vendors.filter(v => v.status === true))
    }
  }

  const toggleView = (id) => {
    setCurrentUser(id);
  }

  const resestResults = (event) => {
    event.preventDefault();
    fetchData()
  }

  const fetchData = async () => {
    try {
      const data = await fetchAllTrucks()
        setVendors(data.data.attributes)
      } catch(error) {
      }
    }
      
  
  useEffect(() => {
    fetchData()
    socket.on('receive_data', (data) => {
      setVendors([data.truck, ...data.updatedVendors])
    });

    return () => {
      socket.off('receive_data');
    };
  }, [])

  return (
    <div>
      <Header togView={toggleView} currentUser={currentUser}/>
      <Routes>
        <Route path="/" element={
          <div>
            <Search vendors={vendors} search={searchResults} reset={resestResults} allSearch={searchButtons}/>
            <Results vendors={vendors} remFav={removeFav} addFav={favTruck} favorites={favorites} />
          </div>
        } />
      <Route path="/vendor/:id" element={<TruckDetails vendors={vendors} />}
      />
      <Route path="/vendor-view" element={
        <div>
          <VendorView toggleLive={sendData} vendor={vendors.find(v => v.id == 1)} currentVendor={currentVendor}/>
        </div>
      } />
      <Route path="*" element={
        <Error message={"url"}/>
      } />
    </Routes>
    </div>
  )
}

export default App;