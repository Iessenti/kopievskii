
import { data } from '../../data'

import { ProductElement } from '../ProductElement/index'
import { LoadingIcon } from '../../icons'
import './styles.sass'

export const ProductsList = () => {

    // здесь должны быть запросы на сервер

    return (
        <div className='products-list-wrapper'>
            <div className='products-list-wrapper__elements'>
            {
                data.map( (elem, index) => (
                    <ProductElement type='small' key={index} id={elem.id} count={elem.count} countLeft={elem.countLeft} photoUrl={elem.photoUrl} price={elem.price} desc={elem.desc} />
                ))
            }
            </div>
            <div className='products-list-wrapper__load-more-button'>
                <LoadingIcon/>Load more
            </div>
        </div>
    )

}