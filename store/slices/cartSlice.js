import { produce } from "immer"

// Action Types
export const CART_ADD_ITEM = 'cart/addItem'
const CART_REMOVE_ITEM = 'cart/removeItem'
const CART_ITEM_INCREASE_QUANTITY = 'cart/increaseItemQuantity'
const CART_ITEM_DECREASE_QUANTITY = 'cart/decreaseItemQuantity'

// Action Creators
export function addCartItem(productData) {
  return { type: CART_ADD_ITEM, payload: productData }
}

export function removeCartItem(productId) {
  return { type: CART_ADD_ITEM, payload: { productId } }
}

export function decreaseCartItemQuantity(productId) {
  return {
    type: CART_ITEM_DECREASE_QUANTITY,
    payload: { productId },
  }
}

export function increaseCartItemQuantity(productId) {
  return {
    type: CART_ITEM_INCREASE_QUANTITY,
    payload: { productId },
  }
}

// Reducer
export default function cartReducer(orginalState = [], action) {
  return produce(orginalState, (state) => {
    const existingCartItemIndex = state.findIndex((item) => item.productId === action.payload.productId)
    switch (action.type) {
      case CART_ADD_ITEM:
        if (existingCartItemIndex !== -1) {
          state[existingCartItemIndex].quantity += 1
          break
        }
        state.push({ ...action.payload, quantity: 1 })
        break
      case CART_REMOVE_ITEM:
        state.splice(existingCartItemIndex, 1)
        break
      case CART_ITEM_INCREASE_QUANTITY:
        state[existingCartItemIndex].quantity += 1
        break

      case CART_ITEM_DECREASE_QUANTITY:
        state[existingCartItemIndex].quantity -= 1
        if (state[existingCartItemIndex].quantity === 0) {
          state.splice(existingCartItemIndex, 1)
        }
        break
      default:
        break
    }
    return state
  })
}



//Old version :-----

// switch (action.type) {
//   case CART_ADD_ITEM:
//     const existingCartItem = state.find((item) => item.productId === action.payload.productId)

//     if (existingCartItem) {
//       return state.map((item) => {
//         if (item.productId === existingCartItem.productId) {
//           return { ...item, quantity: item.quantity + 1 }
//         }
//         return item;
//       })
//     }

//     return [...state, {...action.payload,quantity: 1}]
//   case CART_REMOVE_ITEM:
//     return state.filter(
//       (cartItem) => cartItem.productId !== action.payload.productId
//     )
//   case CART_ITEM_INCREASE_QUANTITY:
//     return state.map((cartItem) => {
//       if (cartItem.productId === action.payload.productId) {
//         return { ...cartItem, quantity: cartItem.quantity + 1 }
//       }
//       return cartItem
//     })

//   case CART_ITEM_DECREASE_QUANTITY:
//     return state
//       .map((cartItem) => {
//         if (cartItem.productId === action.payload.productId) {
//           return { ...cartItem, quantity: cartItem.quantity - 1 }
//         }
//         return cartItem
//       })
//       .filter((cartItem) => cartItem.quantity > 0)
//   default:
//     return state
// }