import { createSlice } from '@reduxjs/toolkit';

export const formSlice = createSlice({
  name: 'form',
  initialState: { form: {} },
  reducers: {
    updateForm: (state, action) => {
      const formValue = action.payload;
      return { ...state, form: { ...state.form, formValue } };
    },

    addFirstName: (state, action) => {
      const firstName = action.payload;

      return { ...state, firstName };
    },
    addLastName: (state, action) => {
      const lastName = action.payload;

      return { ...state, lastName };
    },
    addEmail: (state, action) => {
      const email = action.payload;

      return { ...state, email };
    },
    addPassword: (state, action) => {
      const password = action.payload;

      return { ...state, password };
    },
    addConfirmPassword: (state, action) => {
      const confirmPassword = action.payload;

      return { ...state, confirmPassword };
    },
  },
});

export const {
  addFirstName,
  addLastName,
  addEmail,
  addPassword,
  addConfirmPassword,
  updateForm,
} = formSlice.actions;

export default formSlice.reducer;
