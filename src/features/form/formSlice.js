import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
    name:'form',
    initialState: {},
    reducers: {
        addFirstName: (state,action) => {
            const firstName = action.payload

            return {...state,firstName}
        },
        addLastName: (state,action) => {
            const lastName = action.payload

            return {...state,lastName}
        },
        // addEmail: (state,action) => {
        //     const email = action.payload

        //     return {...state,email}
        // },
        // addPassword: (state,action) => {
        //     const password = action.payload

        //     return {...state,password}
        // },
        // addConfirmPassword: (state,action) => {
        //     const confirmPassword = action.payload

        //     return {...state,confirmPassword}
        // },
    }
})

// export const { addFirstName, addLastName, addEmail, addPassword, addConfirmPassword } = formSlice.actions;
export const { addFirstName, addLastName } = formSlice.actions;

export default formSlice.reducer