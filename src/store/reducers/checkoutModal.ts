interface ActionObject {
    type: string;
    payload: string;
}

export interface CheckoutModalState {
    checkout_modal_is_opened: boolean;
}

const initial_state = {
    checkout_modal_is_opened: false
}

export const checkoutModalReducer = (state = initial_state, action: ActionObject) => {
    switch (action.type) {
        case 'CHANGE_CHECKOUT_MODAL_STATE': 
            return {
                checkout_modal_is_opened: action.payload
            }
        default:
            return state
    }
}