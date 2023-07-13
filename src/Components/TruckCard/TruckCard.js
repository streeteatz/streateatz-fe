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
import { getDistance } from '../../utilities/distance-calculator'

const TruckCard = (props) => {
  const [isFavorite, setIsFavorite] = useState(false)
  const [isDownvoted, setIsDownvoted] = useState(false)
  let [downVote, setDownVote] = useState(parseInt(props.truck.down_rating))
  let [upVote, setupVote] = useState(parseInt(props.truck.up_rating))
  const [isUpvoted, setIsUpvoted] = useState(false)
  

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
        // props.truck.up_rating += 1 also parse int if backend data is a string
        // add line of code to direclty manipulate the data model
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
        // props.truck.up_rating += -1 also parse int if backend data is a string 
        // add line of code to direclty manipulate the data model
        props.truck.userDownvote = true
      } else {
        setDownVote(downVote += -1)
        props.truck.userDownvote = false
      }
    }
  }

  const translateStatus = (status) => {
    if (status === false) {
      return "closed"
    } else {
      return "open now"
    }
  }

  const currentStar = isFavorite ? Fav : notFav
  const currentUpvote = isUpvoted ? upvoted : notUpvoted
  const currentDownvote = isDownvoted ? downvoted : notDownvoted
  const starAltText = isFavorite ? "Favorited Food Truck Star" : "Not Favorited Food Truck Star"

  return(
    <div className="card-container">
      <img 
      className="star-icon" 
      alt={starAltText} 
      src={currentStar} 
      onClick={() => handleFav()} 
      height={50} width={50}/> 
      <img className="image" src={props.truck.img}/>
      <div className="card-details-container">
        <p className="distance">{getDistance(props.truck.location)} miles away</p>
        <div className="details-status-container">
          <button className="status-icon-open"></button>  
          <p className="status">{translateStatus(props.truck.status)}</p>
          <img className="pin" src={pin}></img>
          <p className="location">Placeholder address</p>
            {/* we're going to need to figure out what to do with the props.truck.location coordinates to make them display in a way that's like, readable for a human being */}
            {/* we're also going to need to figure out how to do a distance calculation based on lat/long coordinates */}
      </div>
      <NavLink to={`/vendor/${props.truck.id}`} style={{ textDecoration: 'none', color: "#2f2f2f" }}>
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