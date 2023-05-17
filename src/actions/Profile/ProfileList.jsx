import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


// const loadAllProfiles = createAsyncThunk('')

const profileState = {
    name: 'profile',
    initialState: {
        isLoading: false,
        data: null,
        isError: false,
    },
    extraReducers: (builder) => {

    } 
}

export default profileState.reducer
