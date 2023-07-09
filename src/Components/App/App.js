import React, { useEffect, useState } from 'react';
import Header from '../Header/Header'
import Results from '../Results/Results'
import Search from '../Search/Search'
import VendorView from '../VendorView/VendorView'

const App = () => {
  const [vendors, setVendors] = useState([1, 2, 3, 4])
  const [currentUser, setCurrentUser] = useState('customer')
  const [favorites, setFavorites] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const favTruck = (truck) => {
    if (!favorites.contains(truck)) {
      const newFavState = [...favorites, truck]
      setFavorites(newFavState)
    } else {
      const newFavState = favorites.filter(fav => {
        return fav.id != truck.id
      })
      setFavorites(newFavState)
    }
  }

  const removeFav = (truck) => {
// filter over vendors and !== the paramter truck and reset state
  }

  const searchResults = (searchValue) => {
    //this is going to take in whatever the search value and based upon the search value it will iterate over the vendors and update the vendors state accordingly

    // now if we are passing down the name of a  truck or location of truck then we just need to iteratre over vendors and filter where we see fit
  }

  const toggleView = (id) => {
    setCurrentUser(id);
  }

  const filterChosenVendor = () => {

  }

const fetchData = () => {
  // this is going to fetch the data and then set state but then also reset isLoading to false
}
  useEffect(() => {
    fetchData();
// call in mock data somehow and establish it as the state of vendors
  }, [])



  return(
    currentUser ? 
    <div>
      <h1>App</h1>
      <Header togView={toggleView}/>
      <Search vendors={vendors} search={searchResults}/>
      <Results vendors={vendors} remFav={removeFav} addFav={favTruck} favorites={favorites}/>
    </div> :
    <div>
      <Header togView={toggleView}/>
      <VendorView vendors={vendors}/>
    </div>
  )
}

export default App;