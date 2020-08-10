import CartActionTypes from './cart.types';

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
});

export const removeItem = item => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: item
});

export const clearItemFromCart = item => ({
    type: CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item
});

export const clearCart = () => ({
    type: CartActionTypes.CLEAR_CART
});

export const submitOrder = (userCredentials, cartItems, total) => ({
    type: CartActionTypes.SUBMIT_ORDER,
    payload: { userCredentials, cartItems, total }
});

export const submitOrderSuccess = (confirmationId) => ({
    type: CartActionTypes.SUBMIT_ORDER_SUCCESS,
    payload: confirmationId
})
