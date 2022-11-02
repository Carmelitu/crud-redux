import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../../actions/product';
import Product from '../Product';

const Products = () => {
  const dispatch = useDispatch();


  useEffect(() => {
    const products = () => dispatch(getProducts());
    products();
  }, [])
  
  const products = useSelector(state => state.products.products);
  const error = useSelector(state => state.products.error);
  const loading = useSelector(state => state.products.loading);

  return ( 
    <>
      <h2 className='text-center my-5'>Products List</h2>

      {error ? <p className='font-weight-bold alert alert-danger text-center mt-4'>There was an error</p> : null}
      {loading ? <p className='text-center'>Cargando...</p> : null}
      
      <table className='table table-striped'>
        <thead className='bg-primary table-dark'>
          <tr>
            <th scope='col'>Name</th>
            <th scope='col'>Price</th>
            <th scope='col'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.length === 0 ? 'There are no products to show' : (
            products.map(p => (
              <Product key={p.id} product={p} />
            ))
          )}
        </tbody>
      </table>
    </>
   );
}
 
export default Products;