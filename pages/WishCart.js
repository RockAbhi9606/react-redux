import React from 'react'
import WishList from '../components/WishList'
import { useSelector } from 'react-redux'

export default function WishCart() {
  const wishList = useSelector((state) => state.wishList)
  return (
    <div className="cart-container">
      <h2>Items in Your WishList</h2>
      <div className="cart-items-container">
        <div className="cart-header cart-item-container">
          <div className="cart-item">Item</div>
          <div className="item-price">Price</div>
          <div className="total">Total</div>
        </div>
        {
          wishList.map(({ productId, title, rating, price, imageUrl, quantity }) => (
            <WishList
              key={productId}
              productId={productId}
              title={title}
              price={price}
              quantity={quantity}
              imageUrl={imageUrl}
              rating={rating}
            />
          ))
        }
        <div className="cart-header cart-item-container">
          <div></div>
          <div></div>
          <div className="total">${wishList.reduce((acc, item) => acc + parseFloat((item.price).toFixed(2)), 0)}</div>
        </div>
      </div>
    </div>
  )
}
