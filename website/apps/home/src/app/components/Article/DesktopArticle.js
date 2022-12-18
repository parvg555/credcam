/* Library import */
import {useState,useEffect} from 'react';

/* Dependency import */
import './css/DesktopArticle.css';

/* Component import */
import SuggestionBar from './SuggestionBar';
import ArticlePage from './ArticlePage';
import AuthorBar from './AuthorBar';

/* Asset imports */

function DesktopArticle(){
    return(
        <div className='DesktopArticle'>
            <SuggestionBar/>
            <div className="articleContainer"><ArticlePage/></div>
            <AuthorBar/>
        </div>
    );
}

export default DesktopArticle;