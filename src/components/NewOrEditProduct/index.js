import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createNewProduct } from '../../actions/product';

const NewOrEditProduct = ({ isOnEditMode }) => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const dispatch = useDispatch();

    const addProduct = product => dispatch(createNewProduct(product))

    const submitNewProduct = (e) => {
        e.preventDefault();

        if (name.trim() === '' || price <= 0) {
            return;
        }

        addProduct({ name, price });
    }
    
    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            {isOnEditMode ? "Edit product" : "Add new product"}
                        </h2>
                        <form onSubmit={submitNewProduct}>
                            <div className="form-group">
                                <label>Product name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Product name"
                                    name="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label>Product price</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Product price"
                                    name="price"
                                    value={price}
                                    onChange={(e) => setPrice(+e.target.value)}
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary font-weigth-bold text-uppercase d-block w-100"
                            >
                                {isOnEditMode ? "Save changes" : "Add product"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default NewOrEditProduct;