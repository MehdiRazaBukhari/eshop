import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'

const Product = ({ product }) => {
  return (
    <Card>
      <a href={`/product/${product._id}`}>
        <Card.Img src={product.image}></Card.Img>
      </a>

      <Card.Body>
        <a href={`/product/${product._id}`}>
          <Card.Title>{product.name}</Card.Title>
        </a>

        <Card.Text>
          <Rating rating={product.rating} reviewCount={product.numReviews} />
        </Card.Text>

        <Card.Text as='h3'>${product.price}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product
