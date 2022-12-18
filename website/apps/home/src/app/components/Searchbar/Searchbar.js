/* Library import */
import {useState,useEffect} from 'react';
import useWindowDimensions from './hooks/useWindowDimensions';

/* Dependency import */
import './css/Searchbar.css';

/* Component import */
import SearchIcon from '@mui/icons-material/Search';
import DesktopSearch from './DesktopSearch';
import MobileSearch from './MobileSearch';
import CloseIcon from '@mui/icons-material/Close';

/* Asset imports */

function Searchbar(){

    const { screenHeight, screenWidth } = useWindowDimensions();
    const [mobileSearch, setmobileSearch] = useState(false);

    const [searchText,setsearchText] = useState("");
    const [showResults, setshowResults] = useState(true);


    // open search in mobile mode 
    const openSearchInMobile = () => {
        if(screenWidth<=900){
            setmobileSearch(true);
        }
    }
    

    return(
        <div className='Searchbar'>
            <SearchIcon
                onClick = {()=>openSearchInMobile()}
            />
            {
                
                (screenWidth>900)?(
                    <>
                        <DesktopSearch
                            searchText = {searchText}
                            setsearchText = {setsearchText}
                            showResults = {showResults}
                        />

                        {
                            (searchText)?(
                                <div 
                                    className="closeIcon"
                                    onClick={() => {
                                        setsearchText("");
                                    }}
                                >
                                    <CloseIcon/>
                                </div>

                            ):('')
                        }
                        
                       
                    </>
                ):(
                    <>
                        {
                            (mobileSearch)?(
                                <MobileSearch
                                    setmobileSearch = {setmobileSearch}
                                    searchText={searchText}
                                    setsearchText={setsearchText}
                                    showResults={showResults}
                                />
                            ):('')
                        }
                    </>
                )
            }
        </div>
    );
}

export default Searchbar;