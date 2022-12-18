/* Library import */
import {useState,useEffect} from 'react';

/* Dependency import */
import './css/Navbar.css';
import useWindowDimensions from './hooks/useWindowDimensions';

/* Component import */
import Searchbar from './Searchbar/Searchbar';
import Menubar from './Menubar/Menubar';
import { Link } from 'react-router-dom';
import LoginButton from './LoginButton';

/* Asset imports */

function Navbar(){
    const { screenHeight, screenWidth } = useWindowDimensions();

    const changeNavbarColor = () => {
        if(window.scrollY>0){
            // document.getElementById("navbar").style.background = ""
            document.getElementById("navbar").style.background = "rgba(255,255,255,0.7)";
            document.getElementById("navbar").style.backdropFilter="blur(20px)";
        }else{
            document.getElementById("navbar").style.removeProperty('backdrop-filter');
            document.getElementById("navbar").style.background = "transparent";
        }
    }

    useEffect(() => {
        window.addEventListener('scroll',changeNavbarColor);
        return () => {
            window.addEventListener('scroll',changeNavbarColor);
        }
    }, [])
    

    return(
        <div className='Navbar' id='navbar'>
            {/* heading */}
            <Link to='/'>
                <div className='Navbar-Heading'>
                    CREDCAM
                </div>
            </Link>
            {/* searchbar */}
            <Searchbar/>
            {/* <Menubar/> */}
            {
                (screenWidth>900)?
                <div className='desktopLoginButtonContainer'>
                    <LoginButton/>
                </div>
                :''
            }
            
        </div>
    );
}

export default Navbar;