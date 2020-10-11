import React from 'react';
import Product from '../components/product';

const IndexPage = () => {
    const Bookitem = {price: 'price_1Hax4BLnbAKYBubgLorYxHKl', quantity: 1};
    const ipad = {price: 'price_1Hax3bLnbAKYBubgN7751o69', quantity: 1}
    return (
    <div>
        <Product label ={"Buy Book And Ipad at $120"} lineItems = {[Bookitem, ipad]} />
        <Product label ={"Buy Book"} lineItems = {[Bookitem]}/>
      </div>
    )
}


export default IndexPage;