import ShopActionTypes from './shop.types';

const INITIAL_STATE = {
    plants: null,
    stems: null,
    isFetching: false,
    errorMessage: undefined
};

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ShopActionTypes.FETCH_PRODUCTS_START:
            return {
                ...state,
                isFetching: true
            };
        case ShopActionTypes.FETCH_PLANTS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                plants: action.payload
            };
        case ShopActionTypes.FETCH_STEMS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                stems: action.payload
            };
        case ShopActionTypes.FETCH_PRODUCTS_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            };
        default:
            return state;
    }
};

export default shopReducer;
