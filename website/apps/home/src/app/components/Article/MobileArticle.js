/* Library import */
import {useState,useEffect} from 'react';

/* Dependency import */
import './css/MobileArticle.css';

/* Component import */
import ArticlePage from './ArticlePage';

/* Asset imports */

function MobileArticle(){

    return(
        <div className='MobileArticle'>
            <ArticlePage/>
        </div>
    );
}

export default MobileArticle; 