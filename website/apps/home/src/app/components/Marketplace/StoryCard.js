/* Library import */
import {useState,useEffect} from 'react';

/* Dependency import */
import './css/StoryCard.css';

/* Component import */

/* Asset imports */

function StoryCard({
    image,
    time,
    location
}){

    const image_url = "data:image/jpg;charset=utf-8;base64,"+image.toString();

    return(
        <div className='StoryCard'>
            <div className="StoryCard-cover">
                <img 
                    src={image_url} 
                    alt="Red dot" 
                />
            </div>
            <div className="StoryCard-details">
                <p>TIME: {time}</p>
                <br/>
                <p>LOCATION: {location}</p>
            </div>
        </div>
    );
}

export default StoryCard;