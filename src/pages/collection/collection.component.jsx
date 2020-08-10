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


export const CollectionPage = ({ items, match }) => {
    const title = match.params.collectionId;
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
                    { title.charAt(0).toUpperCase() + title.slice(1) }
                </Crumb>
            </Breadcrumbs>
            <CollectionPageContainer>
                <CollectionTitle>{ title.toUpperCase() }</CollectionTitle>
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
    items: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
