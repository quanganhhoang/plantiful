import React from 'react';
import { withRouter } from 'react-router-dom';

import CollectionItem from '../collection-item/collection-item.component';

import {
    CollectionPreviewContainer,
    TitleContainer,
    PreviewContainer
} from './collection-preview.styles';

export const CollectionPreview = ({
    title,
    items,
    history,
    match,
}) => (
    <CollectionPreviewContainer>
        <TitleContainer onClick={() => history.push(`${match.path}/${title.toLowerCase()}`)}>
            {title.toUpperCase()}
        </TitleContainer>
        <PreviewContainer>
            {items
                .filter((item, index) => index < 4)
                .map(item => (
                    <CollectionItem key={item.name} item={item} />
                )
            )}
        </PreviewContainer>
    </CollectionPreviewContainer>
);

export default withRouter(CollectionPreview);
