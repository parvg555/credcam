/* Library import */
import {useState,useEffect} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

/* Dependency import */
import './css/Hero.css';
import DesktopCard from './DesktopCard';
import MobileCard from './MobileCard';
import useWindowDimensions from './hooks/useWindowDimensions';

/* Component import */

/* Asset imports */

function Hero(){

    const { screenHeight, screenWidth } = useWindowDimensions();

    const heroSlides = [
        {
            bgColor:'https://openseauserdata.com/files/3863ca6c5110362246a23fa924bc8b57.jpg',
            lowerbarBg:'https://static.opensea.io/solana/home-banner.png',
            lowerbarText:'Join Our Discord Community',
            posterPhoto:'https://storage.googleapis.com/opensea-prod.appspot.com/files/black-future-collection-long-neckie-adira-by-nyla-c42aa3.gif',
            sourcePoster:'https://openseauserdata.com/files/afb1b0a9d323c9b66d488e669e9cac63.gif'
        },
        {
            bgColor:'https://openseauserdata.com/files/3863ca6c5110362246a23fa924bc8b57.jpg',
            lowerbarBg:'https://static.opensea.io/solana/home-banner.png',
            lowerbarText:'Join Our Discord Community',
            posterPhoto:'https://storage.googleapis.com/opensea-prod.appspot.com/files/black-future-collection-long-neckie-adira-by-nyla-c42aa3.gif',
            sourcePoster:'https://openseauserdata.com/files/afb1b0a9d323c9b66d488e669e9cac63.gif'
        },
        {
            bgColor:'https://openseauserdata.com/files/3863ca6c5110362246a23fa924bc8b57.jpg',
            lowerbarBg:'https://static.opensea.io/solana/home-banner.png',
            lowerbarText:'Join Our Discord Community',
            posterPhoto:'https://storage.googleapis.com/opensea-prod.appspot.com/files/black-future-collection-long-neckie-adira-by-nyla-c42aa3.gif',
            sourcePoster:'https://openseauserdata.com/files/afb1b0a9d323c9b66d488e669e9cac63.gif'
        }
    ]

    return(
        <div className='Hero'>

            <Carousel
                autoPlay={true}
                infiniteLoop={true}
                interval={20000}
                stopOnHover={true}
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                showArrows={false}
                swipeable={true}
            >
                {
                    heroSlides.map((item,index) => (
                        (screenWidth > 950)?(
                            <DesktopCard
                                bgColor={item.bgColor}
                                lowerbarBg={item.lowerbarBg}
                                lowerbarText={item.lowerbarText}
                                posterPhoto={item.posterPhoto}
                                sourcePoster={item.sourcePoster}
                            />
                        ):(
                            <MobileCard
                                bgColor={item.bgColor}
                                lowerbarBg={item.lowerbarBg}
                                lowerbarText={item.lowerbarText}
                                posterPhoto={item.posterPhoto}
                                sourcePoster={item.sourcePoster}
                            />
                        )
                    )) 
                }
            </Carousel>
        </div>
    );
}

export default Hero;