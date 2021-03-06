import React, { useState } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { Breadcrumbs, Crumb } from '../breadcrumbs/breadcrumb.styles'

import {
    PlantName,
    PlantBotanicalName,
    PlantPrice,
    PlantInfoContainer,
    ImagesContainer,
    ImageFootnote,
    InfoContainer,
    Info,
    QuantityContainer,
    AddButton
} from './plant-info.styles';

import { InputNumber } from 'antd';

import { addItem } from '../../redux/cart/cart.actions';

import {
    Carousel,
    CarouselItem,
    CarouselControl,
} from 'reactstrap';

export const PlantInfo = ( { addItem, location, history }) => {
    const [quantity, setQuantity] = useState({
        plantQuantity: 0,
        stemQuantity: 0
    });

    const { item } = location.state;
    
    const { 
        name,
        botanicalName,
        imageUrls,
        light, 
        water, 
        humidity, 
        isToxicToPets,
        isStemAvailable,
        plantPrice,
        stemPrice,
        potSize, 
        other 
    } = item;

    const slides = imageUrls.map((url, index) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={`image-${index}`}
            >
                <img
                    className="d-block w-100"
                    src={url} 
                    alt={''}
                />
            </CarouselItem>
        );
    });

    // carousel
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === imageUrls.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }
    
    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? imageUrls.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const onChangePlantQuantity = (value) => {
        setQuantity({
            ...quantity,
            plantQuantity: value
        })
    }

    const onChangeStemQuantity = (value) => {
        setQuantity({
            ...quantity,
            stemQuantity: value
        })
    }

    const quantityInputStyles = {
        fontWeight: 'bold',
        padding: '0 5px 0 0'
    }

    const addToCart = () => {
        for (let i = 0; i < quantity.plantQuantity; i++) {
            addItem({
                ...item,
                price: item.plantPrice
            })
        }

        for (let i = 0; i < quantity.stemQuantity; i++) {
            addItem({
                ...item,
                price: item.stemPrice
            })
        }

        setQuantity({
            ...quantity,
            plantQuantity: 0,
            stemQuantity: 0
        });

        history.push('/checkout');
    }

    return (
        <div>
            <Breadcrumbs>
                <Crumb>
                    <a href="/">Home</a>
                </Crumb>
                <Crumb>
                    <a href="/shop">Shop</a>
                </Crumb>
                <Crumb>
                    {name}
                </Crumb>
            </Breadcrumbs>
            
            <PlantName>{name}</PlantName>
            <PlantBotanicalName>{botanicalName}</PlantBotanicalName>
            {
                isStemAvailable ? 
                <PlantPrice>Plant / Stem Price: ${plantPrice} / ${stemPrice}</PlantPrice>
                : <PlantPrice>${plantPrice}</PlantPrice>
            }
            <PlantInfoContainer>
                <ImagesContainer>
                    <Carousel
                        activeIndex={activeIndex}
                        next={next}
                        previous={previous}
                    >
                            {slides}
                        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
                    </Carousel>
                    <ImageFootnote>*plant shown is just an example of what's in stock</ImageFootnote>
                </ImagesContainer>
                <InfoContainer>
                    <Info>Light: <span>{light}</span></Info>
                    <Info>Water: <span>{water}</span></Info>
                    <Info>Humidity: <span>{humidity}</span></Info>
                    <Info>Toxic to pets: <span>{isToxicToPets}</span></Info>
                    <Info>Other: <span>{other}</span></Info>
                    <Info>Pot size: <span>{potSize}"</span></Info>

                    <QuantityContainer>
                        <span style={quantityInputStyles}>Plant Quantity</span>
                        <InputNumber
                            autoFocus
                            min={0} 
                            max={10}
                            defaultValue={0}
                            value={quantity.plantQuantity}
                            onChange={onChangePlantQuantity}
                        />
                    </QuantityContainer>
                    <QuantityContainer>
                        <span style={quantityInputStyles}>Stem Quantity</span>
                        <InputNumber
                            autoFocus
                            min={0} 
                            max={10} 
                            defaultValue={0} 
                            value={quantity.stemQuantity}
                            onChange={onChangeStemQuantity}
                            disabled={!item.isStemAvailable}    
                        />
                    </QuantityContainer>
                    <AddButton 
                        inverted
                        onClick={() => addToCart()}>
                            Add to cart
                    </AddButton>
                </InfoContainer>
            </PlantInfoContainer>       
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default withRouter(connect(null, mapDispatchToProps)(PlantInfo));
