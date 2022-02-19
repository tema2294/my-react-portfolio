import { createSlice } from '@reduxjs/toolkit'


export interface CounterState {
    isLoading: boolean,
}

const initialState: CounterState = {
    isLoading: true,
}

export const rootSlice = createSlice({
    name: 'wallet',
    initialState,
    reducers: {
    },
})

export const rootSliceActions = rootSlice.actions
