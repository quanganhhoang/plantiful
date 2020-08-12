import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

export const CollectionItemContainer = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  &:hover {
    .image {
      opacity: 0.8;
    }

    button {
      opacity: 0.85;
      display: flex;
    }
  }

  @media screen and (max-width: 800px) {
    width: 40vw;

    &:hover {
      .image {
        opacity: unset;
      }

      button {
        opacity: unset;
      }
    }
  }
`;

export const AddButton = styled(CustomButton)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;

  @media screen and (max-width: 800px) {
    display: block;
    opacity: 0.9;
    min-width: unset;
    padding: 0 10px;

    &:active {
        -webkit-transform:scale(0.9); 
        -moz-transform:scale(0.9); 
        -ms-transform:scale(0.9); 
        -o-transform:scale(0.9); 
        transform:scale(0.9); 
        -webkit-box-shadow:0px 0px 20px #FFF; 
        -moz-box-shadow:0px 0px 20px #FFF; 
        -o-box-shadow:0px 0px 20px #FFF; 
        box-shadow:0px 0px 20px #FFF; 
    }

    &:hover {
        background-color: white;
        color: black;
    }
  }
`;

AddButton.displayName = 'AddButton';

export const BackgroundImage = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 0px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  display: flex;
`;

BackgroundImage.displayName = 'BackgroundImage';

export const CollectionFooterContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  margin-bottom: 20px;
`;

CollectionFooterContainer.displayName = 'CollectionFooterContainer';

export const NameContainer = styled.span`
  width: 80%;
  margin-bottom: 15px;
`;

NameContainer.displayName = 'NameContainer';

export const PriceContainer = styled.span`
  width: 20%;
  text-align: right;
`;

PriceContainer.displayName = 'PriceContainer';
