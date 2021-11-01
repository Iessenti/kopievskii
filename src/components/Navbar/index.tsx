import { Link, useRouteMatch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import './styles.sass'
import { Logo, Rocket, RoseNavBarHill } from '../../icons'

export const Navbar = () => {

    return (
        <div className='navbar-wrapper'>
            <div className='navbar-left-side'>
                <div className='navbar-left-side__logo-wrapper'>
                    <Logo />
                    <span className='gradient-text'>MERCHDAO</span>
                </div>

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
                <Link to='/connect-wallet' className='navbar-right-side__link-button'>
                    <Rocket />
                    <span className='gradient-text'>CONNECT WALLET</span>
                </Link> 
            </div>
        </div>
    )
}