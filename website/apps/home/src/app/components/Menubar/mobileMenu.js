/* Library import */
import {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';

/* Dependency import */
import './css/mobileMenu.css';

/* Component import */
import CloseIcon from '@mui/icons-material/Close';
import LoginButton from '../LoginButton';

/* Asset imports */

function mobileMenu({
    menuOptions,
    setmobileMenu
}){
    return(
        <div className='mobileMenu'>
            <div className='cancelMobileMenu'>
                <CloseIcon
                    onClick={()=>setmobileMenu(false)}
                />
            </div>
            <div className="mobileMenuOptionsContainer">
                {
                    menuOptions.map((item,index) => (
                        <div className='mobileMenuOptions'>
                            <Link 
                                to={item.url}
                                onClick={()=>setmobileMenu(false)}
                            >
                                {item.name}
                            </Link>
                        </div>
                    ))
                }
            </div>
            <div className="mobileLoginButtonContainer">
                <LoginButton/>
            </div>
        </div>
    );
}

export default mobileMenu;