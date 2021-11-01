import { useDispatch } from 'react-redux'

import './styles.sass'

import { CloseCrossIcon, ShareArrowInCircle } from '../../icons'
import CheckoutBox from '../../images/CheckoutBox.png'
import CheckoutCoin from '../../images/CheckoutCoin.png'
import SuccessCheckout from '../../images/SuccessCheckout.png'
import { useState } from 'react'

export const CheckoutModal = () => {

    const [isCheckoutConfirmed, setIsCheckoutConfirmed] = useState<boolean>(false)

    const [activeCheckout, setActiveCheckout] = useState<boolean>(false)
    const [inputValue, setInputValue] = useState<string>('')

    const inputHandler = (text: string) => {
        if (text.includes('@')) {
            setActiveCheckout(true)
        }
        setInputValue(text)
    }

    const dispatch = useDispatch()
    const changeCheckoutModalState = (value: boolean) => ({type: 'CHANGE_CHECKOUT_MODAL_STATE', payload: value})

    const closeModal = () => {
        dispatch(changeCheckoutModalState(false))
        document.body.style.overflowY = 'scroll'
    }

    const confirmCheckout = () => {
        if (activeCheckout) {
            setIsCheckoutConfirmed(true)
        }
    }

    return (
        <div className='checkout-modal-wrapper' style={{top: window.pageYOffset}}>

            <div className='checkout-modal-wrapper__checkout-modal-win '>
                {
                    isCheckoutConfirmed
                    ?
                    <>
                        <span className='alt-title'>Thank you</span>
                        <div className='success-image'>
                            <img src={SuccessCheckout} />
                        </div>
                        <div className='success-text'>
                            Please Check your Email
                            <span>we have sent you</span>
                        </div>
                        <div className='success-card-wrapper'>
                            <div>
                                <span className='success-card-title'>Transaction</span>
                                <span className='success-card-text'>SUCCESS</span>
                            </div>
                            <ShareArrowInCircle/>
                        </div>
                        <div 
                            onClick={() => closeModal()}
                            className='close-button'
                        >
                            Close
                        </div>
                    </>
                    :
                    <>
                        <span className='title'>Complete chekout</span>
                        <div className='goods-wrapper'>
                            <span className='goods-wrapper__title'>
                                Item
                            </span>

                            <div className='goods-wrapper__element'>
                                <div className='goods-wrapper__element__image'>
                                    <img src={CheckoutCoin} />
                                </div>
                                <div className='goods-wrapper__element__title__name'>
                                    <span className='goods-wrapper__element__name__title'>Awesome Donut NFT</span>
                                    <span className='goods-wrapper__element__name__desc'>Daoland</span>
                                </div>
                                <div className='goods-wrapper__element__price'>
                                    <span className='goods-wrapper__element__price__coin'>2 180 POLY</span>
                                    <span className='goods-wrapper__element__price__dollar'>$600.00</span>
                                </div>
                            </div>

                            <div className='goods-wrapper__element'>
                                <div className='goods-wrapper__element__image'>
                                    <img src={CheckoutBox}/>
                                </div>
                                <div className='goods-wrapper__element__name'>
                                    <span className='goods-wrapper__element__name__title'>Shipping</span>
                                    <span className='goods-wrapper__element__name__desc'>DHL worldwide Dewlivery</span>
                                </div>
                                <div className='goods-wrapper__element__price'>
                                    <span className='goods-wrapper__element__price__coin'>120 POLY</span>
                                    <span className='goods-wrapper__element__price__dollar'>$18.36</span>
                                </div>
                            </div>
                            
                        </div>

                        <div className='total-price-wrapper'>
                            <span className='total-price-wrapper__total'>Total</span>
                            <span className='total-price-wrapper__price'>2300 POLY</span>
                        </div>

                        <div className='email-wrapper'>
                            <span>Enter Your Email</span>
                            <div>
                                <input 
                                    placeholder="Enter your email (we will contact directly)" 
                                    value={inputValue}
                                    onChange={ (e) => inputHandler(e.target.value)}
                                />
                            </div>
                        </div>
                        
                        <div 
                            className={`confirm-button ${activeCheckout ? 'active-checkout-button' : ''}`}
                            onClick={ () => confirmCheckout()}
                        >
                            Confirm checkout {activeCheckout ? ' | 2300 MRCH' : ''}
                        </div>
                    </>
                }

            </div>


            <div 
                onClick={() => closeModal()}
                className='checkout-modal-wrapper__cross'
            >
                <CloseCrossIcon />
            </div>
        </div>
    )
}
