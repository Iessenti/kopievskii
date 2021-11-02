import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './styles.sass'

import { PolyIcon, BnbIcon, EthIcon, DownBlackHill, PhotoDot, PhotoWidthDot, DropdownArrowIcon } from '../../icons'
import T1 from '../../images/T1.png'
import T2 from '../../images/T2.png'
import T3 from '../../images/T3.png'

interface ProductProps {
    index: number;
    id: string;
    count: string;
    photoUrl: string;
    price: string;
    countLeft: string;
    desc: string;
    type: string;
}

export const ProductElement = ({...props}: ProductProps) => {

    const [coinIcon, setCoinIcon] = useState<React.ReactElement>(<PolyIcon/>)
    const [image, setImage] = useState<string>(T1)
    const [showBlackPopup, setShowBlackPopup] = useState<boolean>(false)
    const [carouselState, setCarouselState] = useState<number>(0) 
    const [photoArr, setPhotoArr] = useState<Array<string>>([])

    const [aboutProps, setAboutProps] = useState<ProductProps>({
        index: props.index,
        id: props.id,
        count: props.count,
        photoUrl: T1,
        price: props.price,
        countLeft: props.countLeft,
        desc: props.desc,
        type: props.type
    })


    useEffect( () => {
        if (props.price.includes('POLY')) {
            setCoinIcon(<PolyIcon/>)
        } else if (props.price.includes('BNB')) {
            setCoinIcon(<BnbIcon/>)
        } else {
            setCoinIcon(<EthIcon/>)
        }
        console.log(props)
        if ((props.index == 0) || (props.index==3)) {
            setPhotoArr([ T1, T2 ])
            setAboutProps({...aboutProps, photoUrl: T1})
        } else if ((props.index == 1) || (props.index==4)) {
            setPhotoArr([ T2, T3 ])
            setAboutProps({...aboutProps, photoUrl: T2})
        } else if ((props.index == 2) || (props.index==5)) {
            setPhotoArr([ T3, T2 ])
            setAboutProps({...aboutProps, photoUrl: T3})
        }
        

    }, [])

    const togglePhoto = (type: string) => {
        if ( (type == 'forward') && (carouselState != photoArr.length-1) ) {
            setCarouselState(carouselState + 1)
        } else if ( (type == 'back') && (carouselState != 0) ) {
            setCarouselState(carouselState - 1)
        }
    } 

    return (
        <div className={`product-element-wrapper ${ (props.type!='small' ? 'bigger-product-card' : '')}`}>

            {
                showBlackPopup
                ?
                <div className='product-element-wrapper__product-inside-wrapper__black-popup'>
                    <div>{props.countLeft} Copies Owned</div>
                    <DownBlackHill />
                </div>
                :
                <></>
            }


            <div className={`product-element-wrapper__product-inside-wrapper ${ (props.type!='small') ? 'bigger-product-card__product-inside-wrapper' : '' }`}> 

                    <div 
                        className={`product-element-wrapper__product-inside-wrapper__header-circles left-circle`}
                        onMouseOver={() => setShowBlackPopup(true)}
                        onMouseLeave={() => setShowBlackPopup(false)}
                    >
                        <div className='gradient'>x {props.count}</div>
                    </div>

                    <div className='product-element-wrapper__product-inside-wrapper__header-circles right-circle'>
                        {
                            coinIcon
                        }
                    </div>
                    
                    <img src={photoArr[carouselState]} className={(props.type!='small') ? 'bigger-product-card__product-inside-wrapper__image' : 'small-img'}/>
                    
                    <div 
                        className={`${ (carouselState==0) ? 'end-carousel-arrow' : '' } left-carousel-arrow`}
                        onClick={ () => togglePhoto('back')}
                    >
                        <DropdownArrowIcon/>
                    </div>

                    <div 
                        className={`${ (carouselState==photoArr.length-1) ? 'end-carousel-arrow' : '' } right-carousel-arrow`}
                        onClick={ () => togglePhoto('forward')}
                    >
                        <DropdownArrowIcon/>
                    </div>

                    <div className={ (props.type!='small') ? 'bigger-product-card__product-inside-wrapper__dots-wrapper':'small-dots-wrapper'}>
                        {
                            photoArr.map( (elem, index) => {
                                if (carouselState == index) {
                                    return <PhotoWidthDot />
                                } else {
                                    return <div onClick={ () => setCarouselState(index)}><PhotoDot/></div>
                                }
                            })
                        }
                    </div>
                    
                        {
                            (props.type == 'small')
                            ?
                            <div >
                                <Link 
                                    to={{
                                        pathname: "/product/"+props.id,
                                        state: {...aboutProps}
                                    }}
                                    className='product-element-wrapper__product-inside-wrapper__button'
                                >
                                <div className='product-element-wrapper__product-inside-wrapper__button__text'>
                                    Merchdao #{props.id}
                                </div>

                                <div className='product-element-wrapper__product-inside-wrapper__button__price'>
                                    <div>{props.price}</div>
                                </div>
                                </Link>
                            </div>
                            :
                            <div className='bigger-product-card__product-inside-wrapper__bottom-text'>
                                Awesome Donut NFT
                            </div>
                        }

                
            </div>

        </div>
    )

}