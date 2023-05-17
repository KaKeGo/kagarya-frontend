import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


export const loadAllProfiles = createAsyncThunk('profiles/list/', async (_, thunkApi) => {
    try {
        const res = await fetch('http://localhost:8000/account/list/', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
            }      
        })

        const data = await res.json()

        if(res.status === 200) {
            return data
        } else {
            return thunkApi.rejectWithValue(data)
        }

    } catch(err) {
        return thunkApi.rejectWithValue(err.res.data)
    }
})

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
