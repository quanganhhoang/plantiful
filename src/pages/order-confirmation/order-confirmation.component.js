import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import {
    selectCartItems,
    selectCartTotal,
    selectConfirmationId
} from '../../redux/cart/cart.selectors';

import {
    OrderConfirmationPageContainer,
    OrderConfirmationHeaderContainer,
    HeaderBlockContainer,
    InfoContainer,
    TotalContainer,
    ConfirmationMessage
} from './order-confirmation.styles';

import FormInput from '../../components/form-input/form-input.component';

import CustomButton from '../../components/custom-button/custom-button.component'

import { submitOrder } from '../../redux/cart/cart.actions'

const INITIAL_STATE = {
    email: '',
    name: '',
    phoneNumber: ''
}

export const OrderConfirmationPage = ({ cartItems, total, submitOrder, confirmationId }) => {
    const [userCredentials, setUserCredentials] = useState(INITIAL_STATE);
    const [confirmationMessage, setConfirmationMessage] = useState('');

    const handleChange = event => {
        const { value, name } = event.target;
        setUserCredentials({ 
            ...userCredentials,
            [name]: value 
        });
    };

    const handleSubmit = event => {
        event.preventDefault();
        if (validateInformation(userCredentials, cartItems)) {
            submitOrder(userCredentials, cartItems, total)
            setUserCredentials(INITIAL_STATE);
            setConfirmationMessage(`Your order has been submitted. Here is your confirmation order: ${confirmationId}`);
        } else if (!Array.isArray(cartItems) || !cartItems.length) {
            setConfirmationMessage('Did you forget to pick your favorite plants? :)');
        } else {
            setConfirmationMessage('Please fill out all information above.');
        }
    }

    const validateInformation = (userCredentials, cartItems) => {
        const { name, email, phoneNumber } = userCredentials;
        if (name === "" || email === "" || phoneNumber === "") {
            return false;
        } else if (!Array.isArray(cartItems) || !cartItems.length) {
            return false;
        }

        return true;
    }

    const { name, email, phoneNumber } = userCredentials;

    return (
        <OrderConfirmationPageContainer>
            <InfoContainer>
                Please enter your contact information and we will reach out to you with pick-up information asap!
            </InfoContainer>
            <div style={{width: '100%', marginBottom: '50px'}}>
                <form>
                    <FormInput
                        name='name'
                        type='name'
                        value={name}
                        handleChange={handleChange}
                        label='name'
                        required
                    />
                    <FormInput
                        name='email'
                        type='email'
                        handleChange={handleChange}
                        value={email}
                        label='email'
                        required
                    />
                    <FormInput
                        name='phoneNumber'
                        type='phoneNumber'
                        value={phoneNumber}
                        handleChange={handleChange}
                        label='phone number'
                        required
                    />
                </form>
            </div>
 
            <OrderConfirmationHeaderContainer>
                <HeaderBlockContainer>
                    <span>Product</span>
                </HeaderBlockContainer>
                <HeaderBlockContainer>
                    <span>Description</span>
                </HeaderBlockContainer>
                <HeaderBlockContainer>
                    <span>Quantity</span>
                </HeaderBlockContainer>
                <HeaderBlockContainer>
                    <span>Price</span>
                </HeaderBlockContainer>
                <HeaderBlockContainer>
                    <span>Remove</span>
                </HeaderBlockContainer>
            </OrderConfirmationHeaderContainer>
            {cartItems.map(cartItem => (
                <CheckoutItem key={cartItem.name} cartItem={cartItem} />
            ))}
            <TotalContainer>TOTAL: ${total}</TotalContainer>

            {confirmationMessage === '' ? '' 
            : <ConfirmationMessage>
                {confirmationMessage}
            </ConfirmationMessage>}

            <CustomButton
                onClick={e => handleSubmit(e)}
            >
                Submit
            </CustomButton>
        </OrderConfirmationPageContainer>
    );
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal,
    confirmationId: selectConfirmationId
});

const mapDispatchToProps  = (dispatch) => {
    return {
        submitOrder: (userCredentials, cartItems, total) => dispatch(submitOrder(userCredentials, cartItems, total))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderConfirmationPage);
