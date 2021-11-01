import { useState , useEffect} from 'react'
import { RouteComponentProps, useLocation, useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import './styles.sass'
import { BackArrowIcon , ShortArrowRightIcon, SizeRulerIcon, PolyFilledIcon } from '../../icons'
import { ProductElement } from '../ProductElement/index' 

interface ProductProps {
    key: number;
    id: string;
    count: string;
    photoUrl: string;
    price: string;
    countLeft: string;
    desc: string;
}


export const ProductPage = () => {

    const history = useHistory()
    const location = useLocation()
    const productData: ProductProps = JSON.parse(JSON.stringify(location.state))

    const [choosenSize, setChoosenSize] = useState<string>('')
    const dispatch = useDispatch()    
    const changeSizeModalState = (value: boolean) => ({type: 'CHANGE_SIZE_MODAL_STATE', payload: value})
    const changeCheckoutModalState = (value: boolean) => ({type: 'CHANGE_CHECKOUT_MODAL_STATE', payload: value})

    return (
        <>
            <div className='product-page-wrapper'>
                <div className='product-page-wrapper__nav-wrapper'>
                    <div className='product-page-wrapper__nav-wrapper__back-button' onClick={() => history.goBack()}>
                        <BackArrowIcon />
                        Back to Items
                    </div>

                    <div className='product-page-wrapper__nav-wrappern__nav-state'>
                        <span className='product-page-wrapper__nav-wrapper__nav-state__grey-text'>
                            Explore
                        </span>
                        <ShortArrowRightIcon/>
                        <span className='product-page-wrapper__nav-wrapper__nav-state__black-text'>
                            Awesome Donut NFT
                        </span>
                    </div>
                </div>

                <div className='divider'></div>

                <div className='product-page-wrapper__main-part-wrapper'>
                    <div>
                        <ProductElement type='bigger' id={productData.id} count={productData.count} countLeft={productData.countLeft} photoUrl={productData.photoUrl} price={productData.price} desc={productData.desc}/>
                    </div>

                    <div className='product-page-wrapper__main-part-wrapper__text-wrapper'>
                        <span className='product-page-wrapper__main-part-wrapper__text-wrapper__title'>Awesome Donut NFT Daoland </span>
                        <div className='product-page-wrapper__main-part-wrapper__text-wrapper__main-data-wrapper'>
                            <span className='product-data-subtitle'>Price <span>(Delivery included)</span></span>
                            <div className='product-data-coin-price'><PolyFilledIcon />2300 POLY</div>
                            <div className='product-data-dollar-price'>$618.36</div>
                            <div className='product-data-choose-size'>Choose Size</div>
                            <div className='product-data-sizes-wrapper'>
                                <div 
                                    className={`size-element ${(choosenSize=='S')? 'choosen-size' : ''}`}
                                    onClick={() => setChoosenSize('S')}
                                >
                                    S
                                </div>
                                <div 
                                    className={`size-element ${(choosenSize=='M')? 'choosen-size' : ''}`}
                                    onClick={ () => setChoosenSize('M')}
                                >
                                    M
                                </div>
                                <div 
                                    className={`size-element ${(choosenSize=='L')? 'choosen-size' : ''}`}
                                    onClick={ () => setChoosenSize('L')}
                                >
                                    L
                                </div>
                                <div 
                                    className={`size-element ${(choosenSize=='XL')? 'choosen-size' : ''}`}
                                    onClick={ () => setChoosenSize('XL')}    
                                >
                                    XL
                                </div>
                                <div className='vertical-divider'></div>
                                <div onClick={ () => {
                                        dispatch(changeSizeModalState(true))
                                        document.body.style.overflowY = 'hidden'
                                    }} 
                                    className='size-ruler'
                                >
                                    <SizeRulerIcon/>
                                </div>
                            </div>
                            <div 
                                className='product-buy-now-button' 
                                onClick={() => {
                                    dispatch(changeCheckoutModalState(true))
                                    document.body.style.overflowY = 'hidden'
                                }}
                            >
                                Buy NOW
                            </div>
                        </div>
                    </div>
                </div>

                <div className='product-page-wrapper__description-wrapper'>
                    <div className='product-page-wrapper__description-wrapper__title'>Description</div>
                    <div className='product-page-wrapper__description-wrapper__text'>
                        {
                            productData.desc
                        }
                    </div>
                </div>
            </div>
        </>
    )

}