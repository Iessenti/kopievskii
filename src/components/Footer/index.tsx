import { Link } from 'react-router-dom'

import './styles.sass'
import { Logo, WhiteRightArrowIcon, InstagramIcon, LinkedinIcon, MediumIcon, TelegramIcon, TwitterIcon, RedditIcon, FacebookIcon, BitcoinIcon  } from '../../icons'
import FooterTextBackground from '../../images/FooterBackground.png'
import { useState } from 'react'

export const Footer = () => {

    const [hoveredIcon, setHoveredIcon] = useState<number>(0)

    return (
        <div className='footer-wrapper'>
            <img src={FooterTextBackground} className='footer-wrapper__background-text' />

            <div className='footer-wrapper__footer-inside-wrapper'>
                <div className='footer-wrapper__footer-inside-wrapper__footer-gradient-part-wrapper'>
                    <div>
                        <Logo />
                        <span className='gradient-text'>MERCHDAO</span>
                    </div>

                    <div className='footer-wrapper__footer-inside-wrapper__footer-gradient-part-wrapper__subscribe-wrapper'>
                        <div className='footer-wrapper__footer-inside-wrapper__footer-gradient-part-wrapper__subscribe-wrapper__input-wrapper'>
                            
                            <input placeholder='Subscribe newsletter' />

                            <div className='footer-wrapper__footer-inside-wrapper__footer-gradient-part-wrapper__subscribe-wrapper__input-wrapper__rose-circle-button'>
                                <WhiteRightArrowIcon />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='footer-divider'></div>

                <div className='footer-wrapper__footer-inside-wrapper__footer-navigation'>

                    <div className='footer-wrapper__footer-inside-wrapper__footer-navigation__left-side-icons'>
                        <span className='footer-wrapper__footer-inside-wrapper__footer-navigation__left-side-icons_title'>The new creative economy</span>
                        <div className='footer-wrapper__footer-inside-wrapper__footer-navigation__left-side-icons__footer-icons-wrapper'>
                            <span onMouseEnter={() => setHoveredIcon(1)} onMouseLeave={() => setHoveredIcon(0)}><TelegramIcon hover={(hoveredIcon == 1)}/></span>
                            <span onMouseEnter={() => setHoveredIcon(2)} onMouseLeave={() => setHoveredIcon(0)}><MediumIcon hover={(hoveredIcon == 2)}/></span>
                            <span onMouseEnter={() => setHoveredIcon(3)} onMouseLeave={() => setHoveredIcon(0)}><InstagramIcon hover={(hoveredIcon == 3)}/></span>
                            <span onMouseEnter={() => setHoveredIcon(4)} onMouseLeave={() => setHoveredIcon(0)}><TwitterIcon hover={(hoveredIcon == 4)}/></span>
                            <span onMouseEnter={() => setHoveredIcon(5)} onMouseLeave={() => setHoveredIcon(0)}><LinkedinIcon hover={(hoveredIcon == 5)}/></span>
                            <span onMouseEnter={() => setHoveredIcon(6)} onMouseLeave={() => setHoveredIcon(0)}><RedditIcon hover={(hoveredIcon == 6)}/></span>
                            <span onMouseEnter={() => setHoveredIcon(7)} onMouseLeave={() => setHoveredIcon(0)}><FacebookIcon hover={(hoveredIcon == 7)}/></span>
                            <span onMouseEnter={() => setHoveredIcon(8)} onMouseLeave={() => setHoveredIcon(0)}><BitcoinIcon hover={(hoveredIcon == 8)}/></span>
                        </div>
                    </div>

                    <div className='footer-wrapper__footer-inside-wrapper__footer-navigation__right-side-nav'>
                        <div>
                            <span className='footer-nav-title'>Group links</span>
                            <Link to='/' className='link'>User agreement</Link>
                            <Link to='/' className='link'>Delivery</Link>
                            <Link to='/' className='link'>Delivery</Link>
                        </div>
                        <div>
                            <span className='footer-nav-title'>Group links</span>
                            <Link to='/' className='link'>Delivery</Link>
                            <Link to='/' className='link'>Agreements</Link>
                            <Link to='/' className='link'>Agreements</Link>
                        </div>
                        <div>
                            <span className='footer-nav-title'>Group links</span>
                            <Link to='/' className='link'>Agreements</Link>
                            <Link to='/' className='link'>Delivery</Link>
                            <Link to='/' className='link'>Agreements</Link>
                        </div>
                    </div>

                </div>

            </div>

            <div className='footer-wrapper__footer-outer-wrapper'>
                <span>
                    Copyright © 2021 MercDAO. All rights reserved
                </span>

                <div className='gradient-text'>
                    HANDCRAFTED WITH LOVE BY MERCHDAO TEAM.
                </div>
            </div>
        </div>
    )
}