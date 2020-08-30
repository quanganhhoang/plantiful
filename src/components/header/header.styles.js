import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;

    @media screen and (max-width: 800px) {
        height: 50px;
        padding: 10px;
        margin-bottom: 20px;
    }
`;

export const LogoContainer = styled(Link)`
    height: 90px;
    width: auto;
    padding: 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: 'Cassandra';
    font-size: 2em;

    &:hover {
        text-decoration: none;
        color: #256227;
    }

    @media screen and (max-width: 800px) {
        width: 50px;
        height: 50px;
        padding: 0;
        font-size: 1.5em;
    }
`;

export const OptionsContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    @media screen and (max-width: 800px) {
        width: 70%;
    }
`;

export const OptionLink = styled(Link)`
    padding: 10px 15px;
    cursor: pointer;

    &:hover {
        text-decoration: solid underline;
        color: #256227;
        // background-color: #256227;
        // opacity: 0.3;
    }

    @media screen and (max-width: 800px) {
        padding: 10px 5px;
        font-size: 0.8em;
    }
`;

OptionLink.displayName = 'OptionLink';
