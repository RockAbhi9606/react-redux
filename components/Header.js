import React from 'react'
import { Link } from 'react-router-dom'
import CartIcon from '../assets/cart-icon.svg'
import { useSelector } from 'react-redux'

export default function Header() {
  const cartItems = useSelector((state) => state.cartItems)
  const wishList = useSelector((state) => state.wishList)
  return (
    <header>
      <div className="header-contents">
        <h1>
          <Link to="/">Shopee</Link>
        </h1>

        <div className="icons-container">
          <Link className="cart-icon" to="/wishlist">
            <div className="wishlist icon">
              <i className="wishlistIcon fa-solid fa-heart" style={{ color: '#ef0b0b' }}></i>
              <div className="wishlist-items-count">{wishList.length}</div>
            </div>
          </Link>
          <Link className="cart-icon" to="/cart">
            <div className="cart icon">
              <img src={CartIcon} alt="cart-icon" />
              <div className="cart-items-count">{cartItems.reduce((accumulator, currentItem) => accumulator + currentItem.quantity, 0)}</div>
            </div>
          </Link>
        </div>
      </div>
    </header>
  )
}
