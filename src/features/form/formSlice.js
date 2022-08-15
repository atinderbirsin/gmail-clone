import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
    name:'form',
    initialState: {},
    reducers: {
        updateValue: (state,action) => {
            const value = action.apyload;

            return {...state, signupForm: {
                ...state.signupForm, value
            }, }
        },
    }
})

export const { updateValue } = formSlice.actions;

export default formSlice.reducer