
import './styles.sass'
import SizesTable from '../../images/SizesTable.png'
import { CloseCrossIcon } from '../../icons'
import { useDispatch } from 'react-redux'

export const SizesModal = () => {

    const dispatch = useDispatch()
    const changeSizeModalState = (value: boolean) => ({type: 'CHANGE_SIZE_MODAL_STATE', payload: value})

    const closeModal = () => {
        dispatch(changeSizeModalState(false))
        document.body.style.overflowY = 'scroll'
    }

    return (
        <div className='size-modal-wrapper' style={{top: window.pageYOffset}}>

            <div className='size-modal-wrapper__size-modal-win'>
                <span className='size-modal-wrapper__size-modal-win__title'>Detect your size</span>
                <div><img src={SizesTable}/></div>
                <div 
                    onClick={() => closeModal()}
                    className='size-modal-wrapper__size-modal-win__close-button'
                >
                    Close
                </div>
            </div>

            <div 
                onClick={() => closeModal()}
                className='size-modal-wrapper__cross'
            >
                <CloseCrossIcon />
            </div>
        </div>
    )
}