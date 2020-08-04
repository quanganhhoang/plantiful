import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

export const Breadcrumbs = styled.ul`
    list-style: none;
    padding: 0;
    & > li:after {
    content: "${props => props.separator || "/"}";
    padding: 0 8px;
    }
`;

export const Crumb = styled.li`
    display: inline-block;

    &:last-of-type:after {
        content: "";
        padding: 0;
    }

    a {
        color: green;
        text-decoration: none;
        &:hover,
        &:active {
            text-decoration: underline;
        }
    }
`;

export const PlantInfoContainer = styled.div`
    display: flex;
    flex-direction: row;
    height: 350px;
    align-items: center;
    position: relative;
`;

export const ImagesContainer = styled.div`
    width: 60%;
    height: 90%;
    margin-bottom: 5px;
    margin-right: 20px;
    display: block;
`;

export const InfoContainer = styled.div`
    width: 50%;
    height: 90%;
    display: flex;
    flex-direction: column;
`;

export const Info = styled.p`
    font-weight: bold;
`;

export const AddButton = styled(CustomButton)`
    width: 50%;
    margin-top: 28px;

    @media screen and (max-width: 800px) {
        display: block;
        min-width: unset;
        padding: 0 10px;
    }
`;

AddButton.displayName = 'AddButton';