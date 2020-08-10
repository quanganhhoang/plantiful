import { takeLatest, call, put, all } from 'redux-saga/effects';

import {
  firestore,
} from '../../firebase/firebase.utils';

import {
    fetchPlantsSuccess,
    fetchStemsSuccess,
    fetchProductsFailure
} from './shop.actions';

import ShopActionTypes from './shop.types';


export function* fetchProductsAsync() {
    try {
        const productRef = firestore.collection('plants');
        const snapshot = yield productRef.get();
        
        const plants = snapshot.docs.map(doc => {
            return {
                ...doc.data(),
                price: doc.data().plantPrice
            }      
        });
        const stems = plants.filter(product => product.isStemAvailable)
                            .map(stem => {
                                return {
                                    ...stem,
                                    price: stem.stemPrice
                                }
                            });

        yield put(fetchPlantsSuccess(plants));
        yield put(fetchStemsSuccess(stems));
    } catch (error) {
        yield put(fetchProductsFailure(error.message));
    }
}

export function* onWatchFetchProductsStart() {
    yield takeLatest(
        ShopActionTypes.FETCH_PRODUCTS_START,
        fetchProductsAsync
    );
}

export function* shopSagas() {
  yield all([call(onWatchFetchProductsStart)]);
}
