import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteProduct } from '../../actions/product';

const Product = ({ product }) => {
  const { name, price, id } = product;
  const dispatch = useDispatch();

  const handleDeleteProduct = (id) => {
    dispatch(deleteProduct(id));
  }

  return (
      <tr>
          <td>{name}</td>
          <td>
              <span className="font-weight-bold">$ {price}</span>
          </td>
          <td className='acciones'>
            <Link to={`/products/edit/${id}`} className='btn btn-primary mr-2'>
              Edit
            </Link>
            <button type='button' className='btn btn-danger' onClick={() => handleDeleteProduct(id)}>
              Eliminar
            </button>
          </td>
      </tr>
  );
}
 
export default Product;