import { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'

import './styles.sass'

import { BackArrowIcon , ShortArrowRightIcon, MetamaskIcon, WalletConnectIcon, FormaticIcon, CoinBaseWalletIcon, BlackRightArrowIcon } from '../../icons'

import QrImage from '../../images/Qr.png'

export const WalletPage = () => {

    const history = useHistory()

    const [showQr, setShowQr] = useState<boolean>(false)

    return (
        <div className='wallet-page-wrapper'>
            <div className='wallet-page-wrapper__nav-wrapper'>
                    <div className='wallet-page-wrapper__nav-wrapper__back-button' onClick={() => history.goBack()}>
                        <BackArrowIcon />
                        Back to Items
                    </div>

                    <div className='wallet-page-wrapper__nav-wrappern__nav-state'>
                        <span className='wallet-page-wrapper__nav-wrapper__nav-state__grey-text' onClick={() => history.goBack()}>
                            Explore
                        </span>
                        <ShortArrowRightIcon/>
                        <span className='wallet-page-wrapper__nav-wrapper__nav-state__black-text'>
                            ConnectWallet
                        </span>
                    </div>
            </div>

            <div className='divider'></div>

            <div className='wallet-page-wrapper__main-part-wrapper'>
                <div className='wallet-page-wrapper__main-part-wrapper__list-wrapper'>
                    <div><MetamaskIcon/> Metamask</div>
                    <div 
                        onClick={() => setShowQr(true)} 
                        className={showQr?'activeLink':''}
                    >
                        <WalletConnectIcon/>
                        Wallet Connect
                        {
                            showQr ? <div className='showedArrow'><BlackRightArrowIcon/></div> : <></>
                        }
                    </div>
                    <div><CoinBaseWalletIcon/>Coinbase Wallet</div>
                    <div><FormaticIcon/>Formatic</div>
                </div>

                <div className='wallet-page-wrapper__main-part-wrapper__image-part'>
                    {
                        showQr
                        ?
                        <div className='qr-wrapper'>
                            <div>
                                <img src={QrImage}/>
                            </div>
                        </div>
                        :
                        <></>
                    }
                </div>

            </div>

            <div className='wallet-page-wrapper__additional-data-wrapper'>
                    <div className='wallet-page-wrapper__additional-data-wrapper__title'>
                        By unlocking Your wallet You agree to our <Link to='/' className='link'>Terms of Service</Link>, <Link to='/' className='link'>Privacy</Link> and <Link to='/' className='link'>Cookie Policy.</Link>
                    </div>
                    <div className='wallet-page-wrapper__additional-data-wrapper__text'>
                        Disclaimer: Wallets are provided by External Providers and by selecting you agree to Terms of those Providers. Your access to the wallet might be reliant on the External Provider being operational.
                    </div>
            </div>
        </div>
    )
}