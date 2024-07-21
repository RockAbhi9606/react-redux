import { combineReducers, createStore } from 'redux'
import productsSlice from './slices/productsSlice'
import cartSlice from './slices/cartSlice'
import wishListSlice from './slices/wishListSlice'

const reducer = combineReducers({
  products: productsSlice,
  cartItems: cartSlice,
  wishList: wishListSlice,
})

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__?.()
)

// console.log(store)

// store.dispatch(addCartItem(1))
// store.dispatch(addCartItem(12))

// store.dispatch(increaseCartItemQuantity(12))

// store.dispatch(decreaseCartItemQuantity(12))
// store.dispatch(decreaseCartItemQuantity(12))

// store.dispatch(addWishListItem(18))
// store.dispatch(addWishListItem(11))

// store.dispatch(removeWishListItem(11))
// store.dispatch(removeWishListItem(18))
