import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
    name:'form',
    initialState: {},
    reducers: {
        updateValue: (state,action) => {
            const value = action.payload;

            return {...state, signupForm: {
                ...state.signupForm, ...value.signupForm
            },
            loginForm: {
                ...state.loginForm, ...value.loginForm
            }, }
        },
        updateError: (state,action) => {
            const value = action.payload;

            return {...state, signupFormError: {
                ...state.signupFormError, ...value.signupFormError
            },
            loginFormError: {
                ...state.loginFormError, ...value.loginFormError
            }, }
        },
    }
})

export const { updateValue, updateError } = formSlice.actions;

export default formSlice.reducer