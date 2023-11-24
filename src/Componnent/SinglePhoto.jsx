import React, { useState } from 'react';
import { Image, Carousel } from 'antd';

const CarouselWithButtons = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const goToPrevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div>
            <Carousel autoplay={false} activeIndex={currentIndex}>
                {images.map((imageUrl, index) => (
                    <Image key={index} src={imageUrl} alt={`Slide ${index}`} />
                ))}
            </Carousel>
            <div>
                <button onClick={goToPrevSlide}>Previous</button>
                <button onClick={goToNextSlide}>Next</button>
            </div>
        </div>
    );
};

export default CarouselWithButtons;