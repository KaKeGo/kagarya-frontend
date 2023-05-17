import { configureStore } from '@reduxjs/toolkit'

import profileReducer from './actions/Profile/ProfileList'


export const store = configureStore({
    reducer: {
        profile: profileReducer,
    },
    devTools: process.env.NODE_ENV !== 'production'
})
