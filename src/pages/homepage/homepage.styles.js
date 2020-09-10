import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HomePageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const HomePageNote = styled(Link)`
    cursor: pointer;
    font-style: italic;
    font-size: 18px;
    display: flex;
    flex-direction: column;
    align-items: center;

    &:hover {
        text-decoration: solid underline;
        color: #256227;
    }
`;