import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import { Link } from 'react-router-dom'

const Product = ({ product }) => {
  return (
    <Card>
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image}></Card.Img>
      </Link>

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
