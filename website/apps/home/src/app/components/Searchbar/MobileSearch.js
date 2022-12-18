/* Library import */
import {useState,useEffect} from 'react';

/* Dependency import */
import './css/MobileSearch.css';

/* Component import */
import SearchResults from './SearchResults';
import CloseIcon from '@mui/icons-material/Close';
import SearchbarLoader from './SearchbarLoader';

/* Asset imports */

function MobileSearch({
    searchText,
    setsearchText,
    showResults,
    setmobileSearch
}){

    return(
        <div className='MobileSearch'>
            {/* close button */}
            {/* search bar */}
            <div className="topBar">
                <CloseIcon
                    onClick={() => setmobileSearch(false)}
                />
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
            </div>
            <hr/>
            
            {/* search results */}
            {
                (searchText)?(
                    <SearchResults
                        showResults={showResults}
                    />
                ):(
                    ''
                )
            }
            
        </div>
    );
}

export default MobileSearch;