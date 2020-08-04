import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item.component';

import { selectCollection } from '../../redux/shop/shop.selectors';

import { 
    Breadcrumbs, Crumb
} from '../../components/breadcrumbs/breadcrumb.styles';

import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer
} from './collection.styles';

export const CollectionPage = ({ collection }) => {
    const { title, items } = collection;
    return (
        <div>
            <Breadcrumbs>
                <Crumb>
                    <a href="/">Home</a>
                </Crumb>
                <Crumb>
                    <a href="/shop">Shop</a>
                </Crumb>
                <Crumb>
                    {title}
                </Crumb>
            </Breadcrumbs>
            <CollectionPageContainer>
                <CollectionTitle>{title}</CollectionTitle>
                <CollectionItemsContainer>
                    {items.map(item => (
                        <CollectionItem key={item.name} item={item} />
                    ))}
                </CollectionItemsContainer>
            </CollectionPageContainer>
        </div>
    );
};

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
