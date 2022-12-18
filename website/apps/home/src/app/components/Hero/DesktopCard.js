/* Library import */
import {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';

/* Dependency import */
import './css/DesktopCard.css';

/* Component import */
import Avatar from '@mui/material/Avatar';

/* Asset imports */

function DesktopCard({
    bgColor,
    lowerbarBg,
    posterPhoto,
    sourcePoster
}){

    let cardStyle ={
        backgroundImage: `url("${bgColor}")`
    }

    let lowerbarStyle = {
        backgroundImage: `url("${lowerbarBg}")`
    }

    let posterBg = {
        backgroundImage: `url("${posterPhoto}")`
    }

    return(
        <div 
            className='DesktopCard'
            style={cardStyle}
        >
            <div className="backgroundCover"></div>
            <div className="cardContent">
                <div className="upper-cardContent">
                    <div className="upper-cardContent-left">
                        <div className='heroCardHeading-leftCard'>
                            Welcome to <br/> Humans Of Meta Earth
                        </div>
                        <div className="heroCardSubHeading-leftCard">
                            H.O.M.E is a NFT based marketplace.
                        </div>

                        <div className="heroCardButtons-leftCard">
                            <Link smooth to={"#"}>
                                <div className="heroCardButton-leftCard">
                                    Explore
                                </div>
                            </Link>
                            <Link smooth to={"#"}>
                                <div className="heroCardButton-leftCard">
                                    Publish
                                </div>
                            </Link>
                        </div>

                    </div>
                    <div className="upper-cardContent-right" style={posterBg}>
                        <div className="herocardBottomBar-right">
                            <div className='herocardBottomBar-right-avatarContainer'>
                                <Avatar src={sourcePoster}/>
                            </div>
                            <div className="herocardBottomBar-textContainer">
                                <div className="herocardBottomBar-text-Heading">
                                    Black Future Collection: hello ji
                                </div>
                                <div className="herocardBottomBar-text-description">
                                    This is  description for the above picture
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div 
                    className="lowerbar-cardContent"
                    style={lowerbarStyle}
                >
                    <div className="lowerbarText">
                        Join Our Discord Community
                    </div>
                    <Link smooth to={"#"}>
                        <div className="lowerbarButton">
                            JOIN DISCORD
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default DesktopCard;