import Cookie from 'js-cookie'
import axios from 'axios'
import {
    PROFILES_LIST_SUCCESS,
    PROFILES_LIST_FAIL,
} from './types'


export const load_profile_list = () => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    }

    try {
        const response = await axios
                .get(`${process.env.REACT_APP_API_URL}/account/list/`,
                config
             )
        if (response.data.error) {
            dispatch({
                type: PROFILES_LIST_FAIL,
                payload: response.data
            })
        } else {
            dispatch({
                type: PROFILES_LIST_SUCCESS,
                payload: response.data
            })
        }
    } catch (err) {
        dispatch({
            type: PROFILES_LIST_FAIL,
        })
    }
}
