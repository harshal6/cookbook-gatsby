import React from 'react';
import Product from '../components/product';

const IndexPage = () => {
    const stripe_key = process.env.STRIPE_PUB_KEY;
    const Bookitem = {price: stripe_key, quantity: 1};
    return (
    <div>
        <Product label ={"Buy Book"} lineItems = {[Bookitem]}/>
      </div>
    )
}


export default IndexPage;