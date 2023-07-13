import React from 'react';

const Error = ({ message }) => {
  if (message === "url") {
    return(
      <p>You have reached a bad link. Check the URL and try again, or head back to the home page!</p>
    )
  } if (message === "fetch") {
    return (
    <p>Oops, something has gone wrong on our end, try again!</p>
    )
  }
}

export default Error;