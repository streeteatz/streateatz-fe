import React, { useEffect, useState } from 'react'
import notFav from '../../assets/notFav.png'
import Fav from '../../assets/fav.png'
import notDownvoted from '../../assets/notDownvoted.png'
import notUpvoted from '../../assets/notUpvoted.png'
import downvoted from '../../assets/downvoted.png'
import upvoted from '../../assets/upvoted.png'
import { NavLink } from 'react-router-dom';
import pin from '../../assets/pin.png'
import './TruckCard.css'

const TruckCard = (props) => {
  const [isFavorite, setIsFavorite] = useState(false)
  const [isDownvoted, setIsDownvoted] = useState(false)
  let [downVote, setDownVote] = useState(parseInt(props.truck.down_rating))
  let [upVote, setupVote] = useState(parseInt(props.truck.up_rating))
  const [isUpvoted, setIsUpvoted] = useState(false)
  
  // const getDistance = () => {
  //   let truckLocation = props.truck.location
  //   const userLocation = "41.905580, -87.688060"
  //   const [lat2, lon2] = truckLocation.split(", ")
  //   const [lat1, lon1] = userLocation.split(", ")
  //   var R = 6371; // Radius of the earth in km
  //   var dLat = deg2rad(lat2-lat1);  // deg2rad below
  //   var dLon = deg2rad(lon2-lon1); 
  //   var a = 
  //     Math.sin(dLat/2) * Math.sin(dLat/2) +
  //     Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
  //     Math.sin(dLon/2) * Math.sin(dLon/2)
  //     ; 
  //   var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  //   var d = R * c; // Distance in km
  //   console.log(props.dist(kmToMiles(d).toFixed(2)), 'in truckCard')
  //   return kmToMiles(d).toFixed(2);
  // }
  // function deg2rad(deg) {
  //   return deg * (Math.PI/180)
  // }
  // function kmToMiles(km) {
  //   const milesPerKm = 0.62137119;
  //   return km * milesPerKm;
  // }
const handleFav = () => {
  setIsFavorite(!isFavorite)
  if (!isFavorite) {
    props.truck.favorited = true
    props.addFav(props.truck)
  } else {
    props.truck.favorited = false
    props.remFav(props.truck)
  }
}

const handleUpvote = () => {
  if (isDownvoted) {
    return
  } else {
    setIsUpvoted(!isUpvoted)
    if (!isUpvoted) {
      setupVote(upVote += 1)
      props.truck.userUpvote = true
    } else {
      setupVote(upVote += -1)
      props.truck.userUpvote = false
    }
  }
}
const handleDownvote = () => {
  if (isUpvoted) {
    return
  } else {
    setIsDownvoted(!isDownvoted)
    if (!isDownvoted) {
      setDownVote(downVote += 1)
      props.truck.userDownvote = true
    } else {
      setDownVote(downVote += -1)
      props.truck.userDownvote = false
    }
  }
}
const currentStar = isFavorite ? Fav : notFav
const currentUpvote = isUpvoted ? upvoted : notUpvoted
const currentDownvote = isDownvoted ? downvoted : notDownvoted
const starAltText = isFavorite ? "Favorited Food Truck Star" : "Not Favorited Food Truck Star"
  return(
    <div className="truck-card">
    <img 
    className="star-icon" 
    alt={starAltText} 
    src={currentStar} 
    onClick={() => handleFav()} 
    height={50} width={50}/> 
  <img className="image" src={props.truck.img}/>  
    <div className="details-container">
      {/* <p className="distance">{getDistance()} miles away</p> */}
      <div className="status-container">
        <p className="status">{props.truck.status}</p>
        <img className="pin" src={pin}></img>
        <p className="location">{props.truck.location}</p>
          {/* we're going to need to figure out what to do with the props.truck.location coordinates to make them display in a way that's like, readable for a human being */}
          {/* we're also going to need to figure out how to do a distance calculation based on lat/long coordinates */}
      </div>
      <NavLink to={`/vendor/${props.truck.id}`}>
          <p className="name">{props.truck.name}</p>
      </NavLink>
      <p className="tags">{props.truck.tags}</p>
      <div className="votes-container">
        <img 
        className="notUpvoted icon" 
        alt="empty thumbs up icon" 
        src={currentUpvote} 
        onClick={() => handleUpvote()}
        height={50} width={50} />
        <p className="upvotes">{upVote}</p>
        <img 
        className="downvoted icon" 
        alt="downvoted icon" 
        src={currentDownvote} 
        onClick={() => handleDownvote()}
        height={50} width={50}/>
        <p className="downvotes">{downVote}</p>
      </div>
    </div>
  </div>
)
}

export default TruckCard;