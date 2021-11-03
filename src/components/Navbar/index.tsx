import React, { useEffect, useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import './styles.sass'
import { Logo, Rocket, RoseNavBarHill, PolyIcon, BnbIcon, EthIcon } from '../../icons'

export const Navbar = () => {

    const [ popupOpened, setPopupOpened ] = useState<boolean>(false)

    window.addEventListener('click', e => {
        const target = e.target as HTMLTextAreaElement
        
        if (popupOpened) {
            if  (target.className !== 'navbar-popup-wrapper')  {
                setPopupOpened(false)
            }
        } else {
            if ( (target.getAttribute("class") === 'navbar-right-side__chain-icon__svg') || (target.className === 'navbar-right-side__chain-icon') ){
                setPopupOpened(true)
            }
        }

    })


    return (
        <div className='navbar-wrapper'>
            <div className='navbar-left-side'>
                
                    <Link to='/' className='navbar-left-side__logo-wrapper'>
                        <Logo />
                        <span className='gradient-text'>MERCHDAO</span>
                    </Link>
                

                <div className='navbar-left-side__nav'>
                    <Link 
                        to='/collections'
                        className='navbar-left-side__nav__nav-link'    
                    >
                        <span 
                            className={useRouteMatch('/collections') ? 'active' : 'inactive'}
                        >
                            COLLECTIONS
                        </span>
                        {
                            useRouteMatch('/collections')
                            ?
                            <RoseNavBarHill/>
                            :
                            <></>
                        }
                    </Link>

                    <Link 
                        to="/NFT'S"
                        className='navbar-left-side__nav__nav-link'
                    >
                        <span 
                            className={useRouteMatch("/NFT'S") ? 'active' : 'inactive'}
                        >
                            NFT'S
                        </span>
                        {
                            useRouteMatch("/NFT'S")
                            ?
                            <RoseNavBarHill/>
                            :
                            <></>
                        }
                    </Link>
                </div>
            </div>

            <div className='navbar-right-side' >

                <div className='navbar-right-side__chain-icon'>
                    <BnbIcon />
                </div>
                    
                <Link to='/connect-wallet' className='navbar-right-side__link-button'>
                    <Rocket />
                    <span className='gradient-text'>CONNECT WALLET</span>
                </Link> 
            </div>

            {
                popupOpened
                ?
                <div className='navbar-popup-wrapper' 
                //style={{left: document.querySelector('.navbar-right-side__chain-icon').getBoundingClientRect().right - 508 + 'px'}}
                >
                    <Link to='/' className='navbar-popup-wrapper__link'><PolyIcon/><span>Smart Chain</span></Link>
                    <Link to='/' className='navbar-popup-wrapper__link'><EthIcon/><span>Etherium</span></Link>
                    <Link to='/' className='navbar-popup-wrapper__link'><BnbIcon/><span>Polygon</span></Link>
                </div>
                :
                <></>
            }

        </div>
    )
}