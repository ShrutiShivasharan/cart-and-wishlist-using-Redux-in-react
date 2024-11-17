export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = ' REMOVE_FROM_CART';
export const CLEAR_CART = 'CLEAR_CART';
export const INCREMENT_QUANTITY = 'INCREMENT_QUANTITY';
export const DECREMENT_QUANTITY = 'DECREMENT_QUANTITY';
export const APPLY_COUPON = 'APPLY_COUPON';
export const REMOVE_COUPON = 'REMOVE_COUPON';

//functions
export const addToCart = (product) => ({
    type:ADD_TO_CART,
    payload: product
})

export const removeFromCart = (productId) => ({
    type : REMOVE_FROM_CART,
    payload : productId
})

export const clearCart = () => ({
    type : CLEAR_CART
})

export const incrementQuantity = (productId) => ({
    type : INCREMENT_QUANTITY,
    payload : productId
})

export const decrementQuantity = (productId) => ({
    type : DECREMENT_QUANTITY,
    payload : productId
})

export const applyCoupon = (code) => ({
    type:APPLY_COUPON,
    payload: code
})

export const removeCoupon = () => ({
    type :REMOVE_COUPON
})