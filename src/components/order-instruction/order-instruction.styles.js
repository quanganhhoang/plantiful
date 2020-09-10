import styled from 'styled-components';


export const InstructionTitle = styled.h2`
    font-size: 28px;
    margin: 0 auto 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom: solid #256227;
`;

export const InstructionContent = styled.div`
    font-size: 20px;
    display: flex;
    flex-direction: column;
    height: 350px;
    align-items: center;
    position: relative;
    padding: 10px 10px;
    text-align: left;

    @media screen and (max-width: 800px) {
        flex-direction: column;
    }
`;

export const InstructionOrderedList = styled.ol`
    list-style: num;
    list-style-position: outside;
`;

export const InstructionUnorderedList = styled.ul`
    list-style: square;
    list-style-position: outside;
`;