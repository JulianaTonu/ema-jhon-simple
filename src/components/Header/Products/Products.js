import React from 'react';
import './Products.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
const Products = (props) => {
    // console.log(props)
    const {handleAddToCart} = props;
    const {name,img,price,ratings,seller}=props.product
    return (
        <div className='product'>
           <img src={img} alt="" />
           
           
            <div className='product-info'>
            <h2 >{name}</h2>
                <p>Price: {price}</p>
                <p><small>Seller: {seller}</small></p>
                <p><small>Ratings: {ratings} stars</small></p>
                
            </div>
                <button onClick={() => handleAddToCart(props.product)} className='btn-cart'>
                    <p>Add To Cart</p>
                    <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                </button>
        </div>
    );
};

export default Products;