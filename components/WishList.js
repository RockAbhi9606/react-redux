import React from 'react'
import { useDispatch } from 'react-redux'
import { removeWishListItem } from '../store/slices/wishListSlice'

export default function WishList({ productId, title, rating, price, imageUrl, quantity }) {
    const dispatch = useDispatch()
    return (
        <div className="cart-item-container">
            <div className="cart-item">
                <img src={imageUrl} alt={title} />
                <div>
                    <h3>{title}</h3>
                    <p>{rating} ★ ★ ★ ★</p>
                </div>
            </div>
            <div className="item-price">{price}</div>
            <div className="remove-item" onClick={() => {
                dispatch(removeWishListItem(productId))
            }}>
                <i class="fa-solid fa-trash"></i>
            </div>
        </div>
    )
}
