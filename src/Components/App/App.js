import React, { useEffect, useState } from 'react';
import Header from '../Header/Header'
import Results from '../Results/Results'
import Search from '../Search/Search'
import VendorView from '../VendorView/VendorView'
// import TruckDetails from '../TruckDetails/TruckDetails'
import { Routes, Route } from 'react-router-dom';
import TruckCard from '../TruckCard/TruckCard';
import { mockData } from '../../MockData/MockData';
import { io } from 'socket.io-client'

const App = () => {
  const [vendors, setVendors] = useState([])
  const [currentUser, setCurrentUser] = useState('customer')
  const [favorites, setFavorites] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [truckLocation, setTruckLocation] = useState([])
  const [userLocation, setUserLocation] = useState('')


  const socket = io("http://localhost:3001", {
    withCredentials: true,
    extraHeaders: {
      "street-eat": "street-eat"
      }
  })

  const sendMessage = (truck) => {
    if (truck.status === 'false') {
      truck.status = 'true'
    } else {
      truck.status = 'false'
    }
      socket.emit("send_data", { updatedVendors: vendors.filter(v => v.id !== truck.id), truck: truck });
  };

  const favTruck = (truck) => {
    if (!favorites.find((fav) => fav.id === truck.id)) {
      const newFavState = [...favorites, truck]
        setFavorites(newFavState)
    } else {
      const newFavState = favorites.filter(fav => {
        return fav.id !== truck.id
      })
        setFavorites(newFavState)
    }
  }

  const importDistance = (miles) => {
    setTruckLocation(...miles)
    console.log(truckLocation, 'truckLocation')
    return miles
  }

  const removeFav =  (truck) => {
    const newFavState = favorites.filter((fav) => fav.id !== truck.id)
    setFavorites(newFavState)
  }

  const searchResults = (searchValue) => {
    let lowerSearchValue = searchValue.toLowerCase()
    let nameSearchResults = vendors.filter((v) => v.name.toLowerCase().includes(lowerSearchValue) || v.tags.toLowerCase().includes(lowerSearchValue) || v.description.toLowerCase().includes(lowerSearchValue))
    setVendors(nameSearchResults)
  }

  const searchButtons = (event, button) => {
    event.preventDefault();

    if (button === "favorites") {  
      setVendors(favorites)
    } 
    if (button === "openNow") {
      setVendors(vendors.filter(v => v.status === "true"))
    }
    if (button === "closest") {
      
    }
  }

  const toggleView = (id) => {
    setCurrentUser(id);
  }

  const filterChosenVendor = () => {

  }

  const resestResults = (event) => {
    event.preventDefault();
    fetchData()
  }

  const fetchData = () => {
    const thisData = mockData.data.map((data) => {
      return data.attributes
    })
    setVendors(thisData)
    // this is going to fetch the data and then set state but then also reset isLoading to false
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

  return(
    <Routes>
      <Route path="/" element={
          <div>
            <Header togView={toggleView} currentUser={currentUser}/>
            <Search vendors={vendors} search={searchResults} reset={resestResults} allSearch={searchButtons}/>
            <Results vendors={vendors} remFav={removeFav} addFav={favTruck} favorites={favorites} dist={importDistance}/>
          </div>
      } />
      <Route path="/vendor/:id" element={
          <div>
            <Header togView={toggleView} />
            {/* <TruckDetails /> */}
            {/* //params.match, need to pass down the id that is clicked as a prop to truck details to element specfic truck info */}
          </div>
      } />
      <Route path="/vendor-view" element={
          <div>
            <Header togView={toggleView} />
            <VendorView toggleLive={sendMessage} vendor={vendors.find(v => v.id == 1)} />
          </div>
      } />
      <Route path="*" element={
        <Header togView={toggleView} />
      } />
    </Routes>
  
  )
}

export default App;