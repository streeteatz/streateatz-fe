import React from 'react';

const Error = ({ message }) => {
  if (message === "url") {
    return(
      <p>This is an error message</p>
    )
  }
}

export default Error;