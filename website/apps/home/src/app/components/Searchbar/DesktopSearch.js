/* Library import */
import {useState,useEffect} from 'react';

/* Dependency import */
import './css/DesktopSearch.css';

/* Component import */
import SearchResults from './SearchResults';
import SearchbarLoader from './SearchbarLoader';

/* Asset imports */

function DesktopSearch({
    searchText,
    setsearchText,
    showResults
}){

    return(
        <div className='DesktopSearch'>
            <input 
                type="text" 
                name='SearchText'
                id='SearchText'
                value={searchText}
                onChange = {(e) => {
                    setsearchText(e.target.value);
                }}
                autoComplete="off"
                placeholder='Search your images'
            />
            <div className="desktopSearchResults">
            {
                (searchText)?(
                    
                        <div className='desktopResultsContainer'>
                            <SearchResults
                                showResults={showResults}
                            />
                        </div>
                    
                ):(
                   ''
                )
            }
            </div>

        </div>
    );
}

export default DesktopSearch;