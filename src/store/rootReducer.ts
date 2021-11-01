import { combineReducers } from "redux";

import { sizesModalReducer } from './reducers/sizesModal'
import { checkoutModalReducer } from './reducers/checkoutModal'

export const rootReducer = combineReducers({
    sizesModal: sizesModalReducer,
    checkoutModal: checkoutModalReducer
})