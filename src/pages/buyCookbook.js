import React from 'react';
import Product from '../components/product';

const IndexPage = () => {
    const Bookitem = {price: process.env.BOOK_WITH_IPAD_ITEM, quantity: 1};
    const ipad = {price: process.env.BOOK_WITH_IPAD_ITEM, quantity: 1}
    return (
    <div>
        <Product label ={"Buy Book And Ipad at $120"} lineItems = {[Bookitem, ipad]} />
        <Product label ={"Buy Book"} lineItems = {[Bookitem]}/>
      </div>
    )
}


export default IndexPage;