/* Library import */
import {useState,useEffect} from 'react';

/* Dependency import */
import './css/Marketplace.css';

/* Component import */
import StoryCard from './StoryCard';

/* Asset imports */

function Marketplace(){

    const [images,setImages] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const postCount = 10;

    useEffect(() => {
        fetch("http://localhost:8002/getImages")
        .then(res => res.json())
        .then(
            (result) => {
                setIsLoaded(true);
                setImages(result);
            },
        )
    }, [])

    useEffect(() => {
        console.log(images);
    }, [images])
    
    

    return(
        <div className='Marketplace-container'>
            <div className="Marketplace">
                {
                    (!isLoaded)?(
                        <h2>loading</h2>
                    ):(
                        images.map((element,key) => (
                            <>
                                <StoryCard
                                    image={element.file}
                                    time={element.image_capture_time}
                                    location={element.location}
                                />
                            </>
                        ))
                    )
                }
            </div>
        </div>
    );
}

export default Marketplace;