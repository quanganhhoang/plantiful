import React, { useEffect, lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchProductsStart } from '../../redux/shop/shop.actions';

import Spinner from '../../components/spinner/spinner.component';

import { ShopPageContainer } from './shop.styles';

const CollectionsOverviewContainer = lazy(() =>
    import('../../components/collections-overview/collections-overview.container')
);

const CollectionPageContainer = lazy(() =>
    import('../collection/collection.container')
);

export const ShopPage = ({ fetchProductsStart, match }) => {
    useEffect(() => {
        fetchProductsStart();
    }, [fetchProductsStart]);

    return (
        <ShopPageContainer>
            <Suspense fallback={<Spinner />}>
                <Route
                    exact
                    path={`${match.path}`}
                    component={CollectionsOverviewContainer}
                />
                <Route
                    path={`${match.path}/:collectionId`}
                    component={CollectionPageContainer}
                />
            </Suspense>
        </ShopPageContainer>
    );
};

const mapDispatchToProps = dispatch => ({
    fetchProductsStart: () => dispatch(fetchProductsStart())
});

export default connect(
    null,
    mapDispatchToProps
)(ShopPage);
