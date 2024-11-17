import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART, INCREMENT_QUANTITY, DECREMENT_QUANTITY, APPLY_COUPON, REMOVE_COUPON } from '../actions/CartAction';

const initialState = {
    items: [],
    discount: 0,
    couponCode: ''
}

const CartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const existingProduct = state.items.find((item) => item.id === action.payload.id);
            if (existingProduct) {
                return {
                    ...state,
                    items: state.items.map((item) => item.id === action.payload.id ? {
                        ...item, quantity: item.quantity + 1
                    } : item
                    )
                }
            } else {
                return {
                    ...state,
                    items: [...state.items, { ...action.payload, quantity: 1 }]
                }
            }

        case REMOVE_FROM_CART:
            return {
                ...state,
                items: state.items.filter((item) => item.id !== action.payload)
            }

        case CLEAR_CART:
            return initialState;

        case INCREMENT_QUANTITY:
            return {
                ...state,
                items: state.items.map((item) => item.id === action.payload ? {
                    ...item, quantity: item.quantity + 1
                } : item)
            }

        case DECREMENT_QUANTITY:
            return {
                ...state,
                items: state.items.map((item) => item.id === action.payload && item.quantity > 1 ? {
                    ...item, quantity: item.quantity - 1
                } : item)
            }

        case APPLY_COUPON:
            return {
                ...state,
                discount: action.payload === '100Off' ? 100 : 0,
                couponCode: action.payload
            }

        case REMOVE_COUPON:
            return {
                ...state,
                discount: 0,
                couponCode: ''
            }

        default:
            return state;
    }

}

export default CartReducer;