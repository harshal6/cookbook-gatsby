import React from 'react';
import Product from '../components/product';

const IndexPage = () => {
    const Bookitem = {price: process.env.STRIPE_PUB_KEY, quantity: 1};
    return (
    <div>
        <Product label ={"Buy Book"} lineItems = {[Bookitem]}/>
      </div>
    )
}


export default IndexPage;