/* Library import */
import {useState,useEffect} from 'react';

/* Dependency import */
import './css/Menubar.css';
import useWindowDimensions from './hooks/useWindowDimensions';

/* Component import */
import DesktopMenu from './desktopMenu.js'
import MobileMenu from './mobileMenu.js'
import MenuIcon from '@mui/icons-material/Menu';


/* Asset imports */

function Menubar(){

    const { screenHeight, screenWidth } = useWindowDimensions();
    const [mobileMenu, setmobileMenu] = useState(false);

    const menuOptions = [
        {
            name:'Market',
            url:'/marketplace'
        },
        {
            name:'Blog',
            url:'/article'
        },
        {
            name:'Featured',
            url:'/collaborate'
        }

    ]

    return(
        <div className='Menubar'>
            {
                (screenWidth>900)?(
                    <>
                        <DesktopMenu
                            menuOptions={menuOptions}
                        />
                    </>
                ):(
                    (!mobileMenu)?
                    <MenuIcon
                        onClick={() => {
                            setmobileMenu(!mobileMenu);
                        }}
                    />:
                    <MobileMenu
                        menuOptions={menuOptions}
                        setmobileMenu={setmobileMenu}
                    />
                )
            }
        </div>
    );
}

export default Menubar;