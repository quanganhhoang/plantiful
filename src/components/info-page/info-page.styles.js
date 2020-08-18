import styled from 'styled-components';


export const InfoTitle = styled.h2`
    font-size: 28px;
    margin: 0 auto 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom: solid #256227;
`;

export const InfoContent = styled.div`
    display: flex;
    flex-direction: column;
    height: 350px;
    align-items: center;
    position: relative;
    padding-left: 10px;
    text-align: left;

    @media screen and (max-width: 800px) {
        flex-direction: column;
    }
`;