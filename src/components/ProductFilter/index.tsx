import {  useState } from 'react'

import './styles.sass'
import { RangeSlider } from '../RangeSlider/index'
import { DropdownArrowIcon, RangeTrack, SmallWhiteCrossIcon } from '../../icons'

export const ProductFilter = () => {

    const [openedList, setOpenedList] = useState<string>('')
    const [choosenCategory, setChoosenCategory] = useState<string>('all')
    const [isSecondRowShowed, setIsSecondRowShowed] = useState<boolean>(false)

    const toggleOpenedList = (type: string) => {
        if (type == openedList) {
            setOpenedList('')
        } else {
            setOpenedList(type)
        }
    }

    const toggleIsSecondRowShowed = () => {
        if (isSecondRowShowed) {
            setIsSecondRowShowed(false)
        } else {
            setIsSecondRowShowed(true)
        }
    }

    return (
        <div className='product-filter-wrapper'>
            
            <div className='product-filter-wrapper__first-row-wrapper'>
                <div className='dropdown-wrapper first-row-dropdown'>
                    <div 
                        className='dropdown-wrapper__title' 
                        onClick={ () => toggleOpenedList('date')}
                    >  
                        Recently Added
                        <div className={(openedList == 'date') ? 'reversedArrow' : ''}>
                            <DropdownArrowIcon/>
                        </div>
                    </div>

                    {
                        (openedList == 'date')
                        ?
                        <div className='dropdown-fading-wrapper'>
                            <div>selec</div>
                            <div>selec</div>
                            <div>selec</div>
                            <div>selec</div>
                        </div>
                        :
                        <></>
                    }

                </div>
                
                <div className={`panel-category-wrapper ${isSecondRowShowed? 'fs' : ''}`}>
                    <div
                        className={ (choosenCategory == 'all') ? 'selected-category-panel' : ''}
                        onClick={ () => setChoosenCategory('all')}
                    >All items</div>

                    <div
                        className={ (choosenCategory == 'art') ? 'selected-category-panel' : ''}
                        onClick={ () => setChoosenCategory('art')}                
                    >Art</div>

                    <div
                        className={ (choosenCategory == 'tshirt') ? 'selected-category-panel' : ''}
                        onClick={ () => setChoosenCategory('tshirt')}                
                    >T-Shirt</div>

                    <div
                        className={ (choosenCategory == 'nftcard') ? 'selected-category-panel' : ''}
                        onClick={ () => setChoosenCategory('nftcard')}                
                    >NFT Card</div>

                    <div
                        className={ (choosenCategory == 'socs') ? 'selected-category-panel' : ''}
                        onClick={ () => setChoosenCategory('socs')}              
                    >Socs</div>

                </div>

                <div className='filter-button' onClick={ () => toggleIsSecondRowShowed()}>
                    Filter { isSecondRowShowed ? <SmallWhiteCrossIcon/> : <></> }
                </div>

            </div>


            <div className='divider'></div>
            {
                isSecondRowShowed
                ?
                <div className='product-filter-wrapper__second-row-wrapper'>
                <div className='dropdown-wrapper'>
                    <span className='second-row-title'>NETWORK</span>

                    <div 
                        className='dropdown-wrapper__title' 
                        onClick={ () => toggleOpenedList('net')}
                    >  
                        All 
                        <div className={(openedList == 'net') ? 'reversedArrow' : ''}>
                            <DropdownArrowIcon/>
                        </div>
                    </div>

                    {
                        (openedList == 'net')
                        ?
                        <div className='dropdown-fading-wrapper'>
                            <div>selec</div>
                            <div>selec</div>
                            <div>selec</div>
                            <div>selec</div>
                        </div>
                        :
                        <></>
                    }

                </div>
                <div className='dropdown-wrapper'>
                    <span className='second-row-title'>PROJECT</span>
                    
                    <div 
                        className='dropdown-wrapper__title' 
                        onClick={ () => toggleOpenedList('proj')}
                    >  
                        All 
                        <div className={(openedList == 'proj') ? 'reversedArrow' : ''}>
                            <DropdownArrowIcon/>
                        </div>
                    </div>

                    {
                        (openedList == 'proj')
                        ?
                        <div className='dropdown-fading-wrapper'>
                            <div>selec</div>
                            <div>selec</div>
                            <div>selec</div>
                            <div>selec</div>
                        </div>
                        :
                        <></>
                    }

                </div>
                <div className='dropdown-wrapper'>
                    <span className='second-row-title'>LAUNCH</span>

                    <div 
                        className='dropdown-wrapper__title' 
                        onClick={ () => toggleOpenedList('launch')}
                    >  
                        All 
                        <div className={(openedList == 'launch') ? 'reversedArrow' : ''}>
                            <DropdownArrowIcon/>
                        </div>
                    </div>

                    {
                        (openedList == 'launch')
                        ?
                        <div className='dropdown-fading-wrapper'>
                            <div>selec</div>
                            <div>selec</div>
                            <div>selec</div>
                            <div>selec</div>
                        </div>
                        :
                        <></>
                    }

                </div>

                <div className='range-wrapper'>
                    <span className='second-row-title'>PRICE RANGE</span>
                    <RangeSlider />
                    <div className='prices'><span>0.5 $</span> <span>30 000 $</span></div>
                </div>

                </div>
                :
                <></>
            }


            
        </div>
    )
}