/* Library import */
import {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';

/* Dependency import */
import './css/MobileCard.css';

/* Component import */
import Avatar from '@mui/material/Avatar';

/* Asset imports */

function MobileCard({
    bgColor,
    lowerbarBg,
    posterPhoto,
    sourcePoster
}){

    let cardStyle = {
        background:`url("${bgColor}")`
    }

    let lowerbarStyle = {
        backgroundImage: `url("${lowerbarBg}")`
    }

    let posterBg = {
        backgroundImage: `url("${posterPhoto}")`
    }

    return(
        <div className='MobileCard' style={cardStyle}>
            <div className="backgroundCover-mobile"></div>
            <div className="cardContent-Mobile">
                <div className="upper-cardContent-Mobile">
                    <div className="upper-cardContent-right-mobile" style={posterBg}>
                        <div className="herocardBottomBar-right-mobile">
                            <div className='herocardBottomBar-right-avatarContainer-mobile'>
                                <Avatar src={sourcePoster}/>
                            </div>
                            <div className="herocardBottomBar-textContainer-mobile">
                                <div className="herocardBottomBar-text-Heading-mobile">
                                    Black Future Collection: hello ji
                                </div>
                                <div className="herocardBottomBar-text-description-mobile">
                                    This is  description for the above picture
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="upper-cardContent-left-mobile">
                        <div className='heroCardHeading-leftCard-mobile'>
                            Welcome to <br/>Humans Of Meta Earth
                        </div>
                        <div className="heroCardSubHeading-leftCard-mobile">
                            H.O.M.E is a NFT based marketplace.
                        </div>

                        <div className="heroCardButtons-leftCard-mobile">
                            <Link smooth to={"#"}>
                                <div className="heroCardButton-leftCard-mobile">
                                    Explore
                                </div>
                            </Link>
                            <Link smooth to={"#"}>
                                <div className="heroCardButton-leftCard-mobile">
                                    Publish
                                </div>
                            </Link>
                        </div>

                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default MobileCard;