import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../collection-preview/collection-preview.component';

import { 
    selectPlantsForPreview,
    selectStemsForPreview
} from '../../redux/shop/shop.selectors';
import { CollectionsOverviewContainer } from './collections-overview.styles';

export const CollectionsOverview = ({ plants, stems }) => (
    <CollectionsOverviewContainer>
        <CollectionPreview title="Plants" key="plants" items={plants} />
        <CollectionPreview title="Stems" key="stems" items={stems} />
    </CollectionsOverviewContainer>
);

const mapStateToProps = createStructuredSelector({
    plants: selectPlantsForPreview,
    stems: selectStemsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);
