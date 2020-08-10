import ShopActionTypes from './shop.types';

import {
    firestore,
} from '../../firebase/firebase.utils';

export const fetchProductsStart = () => ({
    type: ShopActionTypes.FETCH_PRODUCTS_START
});

export const fetchProductsSuccess = (products) => ({
    type: ShopActionTypes.FETCH_PRODUCTS_SUCCESS,
    payload: products
});

export const fetchPlantsSuccess = plants => ({
    type: ShopActionTypes.FETCH_PLANTS_SUCCESS,
    payload: plants
});

export const fetchStemsSuccess = stems => ({
    type: ShopActionTypes.FETCH_STEMS_SUCCESS,
    payload: stems
});

export const fetchProductsFailure = errorMessage => ({
    type: ShopActionTypes.FETCH_PRODUCTS_FAILURE,
    payload: errorMessage
});

export const fetchProductsStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('plants');
        dispatch(fetchProductsStart());

        collectionRef
            .get()
            .then(snapshot => {
                dispatch(fetchProductsSuccess(snapshot));
            })
            .catch(error => dispatch(fetchProductsFailure(error.message)));
    };
};
