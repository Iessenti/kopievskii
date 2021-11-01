import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './styles.sass'

import { PolyIcon, BnbIcon, EthIcon, DownBlackHill, PhotoDot, PhotoWidthDot } from '../../icons'
import TshirtImage from '../../images/Tshirt.png'


interface ProductProps {
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
    const [showBlackPopup, setShowBlackPopup] = useState<boolean>(false)
    const [aboutProps, setAboutProps] = useState<ProductProps>({
        id: props.id,
        count: props.count,
        photoUrl: props.photoUrl,
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

        
    }, [])

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


            <div className='product-element-wrapper__product-inside-wrapper bigger-product-card__product-inside-wrapper'> 
                <Link 
                    to={{
                        pathname: "/product/"+props.id,
                        state: {...aboutProps}
                    }}
                    
                >

                    <div 
                        className='product-element-wrapper__product-inside-wrapper__header-circles left-circle'
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
                    
                    <img src={TshirtImage} />
                    
                    <div className='dots-wrapper'>
                        <PhotoDot/>
                        <PhotoWidthDot/>
                        <PhotoDot/>
                        <PhotoDot/>
                    </div>
                    
                        {
                            (props.type == 'small')
                            ?
                            <div className='product-element-wrapper__product-inside-wrapper__button'>
                                <div className='product-element-wrapper__product-inside-wrapper__button__text'>
                                    Merchdao #{props.id}
                                </div>

                                <div className='product-element-wrapper__product-inside-wrapper__button__price'>
                                    <div>{props.price}</div>
                                </div>
                            </div>
                            :
                            <div className='bigger-product-card__product-inside-wrapper__bottom-text'>
                                Awesome Donut NFT
                            </div>
                        }

                </Link>
            </div>

        </div>
    )

}