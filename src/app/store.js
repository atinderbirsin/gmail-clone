import { configureStore } from '@reduxjs/toolkit';
import formReducer from '../features/form/formSlice';
import errorsReducer from '../features/form/errorsSlice';

const preloadedState = {
  form: {
    // signupForm: {},
    // loginForm: {}
  },
  // errors: {},
};

export const store = configureStore({
  reducer: {
    form: formReducer,
    // errors: errorsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: true,
  preloadedState,
});
