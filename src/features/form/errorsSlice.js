import { createSlice } from "@reduxjs/toolkit";

export const errorsSlice = createSlice({
    name:'errors',
    initialState: {},
    reducers: {
        addErrors: (state,action) => {
            const payload = action.payload

            return {...state,...payload}
        },
        removeErrors: (state) => {
            return {};
        }        
    }
})

// export const { addFirstName, addLastName, addEmail, addPassword, addConfirmPassword } = formSlice.actions;
export const { addErrors,removeErrors } = errorsSlice.actions;

export default errorsSlice.reducer