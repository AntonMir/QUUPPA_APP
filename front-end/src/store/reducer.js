import { CHANGE_AUTH_PAGE_CHOSEN_FORM } from '@store/actions.js'
import { CHANGE_LANGUAGE } from '@store/actions.js'

export const reducer = (state, action) => {
    switch (action.type) {
        case CHANGE_AUTH_PAGE_CHOSEN_FORM:
            return {
                ...state,
                authPageChosenForm: action.status,
            }
        case CHANGE_LANGUAGE:
            return {
                ...state,
                pageLanguage: action.status,
            }

        default:
            return state
    }
}
