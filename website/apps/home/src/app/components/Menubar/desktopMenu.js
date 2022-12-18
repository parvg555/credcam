/* Library import */
import {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';

/* Dependency import */
import './css/desktopMenu.css';

/* Component import */

/* Asset imports */

function desktopMenu({
    menuOptions
}){
    return(
        <div className='desktopMenu'>
            {
                menuOptions.map((item,index) => (
                    <div className='desktopMenuOptions'>
                        <Link to={item.url}>
                            {item.name}
                        </Link>
                    </div>
                ))
            }
        </div>      
    );
}

export default desktopMenu;