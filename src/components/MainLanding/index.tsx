import './styles.sass'

import MerchdaoCali from '../../images/MerchdaoCali.png'
import MainLandingImage from '../../images/MainLanding.png'

export const MainLanding = () => {

    return (
        <div className='main-landing-wrapper'>

            <div className='main-landing-wrapper__text-part'>
                <span className='main-landing-wrapper__text-part__small-text'>Save your time with Stacks</span>
                <span className='main-landing-wrapper__text-part__main-title'>
                    Make a dream Invest in NFT
                    <img src={MerchdaoCali} />
                </span>

                <div className='main-landing-wrapper__text-part__buttons-wrapper'>
                    <div className='main-landing-wrapper__text-part__buttons-wrapper__rose'>Show me trendings</div>
                    <div className='main-landing-wrapper__text-part__buttons-wrapper__blue'>Discover more</div>
                </div>
            </div>

            <div className='main-landing-wrapper__image'>
                <img src={MainLandingImage} />
            </div>

        </div>
    )
}