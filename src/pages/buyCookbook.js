import React from 'react';
import Product from '../components/product';

const IndexPage = () => {
    const Bookitem = {price: {process.env.BOOK_ITEM}, quantity: 1};
    return (
    <div>
        <Product label ={"Buy Book"} lineItems = {[Bookitem]}/>
      </div>
    )
}


export default IndexPage;