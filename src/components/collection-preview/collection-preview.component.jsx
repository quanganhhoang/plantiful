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
        <TitleContainer onClick={() => history.push(`${match.path}/${title}`)}>
            {title.toUpperCase()}
        </TitleContainer>
        <PreviewContainer>
            {items.map(item => (
                <CollectionItem key={item.id} item={item} />
            ))}
        </PreviewContainer>
    </CollectionPreviewContainer>
);

export default withRouter(CollectionPreview);
