import React, { useEffect, useState } from 'react'
import notFav from '../../assets/notFav.png'
import Fav from '../../assets/fav.png'
import notDownvoted from '../../assets/notDownvoted.png'
import notUpvoted from '../../assets/notUpvoted.png'
import downvoted from '../../assets/downvoted.png'
import upvoted from '../../assets/upvoted.png'
import pin from '../../assets/pin.png'
import './TruckCard.css'

const TruckCard = (props) => {
  const [isFavorite, setIsFavorite] = useState(false)
  const [isDownvoted, setIsDownvoted] = useState(false)
  const [isUpvoted, setIsUpvoted] = useState(false)
  console.log(props.truck, 'in truck card')

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
      props.truck.userUpvote = true
    } else {
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
      props.truck.userDownvote = true
    } else {
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
      <p className="distance">0.4 miles</p>

      <div className="status-container">
        <p className="status">{props.truck.status}</p>
        <img className="pin" src={pin}></img>
        <p className="location">{props.truck.location}</p>
          {/* we're going to need to figure out what to do with the props.truck.location coordinates to make them display in a way that's like, readable for a human being */}
          {/* we're also going to need to figure out how to do a distance calculation based on lat/long coordinates */}
      </div>
      <p className="name">{props.truck.name}</p>
      <p className="tags">{props.truck.tags}</p>

      <div className="votes-container">
        <img 
        className="notUpvoted icon" 
        alt="empty thumbs up icon" 
        src={currentUpvote} 
        onClick={() => handleUpvote()}
        height={50} width={50} />
        <p className="upvotes">{props.truck.up_rating}</p>
        <img 
        className="downvoted icon" 
        alt="downvoted icon" 
        src={currentDownvote} 
        onClick={() => handleDownvote()}
        height={50} width={50}/>
        <p className="downvotes">{props.truck.down_rating}</p>
      </div>

    </div>
    </div>
  )
}

export default TruckCard;