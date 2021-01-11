import React from 'react'

const Star = ({ rating, index }) => {
  return (
    <>
      {rating - index >= 0.5 && rating - index < 1 ? (
        <i class='fas fa-star-half-alt'></i>
      ) : rating - index >= 1 ? (
        <i class='fas fa-star'></i>
      ) : (
        <i class='far fa-star'></i>
      )}
    </>
  )
}

export default Star
