/* Library import */
import {useState,useEffect} from 'react';

/* Dependency import */
import './css/SearchResults.css';

/* Component import */
import ResultItemRounded from './ResultItemRounded';
import ResultItemSquare from './ResultItemSquare';
import SearchbarLoader from './SearchbarLoader';

/* Asset imports */

function SearchResults({
    showResults
}){

    const numofResults = 3;


    return(
        <div className='SearchResults'>
            {
                (!showResults)?(<SearchbarLoader/>):('')
            }

            <span className="resultHeading">Items</span>
            {
                [...Array(numofResults)].map(() => (
                    <>
                        <ResultItemSquare
                            imageSrc={"https://avatars.githubusercontent.com/u/61341517?v=4"}
                            itemHeading={"Hello"}
                            itemDescription={"by Parv Gupta"}
                        />
                    </>
                ))
            }

            <span className="resultHeading">Profiles</span>
            {
                [...Array(numofResults)].map(() => (
                    <>
                        <ResultItemRounded
                            imageSrc={"https://avatars.githubusercontent.com/u/61341517?v=4"}
                            itemHeading={"Hello"}
                            itemDescription={"by Parv Gupta"}
                        />
                    </>
                ))
            }

            <div className="SearchAllButton-Container">
                <div className="SearchAllButton">
                    Show all results
                </div>
            </div>

        </div>
    );
}

export default SearchResults;