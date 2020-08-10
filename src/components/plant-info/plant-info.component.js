import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { Breadcrumbs, Crumb } from '../breadcrumbs/breadcrumb.styles'

import {
    PlantName,
    PlantInfoContainer,
    ImagesContainer,
    InfoContainer,
    Info,
    AddButton
} from './plant-info.styles';

import { addItem } from '../../redux/cart/cart.actions';

import {
    Carousel,
    CarouselItem,
    CarouselControl,
    // CarouselIndicators,
    // CarouselCaption
} from 'reactstrap';

import {
    getImagesFromFirestore
} from '../../firebase/firebase.utils'

import { convertPlantNameToImageDir } from '../../util/utils';

export const PlantInfo = ( { addItem, location }) => {
    const [images, setImages] = useState([]);
    
    useEffect(() => {
        async function fetchData() {
            const name = location.state.item.name;
            const dirName = convertPlantNameToImageDir(name);

            await getImagesFromFirestore(dirName).then(res => {
                setImages(res);
            });
        }
        fetchData();
        
    }, [location.state.item.name]);


    const slides = images.map(item => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
                <img
                    // style={{display: 'block', height: '50vh', width: 'auto'}}
                    className="d-block w-100"
                    src={item.src} 
                    alt={item.altText} 
                />
                {/* <CarouselCaption captionText={item.caption} captionHeader={item.caption} /> */}
            </CarouselItem>
        );
    });

    // carousel
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }
    
    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? images.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    // const goToIndex = (newIndex) => {
    //     if (animating) return;
    //     setActiveIndex(newIndex);
    // }

    // carousel

    const { item } = location.state;
    
    const { 
        name,
        light, 
        water, 
        humidity, 
        isToxicToPets, 
        other 
    } = item;

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
            <PlantInfoContainer>
                <ImagesContainer>
                    <Carousel
                        activeIndex={activeIndex}
                        next={next}
                        previous={previous}
                    >
                        {/* <CarouselIndicators items={images} activeIndex={activeIndex} onClickHandler={goToIndex} /> */}
                            {slides}
                        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
                    </Carousel>
                </ImagesContainer>
                <InfoContainer>
                    <Info>Name: {name}</Info>
                    <Info>Light: {light}</Info>
                    <Info>Water: {water}</Info>
                    <Info>Humidity: {humidity}</Info>
                    <Info>Toxic to pets: {isToxicToPets}</Info>
                    <Info>Other: {other}</Info>
                    <AddButton 
                        inverted
                        onClick={() => addItem(item)}>
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
