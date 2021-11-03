
import './styles.sass'

import MerchIcon from '../../images/MerchIcon.png'
import BannerLeft from '../../images/BannerLeft.png'
import { AndIcon } from '../../icons'

export const MainPageBanner = () => {

    return (
        <div className='main-page-banner-wrapper'>
            <img src={BannerLeft} className='banner-main-image' />
            <div className='main-page-banner-wrapper__text-wrapper'>
                <div>Discover <AndIcon/> Invest</div>
                <span>The first hybrid DeFi investment platform for GameFi and NFT projects</span>
            </div>
            <img src={MerchIcon} className='MerchIcon'/>
        </div>
    )
}