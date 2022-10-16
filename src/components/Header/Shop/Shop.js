import React, { useEffect, useState } from 'react';
// import {addToDb} from '../../utilities/fakedb'
import {addToDb ,getStoredCart} from '../../../utilities/fakedb'
import Products from '../Products/Products';
import './Shop.css'
import Cart from './../Cart/Cart';
const Shop = () => {
    const [products, setProducts]=useState([])
    const [cart, setCart]=useState([])
    useEffect(()=>{
        fetch(`products.json`)
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    useEffect(()=>{
        const storedcart =getStoredCart() ;
        console.log(storedcart)
        const savedCart =[]
        for(const id in storedcart){
            const addedProduct = products.find(product=> product.id === id)
            // console.log(id)
            if(addedProduct){
                const quantity = storedcart[id];
                addedProduct.quantity = quantity;

                savedCart.push(addedProduct)
            }
        }
        setCart(savedCart)
    },[products])


const handleAddToCart = (selectedProduct) =>{
    console.log(selectedProduct)

let newcart =[]
const exists =cart.find(product=>product.id ===selectedProduct.id)
if(!exists){
    selectedProduct.quantity=1;
    newcart =[...cart,selectedProduct]
}

else{
    const rest =cart.filter(product=>product.id !== selectedProduct.id)
    exists.quantity = exists.quantity + 1
    newcart =[...rest,exists]
}

    //cart.push(product)
    
    setCart(newcart)
    //add local storage
    addToDb(selectedProduct.id)
}

    return (
        <div className='container shop-container'>
            <div className=" container products-container">
                
                {
                    products.map(product => <Products 
                        key={product.key}
                        product ={product}
                        handleAddToCart ={handleAddToCart}
                        ></Products>)
                }
            </div>
            <div className="cart-container">
               
                <Cart 
                cart ={cart}

                ></Cart>
                

            </div>
        </div>
    );
};

export default Shop;