import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectPlants = createSelector(
    [selectShop],
    shop => shop.plants
);

export const selectStems = createSelector(
    [selectShop],
    shop => shop.stems
);

export const selectPlantsForPreview = createSelector(
    [selectPlants],
    plants =>
    plants ? Object.keys(plants).map(key => plants[key]) : []
);

export const selectStemsForPreview = createSelector(
    [selectStems],
    stems =>
    stems ? Object.keys(stems).map(key => stems[key]) : []
);

export const selectIsProductFetching = createSelector(
    [selectShop],
    shop => shop.isFetching
);

export const selectIsProductsLoaded = createSelector(
    [selectShop],
    shop => !!shop.plants && !!shop.stems
);

export const selectCollection = (collectionUrlParam) => 
    createSelector(
        [selectShop],
        shop => shop[collectionUrlParam]
    );

