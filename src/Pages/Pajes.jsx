import React from 'react'
import FlashDeals from '../components/flashDeals/FlashDeals'
import Home from '../components/mainpages/Home'
import NewArrivals from '../components/newarrivals/NewArrivals'
import TopCate from '../components/top/TopCate'
import Discount from '../components/discount/Discount'
import Shop from '../components/shop/Shop'
import Annu from '../components/annocuments/Annu'
import Wrapper from '../components/wrapper/Wrapper'

const Pajes = ({ productItems , CartItem, addToCart, shopItems}) => {
  return (
    <>
        <Home CartItem={CartItem}/>
        <FlashDeals productItems={productItems} addToCart={addToCart}/>
        <TopCate />
        <NewArrivals />
        <Discount />
        <Shop shopItems={shopItems} addToCart={addToCart}/>
        <Annu />
        <Wrapper />
    </>
  )
}

export default Pajes