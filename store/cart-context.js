import { createContext, useReducer} from "react";
import { useEffect } from "react";
import  { toast } from 'react-hot-toast';


   const getLocalStorage = () => {
   if (typeof window !== 'undefined') {
      return JSON.parse(localStorage.getItem('cart'))
   }
}






const initialState = {
 items: getLocalStorage() || [],
 totalAmount: 0
}

const cartReducer = (state, action) => {
 if (action.type === 'ADD') {

  const newTotalAmount = state.totalAmount + action.payload.price * action.payload.amount
  const existingCartItemIndex = state.items.findIndex(item => item.id === action.payload.id)
  const existingCartItem = state.items[existingCartItemIndex] 
  let updatedItems
  if (existingCartItem) {
   const updatedItem = {
    ...existingCartItem,
    amount: existingCartItem.amount + action.payload.amount
   }
   localStorage.setItem('cart', JSON.stringify(updatedItem))
   toast.error('This item is in your cart already')
   updatedItems = [...state.items]
   updatedItems[existingCartItemIndex] = updatedItem
  } else {
     toast.success('Item has added to your cart')
     updatedItems = state.items.concat(action.payload)
     localStorage.setItem('cart', JSON.stringify(updatedItems))
  }


  
  return {
   items: updatedItems,
   totalAmount: newTotalAmount
  }
 }
 if (action.type === 'REMOVE') {
  const newItems = state.items.filter(item => item.id !== action.payload)
  
  return {
   items: newItems,
   // totalAmount: updatedTotalAmount
  }
 }

 return initialState
}

export const CartContext = createContext({
 cartItems: [],
 totalAmount: 0,
 addItemToCart: (item) => {},
 removeItemFromCart: (id) => {}
})

export default function CartContextProvider({children}) {
 const [state, dispatch] = useReducer(cartReducer, initialState)

 const addItemToCart = (item) => {
  dispatch({type: 'ADD', payload: item})
 }

 const removeItemFromCart = (id) => {
  
  dispatch({type: 'REMOVE', payload: id})
 }

 useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.items))
 }, [state.items])


 const contextValue = {
  cartItems: state.items,
  totalAmount: state.totalAmount,
  addItemToCart,
  removeItemFromCart,
 }




 return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
}