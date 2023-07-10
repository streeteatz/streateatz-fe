import React, { useEffect, useState } from 'react'
import notFav from '../../assets/notFav.png'
import Fav from '../../assets/fav.png'
import notDownvoted from '../../assets/notDownvoted.png'
import notUpvoted from '../../assets/notUpvoted.png'
import downvoted from '../../assets/downvoted.png'
import upvoted from '../../assets/upvoted.png'

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
    <div>
      <img 
      className="star icon" 
      alt={starAltText} 
      src={currentStar} 
      onClick={() => handleFav()} 
      height={50} width={50}/> 
      {/* <img className="fav icon" alt="favorited icon" src={[truck.favorite]} onClick={(event) => handleFav(truck)} /> */}
      {/* src= truck.favorite is equal to "Fav" or "notFav", which is assigned as a string within the Results component. Those strings refer to the image imports above and hopefully render the right image. This might not work when the data is actually in place, since I don't think the Results component automatically re-renders upon click of either of these images */}
      {/* <img className="notDownvoted icon" alt="empty thumbs down icon" src={notDownvoted} height={50} width={50}/> */}
      <img 
      className="downvoted icon" 
      alt="downvoted icon" 
      src={currentDownvote} 
      onClick={() => handleDownvote()}
      height={50} width={50}/>
      <img 
      className="notUpvoted icon" 
      alt="empty thumbs up icon" 
      src={currentUpvote} 
      onClick={() => handleUpvote()}
      height={50} width={50} />
      {/* <img className="upvoted icon" alt="upvoted icon" src={upvoted} height={50} width={50}/> */}
      <p className="name">{props.truck.name}</p>
      <p className="location">Location</p>
      <p className="distance">Distance</p>
      <p className="status">Status</p>
      <p className="tags">Tags</p>
      <p className="upvotes">Upvote</p>
      <p className="downvotes">Downvote</p>
      <div className="fake-image"></div>
    </div>
  )
}

export default TruckCard;