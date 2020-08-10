import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { addItem } from '../../redux/cart/cart.actions';

import {
    CollectionItemContainer,
    CollectionFooterContainer,
    AddButton,
    BackgroundImage,
    NameContainer,
    PriceContainer
} from './collection-item.styles';

export const CollectionItem = ({ item, addItem, history }) => {
    const { name, price, image } = item;
    const catalogUrl = name.toLowerCase().split(' ').join('-');
    
    return (
        <CollectionItemContainer>
            <BackgroundImage 
                className='image' 
                imageUrl={image} 
                onClick={() => history.push({
                    pathname: `/catalog/${catalogUrl}`,
                    state: {
                        item
                    }
                })}
            />   
            <CollectionFooterContainer>
                <NameContainer>{name}</NameContainer>
                <PriceContainer>{price}</PriceContainer>
            </CollectionFooterContainer>
            <AddButton onClick={() => addItem(item)} inverted>
                Add to cart
            </AddButton>
        </CollectionItemContainer>
    );
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default withRouter(connect(
    null,
    mapDispatchToProps
)(CollectionItem));
