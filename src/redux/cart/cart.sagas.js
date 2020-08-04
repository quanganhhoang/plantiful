import { all, call, takeLatest, put } from 'redux-saga/effects';

import UserActionTypes from '../user/user.types';
import { clearCart } from './cart.actions';

import {
    addOrderRequest,
    viewRequests,
} from '../../firebase/firebase.utils';
import CartActionTypes from './cart.types';

export function* clearCartOnSignOut() {
    yield put(clearCart());
}

export function* submitOrder({ payload : {userCredentials, cartItems, total} }) {
    yield addOrderRequest(userCredentials, cartItems, total);
    yield viewRequests();
}

export function* onSignOutSuccess() {
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* onSubmitOrder() {
    yield takeLatest(CartActionTypes.SUBMIT_ORDER, submitOrder);
}

export function* cartSagas() {
    yield all([
        call(onSignOutSuccess),
        call(onSubmitOrder)
    ]);
}
