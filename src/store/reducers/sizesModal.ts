interface ActionObject {
    type: string;
    payload: string;
}

export interface SizesModalState {
    size_modal_is_opened: boolean;
}

const initial_state = {
    size_modal_is_opened: false
}

export const sizesModalReducer = (state = initial_state, action: ActionObject) => {
    switch (action.type) {
        case 'CHANGE_SIZE_MODAL_STATE': 
            return {
                size_modal_is_opened: action.payload
            }
        default:
            return state
    }
}