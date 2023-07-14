import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import Results from '../Results/Results'
import Search from '../Search/Search'
import VendorView from '../VendorView/VendorView'
import TruckDetails from '../TruckDetails/TruckDetails'
import Error from '../Error/Error'
import { Routes, Route } from 'react-router-dom'
import { socket } from '../../utilities/socket'
import './App.css'
import { fetchAllTrucks, fetchAllMenus } from '../../utilities/apiCalls'


const App = () => {
  const [vendors, setVendors] = useState([])
  const [allMenuItems, setAllMenuItems] = useState([])
  const [currentUser, setCurrentUser] = useState('customer')
  const [currentVendor, setCurrentVendor] = useState(1)
  const [favorites, setFavorites] = useState([])
  const [error, setError] = useState('')
  const [truckLocation, setTruckLocation] = useState([])
  const [userLocation, setUserLocation] = useState('')
  const [pushNote, setPushNote] = useState([])


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
    socket.emit("send_data", { updatedVendors: vendors.filter(v => v.id !== truck.id), truck: truck })
  }

  const sendAddress = (location, truck) => {
    truck.address = location
    socket.emit("send_address", { vendor: truck, updatedVendors: vendors.filter(v => v.id !== truck.id) })
  }

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
    if (!nameSearchResults.length) {
      setError("search")
    } else {
      setVendors(nameSearchResults)
    }
  }
  
  const searchButtons = (event, button ) => {
    event.preventDefault()
    if (button === "favorites") {  
      setVendors(favorites)
    } 
    if (button === "openNow") {
      setVendors(vendors.filter(v => v.status === true))
      setVendors(vendors.filter(v => v.status === true))
    }
  }

  const toggleView = (id) => {
    setCurrentUser(id)
  }

  const resestResults = (event) => {
    setError('')
    event.preventDefault()
    fetchData()
  }
  const fetchData = async () => {
    try {
      const data = await fetchAllTrucks();
      const updatedVendors = data.data.attributes.map((vendor) => {
        const existingVendor = vendors.find((v) => v.id === vendor.id);
        if (existingVendor) {
          vendor.status = existingVendor.status;
        } else {
          vendor.status = false; // Set the default status to false for new vendors
        }
        return vendor;
      });
      setVendors(updatedVendors);
    } catch (error) {
      setError("fetch");
      console.log(error, "fetch");
    }
  };
  // const fetchData = async () => {
  //   try {
  //     const data = await fetchAllTrucks()
  //       setVendors(data.data.attributes)
  //     } catch(error) {
  //      setError("fetch")
  //      console.log(error, "fetch")
  //     }
  //   }

  useEffect(() => {
    fetchData()
    
    socket.on('receive_data', (data) => {
      console.log(data, 'dataaaaa')
      // setVendors([...data.updatedVendors, data.truck])
      console.log(data.truck, 'single truck')
      setVendors([data.truck, ...data.updatedVendors])
      setPushNote([...pushNote, { vendorName: data.truck.name }])
    });
    
    console.log(vendors, 'dataa 106')
    socket.on('receive_address', (data) => {
      setVendors([data.vendor, ...data.updatedVendors])
    })

    return () => {
      socket.off('receive_data');
      socket.off('receive_address')
    };
  }, [])

  return (
    <div className='app'>
      <Header togView={toggleView} currentUser={currentUser} notifs={pushNote}/>
      <Routes>
        <Route path="/" element={
          <div>
            <Search vendors={vendors} search={searchResults} reset={resestResults} allSearch={searchButtons}/>
            {error === "" ? (<Results vendors={vendors} remFav={removeFav} addFav={favTruck} favorites={favorites} />) : (error === "fetch" ?(<Error message={"fetch"} />) : (<Error message={"search"} />)) }
          </div>
        } />
      <Route path="/vendor/:id" element={<TruckDetails vendors={vendors} />}
      />
      <Route path="/vendor-view" element={
        <div>
          <VendorView toggleLive={sendData} getAddress={sendAddress} vendor={vendors.find(v => v.id == 9)} currentVendor={currentVendor}/>
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