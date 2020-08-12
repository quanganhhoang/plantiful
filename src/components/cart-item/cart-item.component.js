import React from 'react';

import {
    CartItemContainer,
    ItemDetailsContainer,
    CartItemImage
} from './cart-item.styles';

const CartItem = ({ item: { previewImageUrl, price, name, quantity } }) => (
    <CartItemContainer>
        <CartItemImage src={previewImageUrl} alt='item' />
        <ItemDetailsContainer>
            <span>{name}</span>
            <span>
            {quantity} x ${price}
            </span>
        </ItemDetailsContainer>
    </CartItemContainer>
);

export default React.memo(CartItem);
