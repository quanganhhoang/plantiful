import styled from 'styled-components';

export const Breadcrumbs = styled.ul`
    list-style: none;
    padding: 5px;
    margin: 10px;
    & > li:after {
        content: "${props => props.separator || "/"}";
        padding: 0 8px;
    }
`;

export const Crumb = styled.li`
    display: inline-block;
    font-weight: bold;

    &:last-of-type:after {
        content: "";
        padding: 0;
    }

    a {
        color: #256227;
        text-decoration: none;
        &:hover,
        &:active {
            text-decoration: underline;
        }
    }
`;