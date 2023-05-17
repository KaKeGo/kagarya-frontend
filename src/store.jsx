import { configureStore } from '@reduxjs/toolkit'

import profileReducer from './actions/Profile'


export const store = configureStore({
    reducer: {
        profile: profileReducer,
    }
})
