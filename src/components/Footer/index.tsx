import './styles.sass'
import { Logo, WhiteRightArrowIcon, InstagramIcon, LinkedinIcon, MediumIcon, TelegramIcon, TwitterIcon, RedditIcon, FacebookIcon, BitcoinIcon  } from '../../icons'
import FooterTextBackground from '../../images/FooterBackground.png'

export const Footer = () => {

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
                        <span>The new creative economy</span>
                        <div className='footer-wrapper__footer-inside-wrapper__footer-navigation__left-side-icons__footer-icons-wrapper'>
                            <TelegramIcon/>
                            <MediumIcon />
                            <InstagramIcon />
                            <TwitterIcon />
                            <LinkedinIcon />
                            <RedditIcon />
                            <FacebookIcon />
                            <BitcoinIcon />
                        </div>
                    </div>

                    <div className='footer-wrapper__footer-inside-wrapper__footer-navigation__right-side-nav'>
                        <div>
                            <span className='footer-nav-title'>Group links</span>
                            <span>User agreement</span>
                            <span>Delivery</span>
                            <span>Delivery</span>
                        </div>
                        <div>
                            <span className='footer-nav-title'>Group links</span>
                            <span>Delivery</span>
                            <span>Agreements</span>
                            <span>Agreements</span>
                        </div>
                        <div>
                            <span className='footer-nav-title'>Group links</span>
                            <span>Agreements</span>
                            <span>Delivery</span>
                            <span>Agreements</span>
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