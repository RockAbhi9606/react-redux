import { produce } from "immer"

// Action Types
const WISHLIST_ADD_ITEM = 'wishList/addItem'
const WISHLIST_REMOVE_ITEM = 'wishList/removeItem'

// Action Creators
export function addWishListItem(productData) {
  return { type: WISHLIST_ADD_ITEM, payload: productData }
}
export function removeWishListItem(productId) {
  return { type: WISHLIST_REMOVE_ITEM, payload: { productId } }
}

// Reducer
export default function wishListReducer(originalWishState = [], action) {
  return produce(originalWishState, (state) => {
    const existingWishListItemIndex = state.findIndex((item) => item.productId === action.payload.productId)
    switch (action.type) {
      case WISHLIST_ADD_ITEM:
        if (existingWishListItemIndex === -1) {
          state.push(action.payload)
          break
        } else {
          break
        }
      case WISHLIST_REMOVE_ITEM:
        state.splice(existingWishListItemIndex, 1)
        break
      default:
        break
    }
    return state
  })
}


//Old version

// switch (action.type) {
//   case WISHLIST_ADD_ITEM:
//     const existingWishListItem = state.find((item) => item.productId === action.payload.productId)
//     if (existingWishListItem) {
//       return state
//     }
//     return [...state, action.payload]

//   case WISHLIST_REMOVE_ITEM:
//     return state.filter(
//       (wishListItem) => wishListItem.productId !== action.payload.productId
//     )
//   default:
//     return state
// }







