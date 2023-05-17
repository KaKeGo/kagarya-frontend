import {
    PROFILES_LIST_SUCCESS,
    PROFILES_LIST_FAIL
} from '../../actions/accounts/types'


const initialState = {
    p_username: '',
}

export default function(state = initialState, action) {
    const { type, payload} = action

    switch (type) {
        case PROFILES_LIST_SUCCESS:
            return {
                ...state,
                p_username: payload.p_username,
            }
        case PROFILES_LIST_FAIL:
            return {
                ...state,
                p_username: '',
            }
        default:
            return state
    }
}
