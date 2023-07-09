import React, { useEffect, useState } from 'react'
import notFav from '../../assets/notFav.png'
import Fav from '../../assets/fav.png'
import notDownvoted from '../../assets/notDownvoted.png'
import notUpvoted from '../../assets/notUpvoted.png'
import downvoted from '../../assets/downvoted.png'
import upvoted from '../../assets/upvoted.png'

const TruckCard = ({ truck, addFav }) => {
  return(
    <div>
      {/* <img className="notFav icon" alt="empty star icon" src={notFav} onClick={(event) => addFav(truck)}/> */}
      {/* <img className="fav icon" alt="favorited icon" src={[truck.favorite]} onClick={(event) => addFav(truck)}/> */}
      {/* src= truck.favorite is equal to "Fav" or "notFav", which is assigned as a string within the Results component. Those strings refer to the image imports above and hopefully render the right image. This might not work when the data is actually in place, since I don't think the Results component automatically re-renders upon click of either of these images */}
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