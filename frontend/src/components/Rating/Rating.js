import React from 'react'
import Star from '../Star/Star'
const Rating = ({ rating, numReviews }) => {
  return (
    <div>
      {[...Array(5)].map((e, i) => (
        <Star rating={rating} index={i} key={i} />
      ))}{' '}
      {numReviews} reviews
    </div>
  )
}

export default Rating
