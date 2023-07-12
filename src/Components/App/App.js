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

const App = () => {
  const [vendors, setVendors] = useState([])
  const [currentUser, setCurrentUser] = useState('customer')
  const [favorites, setFavorites] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [truckLocation, setTruckLocation] = useState([])
  const [userLocation, setUserLocation] = useState('')

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

  // const importDistance = (miles) => {
  // setTruckLocation(...miles)
  // return miles
// }

  const removeFav =  (truck) => {
// filter over vendors and !== the paramter truck and reset state

  const newFavState = favorites.filter((fav) => fav.id !== truck.id)
  setFavorites(newFavState)
  }

  const searchResults = (searchValue) => {
    let lowerSearchValue = searchValue.toLowerCase()
    let nameSearchResults = vendors.filter((v) => v.name.toLowerCase().includes(lowerSearchValue) || v.tags.toLowerCase().includes(lowerSearchValue) || v.description.toLowerCase().includes(lowerSearchValue))
    setVendors(nameSearchResults)
    //this is going to take in whatever the search value and based upon the search value it will iterate over the vendors and update the vendors state accordingly

    // now if we are passing down the name of a  truck or location of truck then we just need to iteratre over vendors and filter where we see fit
  }
  const searchButtons = (event, button) => {
    event.preventDefault();
    if (button === "favorites") {  
      setVendors(favorites)
      // setVendors(vendors.filter(v => v.favorited === true))
    } 
    if (button === "openNow") {
      setVendors(vendors.filter(v => v.status === "true"))
    }
    // if (button === "closest") {
      
    // }
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
  setVendors( thisData)
  // this is going to fetch the data and then set state but then also reset isLoading to false
}
  useEffect(() => {
    fetchData();
// call in mock data somehow and establish it as the state of vendors
  }, [])

  return(
    <div>
      <Header togView={toggleView} currentUser={currentUser}/>
      <Routes>
        <Route path="/" element={
          <div>
            <Search vendors={vendors} search={searchResults} reset={resestResults} allSearch={searchButtons}/>
            <Results vendors={vendors} remFav={removeFav} addFav={favTruck} favorites={favorites} />
          </div>
        } />
      <Route path="/vendor/:id" element={<TruckDetails vendors={vendors}/>}
      />
      <Route path="/vendor-view" element={
        <div>
          <VendorView vendors={vendors} />
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