/* Library import */
import {useState,useEffect} from 'react';

/* Dependency import */
import './css/SearchResults.css';

/* Component import */
import Avatar from '@mui/material/Avatar';

/* Asset imports */

function ResultItemRounded({
    imageSrc,
    itemHeading,
    itemDescription
}){

    return(
        <div className='resultItem'>
            <Avatar src={imageSrc} />
            <div className = 'resultItem-infoContainer'>
                {/* heading */}
                <div className="resultItem-Heading">
                    {itemHeading}
                </div>
                <div className="resultItem-Description">
                    {itemDescription}
                </div>
            </div>
        </div>
    );
}

export default ResultItemRounded;