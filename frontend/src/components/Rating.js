import React from 'react'
import Star from './Star'
const Rating = ({ rating, reviewCount }) => {
  return (
    <>
      {[...Array(5)].map((e, i) => (
        <Star rating={rating} index={i} />
      ))}{' '}
      {reviewCount} reviews
    </>
  )
}

export default Rating
