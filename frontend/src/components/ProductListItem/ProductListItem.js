import { Link } from 'react-router-dom'

const ProductListItem = ({ id, name, price, category, countInStock }) => {
  const handleDelete = () => {
    console.log(`Delete item id ${id}`)
  }
  return (
    <>
      <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{price}</td>
        <td>{category}</td>
        <td>{countInStock}</td>
        <td>
          <i className='fas fa-trash' onClick={handleDelete}></i>
        </td>

        <td>
          <Link to={`/admin/products/${id}`}>edit</Link>
        </td>
      </tr>
    </>
  )
}

export default ProductListItem
