import React from 'react'
import Star from '../Star/Star'
const Rating = ({ rating, numReviews }) => {
  return (
    <>
      {[...Array(5)].map((e, i) => (
        <Star rating={rating} index={i} />
      ))}{' '}
      {numReviews} reviews
    </>
  )
}

export default Rating
