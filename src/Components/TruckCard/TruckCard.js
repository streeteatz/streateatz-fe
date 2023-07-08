import React, { useEffect, useState } from 'react'
import notFav from '../../assets/notFav.png'
import Fav from '../../assets/fav.png'
import notDownvoted from '../../assets/notDownvoted.png'
import notUpvoted from '../../assets/notUpvoted.png'
import downvoted from '../../assets/downvoted.png'
import upvoted from '../../assets/upvoted.png'

const TruckCard = ({ truck, addFav, remFav }) => {
  return(
    <div>
      <img className="notFav icon" alt="empty star icon" src={notFav} onClick={(event) => addFav(truck)}/>
      <img className="fav icon" alt="favorited icon" src={Fav}/>
      <img className="notDownvoted icon" alt="empty thumbs down icon" src={notDownvoted} />
      <img className="notUpvoted icon" alt="empty thumbs up icon" src={notUpvoted} />
      <img className="downvoted icon" alt="downvoted icon" src={downvoted} />
      <img className="upvoted icon" alt="upvoted icon" src={upvoted} />
      <p className="name">Name</p>
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